"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import {
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import maplibregl, {
  FullscreenControl,
  GeolocateControl,
  Map as MapLibreMap,
  type MapOptions,
  Marker,
  type MarkerOptions,
  NavigationControl,
  type StyleSpecification,
} from "maplibre-gl";
import { cn } from "@/lib/utils";

const defaultStyles = {
  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
};

type ThemeMode = "light" | "dark";

type MapContextValue = {
  map: MapLibreMap | null;
  isLoaded: boolean;
};

const MapContext = createContext<MapContextValue>({ map: null, isLoaded: false });

export type MapRef = MapLibreMap | null;

export type MapProps = Omit<MapOptions, "container" | "style"> & {
  children?: ReactNode;
  className?: string;
  theme?: ThemeMode;
  styles?: {
    light?: string | StyleSpecification;
    dark?: string | StyleSpecification;
  };
};

export const Map = forwardRef<MapRef, MapProps>(
  ({ children, className, theme, styles, center, zoom, ...options }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<MapLibreMap | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const resolvedTheme = useMemo<ThemeMode>(() => {
      if (theme) return theme;
      if (typeof document === "undefined") return "light";
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }, [theme]);

    const styleForTheme =
      styles?.[resolvedTheme] ?? defaultStyles[resolvedTheme];

    useEffect(() => {
      if (!containerRef.current || mapRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: styleForTheme,
        center,
        zoom,
        ...options,
      });

      mapRef.current = map;
      if (typeof ref === "function") {
        ref(map);
      } else if (ref) {
        ref.current = map;
      }

      map.once("load", () => {
        setIsLoaded(true);
      });

      return () => {
        map.remove();
        mapRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!mapRef.current || theme) return;

      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark");
        const nextStyle =
          styles?.[isDark ? "dark" : "light"] ??
          defaultStyles[isDark ? "dark" : "light"];
        mapRef.current?.setStyle(nextStyle);
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }, [styles, theme]);

    const centerKey = useMemo(() => {
      if (!center) return "";
      if (Array.isArray(center)) return center.join(",");
      if (typeof center === "object" && "lng" in center && "lat" in center) {
        return `${center.lng},${center.lat}`;
      }
      if (typeof center === "object" && "lon" in center && "lat" in center) {
        return `${center.lon},${center.lat}`;
      }
      return "";
    }, [center]);

    useEffect(() => {
      if (!mapRef.current || !center) return;
      mapRef.current.setCenter(center);
    }, [center, centerKey]);

    useEffect(() => {
      if (!mapRef.current || typeof zoom !== "number") return;
      mapRef.current.setZoom(zoom);
    }, [zoom]);

    return (
      <MapContext.Provider value={{ map: mapRef.current, isLoaded }}>
        <div ref={containerRef} className={cn("h-full w-full", className)}>
          {mapRef.current && children}
        </div>
      </MapContext.Provider>
    );
  }
);

Map.displayName = "Map";

export function useMap() {
  return useContext(MapContext);
}

export type MapControlsProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  showZoom?: boolean;
  showCompass?: boolean;
  showLocate?: boolean;
  showFullscreen?: boolean;
  className?: string;
  onLocate?: (coords: { longitude: number; latitude: number }) => void;
};

export function MapControls({
  position = "bottom-right",
  showZoom = true,
  showCompass = false,
  showLocate = false,
  showFullscreen = false,
  className,
  onLocate,
}: MapControlsProps) {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    const controls: maplibregl.IControl[] = [];

    if (showZoom || showCompass) {
      const nav = new NavigationControl({
        showZoom,
        showCompass,
      });
      map.addControl(nav, position);
      controls.push(nav);
    }

    if (showLocate) {
      const locate = new GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: false,
      });

      if (onLocate) {
        locate.on("geolocate", (event) => {
          onLocate({
            longitude: event.coords.longitude,
            latitude: event.coords.latitude,
          });
        });
      }

      map.addControl(locate, position);
      controls.push(locate);
    }

    if (showFullscreen) {
      const fullscreen = new FullscreenControl();
      map.addControl(fullscreen, position);
      controls.push(fullscreen);
    }

    if (className) {
      const container = map
        .getContainer()
        .querySelector(`.maplibregl-ctrl-${position}`);
      container?.classList.add(...className.split(" "));
    }

    return () => {
      controls.forEach((control) => map.removeControl(control));
    };
  }, [
    map,
    position,
    showZoom,
    showCompass,
    showLocate,
    showFullscreen,
    className,
    onLocate,
  ]);

  return null;
}

export type MapMarkerProps = Omit<MarkerOptions, "element"> & {
  longitude: number;
  latitude: number;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  onDragStart?: (lngLat: { lng: number; lat: number }) => void;
  onDrag?: (lngLat: { lng: number; lat: number }) => void;
  onDragEnd?: (lngLat: { lng: number; lat: number }) => void;
};

export function MapMarker({
  longitude,
  latitude,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onDragStart,
  onDrag,
  onDragEnd,
  ...options
}: MapMarkerProps) {
  const { map } = useMap();
  const markerRef = useRef<Marker | null>(null);
  const markerElement = useMemo(() => {
    if (typeof document === "undefined") return null;
    const element = document.createElement("div");
    element.style.display = "inline-flex";
    return element;
  }, []);

  useEffect(() => {
    if (!map || !markerElement) return;

    const marker = new Marker({ element: markerElement, ...options })
      .setLngLat([longitude, latitude])
      .addTo(map);

    markerRef.current = marker;

    if (onClick) markerElement.addEventListener("click", onClick);
    if (onMouseEnter)
      markerElement.addEventListener("mouseenter", onMouseEnter);
    if (onMouseLeave)
      markerElement.addEventListener("mouseleave", onMouseLeave);

    if (onDragStart) {
      marker.on("dragstart", () => {
        const { lng, lat } = marker.getLngLat();
        onDragStart({ lng, lat });
      });
    }
    if (onDrag) {
      marker.on("drag", () => {
        const { lng, lat } = marker.getLngLat();
        onDrag({ lng, lat });
      });
    }
    if (onDragEnd) {
      marker.on("dragend", () => {
        const { lng, lat } = marker.getLngLat();
        onDragEnd({ lng, lat });
      });
    }

    return () => {
      marker.remove();
      if (onClick) markerElement.removeEventListener("click", onClick);
      if (onMouseEnter)
        markerElement.removeEventListener("mouseenter", onMouseEnter);
      if (onMouseLeave)
        markerElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [
    map,
    markerElement,
    longitude,
    latitude,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onDragStart,
    onDrag,
    onDragEnd,
    options,
  ]);

  useEffect(() => {
    if (!markerRef.current) return;
    markerRef.current.setLngLat([longitude, latitude]);
  }, [longitude, latitude]);

  if (!markerElement) return null;

  return createPortal(children, markerElement);
}

export type MarkerContentProps = {
  children?: ReactNode;
  className?: string;
};

export function MarkerContent({ children, className }: MarkerContentProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {children ?? (
        <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.25)]" />
      )}
    </div>
  );
}

export type MarkerLabelProps = {
  children?: ReactNode;
  className?: string;
  position?: "top" | "bottom";
};

export function MarkerLabel({
  children,
  className,
  position = "top",
}: MarkerLabelProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-lg",
        position === "top" ? "bottom-full mb-2" : "top-full mt-2",
        className
      )}
    >
      {children}
    </div>
  );
}

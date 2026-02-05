"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const TRANSITION_DURATION = 0.3;
const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1] as const;
const AVATAR_COUNT = 5;
const STAGGER_DELAY = 0.05;

export interface Stargazer {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubStarsAnimationProps {
  owner?: string;
  repo?: string;
  stargazers?: Stargazer[];
  starCount?: number;
  apiEndpoint?: string;
  className?: string;
  avatarClassName?: string;
  countClassName?: string;
  showAvatars?: boolean;
  maxAvatars?: number;
}

export default function GitHubStarsAnimation({
  owner = "educlopez",
  repo = "smoothui",
  stargazers: providedStargazers,
  starCount: providedStarCount,
  apiEndpoint,
  className = "",
  avatarClassName = "",
  showAvatars = true,
  maxAvatars = AVATAR_COUNT,
}: GitHubStarsAnimationProps) {
  const [stargazers, setStargazers] = useState<Stargazer[]>(
    providedStargazers || []
  );
  const [starCount, setStarCount] = useState(providedStarCount || 0);
  const [isLoading, setIsLoading] = useState(!providedStargazers);
  const [error, setError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (providedStargazers && providedStarCount !== undefined) {
      setStargazers(providedStargazers);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);

        if (apiEndpoint) {
          const response = await fetch(
            `${apiEndpoint}?owner=${owner}&repo=${repo}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data.stargazers) {
              setStargazers(data.stargazers.slice(0, maxAvatars));
            }
            if (data.stars !== undefined) {
              setStarCount(data.stars);
            }
            setIsLoading(false);
            return;
          }
        }

        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
        };

        const [repoResponse, stargazersResponse] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }),
          fetch(
            `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=${maxAvatars}`,
            { headers }
          ),
        ]);

        if (repoResponse.ok) {
          try {
            const repoData = await repoResponse.json();
            setStarCount(repoData.stargazers_count || 0);
          } catch {
            // ignore
          }
        }

        if (stargazersResponse.ok) {
          try {
            const stargazersData =
              (await stargazersResponse.json()) as Stargazer[];
            setStargazers(stargazersData.slice(0, maxAvatars));
          } catch {
            // ignore
          }
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    owner,
    repo,
    apiEndpoint,
    maxAvatars,
    providedStargazers,
    providedStarCount,
  ]);

  if (isLoading) {
    return (
      <div className={cn("flex items-center gap-3 text-foreground/60", className)}>
        <div className="h-10 w-10 animate-pulse rounded-full bg-foreground/20" />
        <div className="h-6 w-20 animate-pulse rounded bg-foreground/20" />
      </div>
    );
  }

  if (error && starCount === 0 && stargazers.length === 0) {
    return null;
  }

  const visibleAvatars = stargazers.slice(0, maxAvatars);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showAvatars && visibleAvatars.length > 0 && (
        <div className="relative flex items-center">
          {visibleAvatars.map((stargazer, index) => (
            <motion.div
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }
              }
              aria-label={`${stargazer.login}'s avatar`}
              className={cn(
                "relative z-10 h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-background transition-transform hover:z-20 hover:scale-110",
                avatarClassName
              )}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      x: -20,
                    }
              }
              key={stargazer.login}
              style={{
                marginLeft: index > 0 ? "-8px" : "0",
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: TRANSITION_DURATION,
                      delay: index * STAGGER_DELAY,
                      ease: EASE_OUT_CUBIC,
                    }
              }
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, zIndex: 20 }}
            >
              <img
                alt={`${stargazer.login}'s avatar`}
                className="h-full w-full object-cover"
                src={stargazer.avatar_url}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

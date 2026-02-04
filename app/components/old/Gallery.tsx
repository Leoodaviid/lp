export function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Bastidores</div>
          <h2 className="section-title">
            Momentos que marcaram as últimas turmas
          </h2>
          <p className="section-subtitle">
            A formação foi pensada para ser intensa, prática e, ao mesmo tempo,
            leve. Um espaço seguro para trocar, aprender e crescer.
          </p>
        </div>

        <div className="gallery-main">
          {/* ESPAÇO PARA FOTO GRANDE DA TURMA / EVENTO */}
        </div>

        <div className="gallery-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="gallery-thumb">
              {/* ESPAÇO PARA FOTO {index + 1} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

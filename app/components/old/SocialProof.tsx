export function SocialProof() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Resultados na prática</div>
          <h2 className="section-title">
            O que acontece com quem aplica a metodologia
          </h2>
          <p className="section-subtitle">
            Veja alguns registros de turmas anteriores, depoimentos e lugares
            onde já falamos sobre a formação.
          </p>
        </div>

        <div className="social-proof">
          <article className="proof-card">
            <div className="proof-image">
              {/* ESPAÇO PARA IMAGEM / PRINT / LOGO 1 */}
            </div>
            <h3 className="card-title">Atendimentos lotados em poucos meses</h3>
            <p className="card-text">
              Alunas que começaram do zero e hoje têm agenda cheia, cobrando o
              valor que desejam, aplicando exatamente o que aprenderam na
              formação.
            </p>
          </article>

          <article className="proof-card">
            <div className="proof-image">
              {/* ESPAÇO PARA IMAGEM / PRINT / LOGO 2 */}
            </div>
            <h3 className="card-title">
              Reconhecimento em eventos e congressos
            </h3>
            <p className="card-text">
              Professores convidados para palestrar em eventos nacionais e
              internacionais, levando os conceitos trabalhados na Nutri Expert
              para milhares de profissionais.
            </p>
          </article>

          <article className="proof-card">
            <div className="proof-image">
              {/* ESPAÇO PARA IMAGEM / PRINT / LOGO 3 */}
            </div>
            <h3 className="card-title">Comunidade que cresce junto</h3>
            <p className="card-text">
              Grupo fechado para troca de casos clínicos, networking e suporte
              entre os alunos, para você nunca mais se sentir sozinha na tomada
              de decisões.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

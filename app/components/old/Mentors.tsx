export function Mentors() {
  return (
    <section className="section mentors-section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Quem vai te acompanhar</div>
          <h2 className="section-title">
            Um time de especialistas reconhecidos na prática clínica
          </h2>
          <p className="section-subtitle">
            Cada módulo é conduzido por profissionais que vivem o consultório no
            dia a dia, com experiência em casos complexos e resultados
            consistentes.
          </p>
        </div>

        <div className="mentors-grid">
          <article className="mentor-card">
            <div className="mentor-photo">
              {/* ESPAÇO PARA IMAGEM DO(A) MENTOR(A) 1 */}
            </div>
            <div className="mentor-role">Coordenadora da formação</div>
            <div className="mentor-name">Nome Mentor(a) 1</div>
            <p className="mentor-bio">
              Nutricionista clínica, especialista em X e Y, referência em
              atendimento a pacientes de alta complexidade e palestrante nos
              principais congressos da área.
            </p>
          </article>

          <article className="mentor-card">
            <div className="mentor-photo">
              {/* ESPAÇO PARA IMAGEM DO(A) MENTOR(A) 2 */}
            </div>
            <div className="mentor-role">Nutrição esportiva</div>
            <div className="mentor-name">Nome Mentor(a) 2</div>
            <p className="mentor-bio">
              Atua com atletas e praticantes de alta performance, trazendo
              protocolos atualizados para ganho de massa, redução de gordura e
              performance.
            </p>
          </article>

          <article className="mentor-card">
            <div className="mentor-photo">
              {/* ESPAÇO PARA IMAGEM DO(A) MENTOR(A) 3 */}
            </div>
            <div className="mentor-role">Nutrição funcional</div>
            <div className="mentor-name">Nome Mentor(a) 3</div>
            <p className="mentor-bio">
              Especialista em modulação intestinal, inflamação crônica e
              abordagem integrativa, com foco em melhorar sintomas e qualidade
              de vida dos pacientes.
            </p>
          </article>

          <article className="mentor-card">
            <div className="mentor-photo">
              {/* ESPAÇO PARA IMAGEM DO(A) MENTOR(A) 4 */}
            </div>
            <div className="mentor-role">Gestão de consultório</div>
            <div className="mentor-name">Nome Mentor(a) 4</div>
            <p className="mentor-bio">
              Ajuda nutricionistas a estruturarem agenda, processos e
              precificação para terem previsibilidade de faturamento e qualidade
              de atendimento.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

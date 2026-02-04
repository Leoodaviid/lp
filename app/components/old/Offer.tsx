export function Offer() {
  return (
    <section id="oferta" className="section offer">
      <div className="container">
        <div className="offer-inner">
          <div className="offer-main">
            <div className="section-kicker">Inscrições limitadas</div>
            <h2 className="section-title">Garanta sua vaga na próxima turma</h2>
            <p className="card-text">
              A formação acontece ao vivo, com número limitado de participantes
              para manter o acompanhamento próximo. Ao se inscrever, você já
              recebe acesso imediato à área de alunos e aos materiais bônus.
            </p>

            <div className="price-line">
              <div className="price-current">12x R$ 297,00</div>
              <div className="price-old">de R$ 4.997,00 por</div>
            </div>
            <div className="price-note">
              ou R$ 2.997,00 à vista no cartão ou PIX
            </div>

            <ul className="offer-list">
              <li>
                <span className="offer-badge" />
                <span>
                  Acesso completo às aulas ao vivo + gravações por 12 meses.
                </span>
              </li>
              <li>
                <span className="offer-badge" />
                <span>
                  Encontros de mentoria para discussão de casos reais dos
                  alunos.
                </span>
              </li>
              <li>
                <span className="offer-badge" />
                <span>
                  Protocolos prontos, modelos de anamnese e materiais
                  imprimíveis.
                </span>
              </li>
              <li>
                <span className="offer-badge" />
                <span>
                  Comunidade exclusiva com suporte direto da equipe da formação.
                </span>
              </li>
            </ul>

            <div className="offer-cta-group">
              <a href="#oferta" className="btn btn-primary">
                Quero fazer parte da turma
              </a>
              <a href="#programa" className="btn btn-ghost">
                Ver o programa detalhado
              </a>
            </div>
          </div>

          <aside className="offer-side">
            <div>
              <div className="offer-badge-tag">garantia blindada</div>
              <h3 className="offer-side-title">
                Experimente por 14 dias sem risco
              </h3>
              <p className="card-text offer-side-text">
                Se dentro de 14 dias você sentir que a formação não é para você,
                basta enviar uma mensagem para nossa equipe e devolvemos 100% do
                seu investimento, sem perguntas.
              </p>
              <div className="offer-guarantee">
                Você entra, assiste às aulas iniciais, participa da comunidade e
                decide com calma se quer continuar. Todo o risco fica do nosso
                lado.
              </div>
            </div>
            <div className="offer-side-footer">
              Próxima turma com início em <strong>[DATA]</strong>. Depois dessa
              data, o valor pode ser reajustado.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Eventos Esportivos</title>
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">ESPORTE</h1>
          <p><em><strong>Eventos esportivos da AsEFEx suspensos por conta da pandemia da COVID-19. As atividades serão retomadas quando for possível realizar eventos com segurança.</strong></em> </p>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </div>
  )
}

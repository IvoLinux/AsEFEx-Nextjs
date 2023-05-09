import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Escritura na Revista da AsEFEx</title>
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">ESCREVA NA REVISTA AsEFEx</h1>
          <p><strong><em>Orientações para a submissão de matérias para a Revista da AsEFEx em elaboração, material estará disponível em breve.</em></strong></p>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </div>
  )
}

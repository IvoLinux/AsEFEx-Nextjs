import Head from 'next/head'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página das Mídias Sociais</title>

        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">MÍDIAS SOCIAIS</h1>
          <p><strong>@asefex1990_desportoexercito</strong></p>
          <p>Siga-nos nas redes sociais:</p>
          <div className="container">
            <div className="row">
              <Card title="Facebook" image="images/facebook.png"
                route="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/" />
              <Card title="Instagram" image="images/instagram.png"
                route="https://www.instagram.com/asefex1990_desportoexercito/" />
            </div>
          </div>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </div>
  )
}

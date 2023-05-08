import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Sede AsEFEx</title>

        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />
      </Head>

      <div id="content" className="span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <div className="row-fluid module">
            <h1 className="documentFirstHeading">
              Sede - AsEFEx
            </h1>
            <section className="module-section">
              <div className="span4 no-margin">
                <h2>
                  <Link href="#">Sobre a Sede</Link>
                </h2>
                <p>A sede da AsEFEx - Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército fica na Fortaleza de São João, no bairro das Urca, no Rio de Janeiro-RJ, em dependências sob cessão do Centro de Capacitação Física do Exército Brasileiro.</p>
                <p>Para saber mais sobre a localização da AsEFEx, <Link style={{ color: '#0088CC' }} href="https://goo.gl/maps/N53Y6ugWhxis7Lmm7">clique aqui </Link>.</p>
              </div>
              {/* fim .span4 */}
              <div className="span8">
                <object width={480} height={246}> <img src="images/local.png" /></object>
              </div>
              {/* fim .span8 */}
            </section>
          </div>
          <div className="row-fluid">
            <div className="span4 module variacao-module-01">
              <h2>Telefone:</h2>
              <p><strong>Tel. </strong>(21) 2585-2290</p>
            </div>
            <div className="span4 module variacao-module-02">
              <h2>E-mail:</h2>
              <p><strong>E-mail:</strong> asefex1990@gmail.com</p>
            </div>
          </div>
          {/* fim .row-fluid */}
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </div>
  )
}

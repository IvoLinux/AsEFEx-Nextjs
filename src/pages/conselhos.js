import Head from 'next/head'
import Script from 'next/script'
import Header from '../modules/header'
import Menu from '../modules/menu'
import Footer from '../modules/footer'
import BarraGov from '@/components/BarraGov'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Conselheiros</title>
        
        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />
      </Head>

      <noscript>
        <div className="error minor-font">
          Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
          podem não estar acessíveis.
        </div>
      </noscript>

      <div className="layout">
        <BarraGov />
        <header>
          <Header />
        </header>

        <main>
          <div className="container">
            <div className="row-fluid">
              <Menu />
              <div id="content" className="internas span9">
                <section id="content-section">
                  <span className="hide">Início do conteúdo da página</span>
                  <h1 className="documentFirstHeading">CONSELHEIROS AsEFEx</h1>
                  <h2>CONSELHO DELIBERATIVO</h2>
                  <p><strong>Presidente:</strong></p>
                  <ul className="lista">
                    <li><b>Cel</b> Rogerio Rodrigues Dias</li>
                  </ul>
                  <p><strong>Membros Efetivos:</strong> </p>
                  <ul className="lista">
                    <li><b>Cel</b> Paulo Roberto de Miranda Barros</li>
                    <li><b>Cel</b> Jorge Luiz Soares Ribeiro</li>
                    <li><b>Cel</b> Marco Aurelio Souto de Araújo</li>
                    <li><b>Cel</b> Carlos Eduardo Ilha dos Santos</li>
                    <li><b>Cel</b> Luiz Fernando Medeiros Nóbrega</li>
                    <li><b>Cel</b> Alexandre Tempesta Lincoln</li>
                  </ul>
                  <p><strong>Suplentes:</strong> </p>
                  <ul className="lista">
                    <li><b>Cel</b> Marco Aurélio Baptista</li>
                    <li><b>Cel</b> PM Carlos Eduardo Hespanha Matt</li>
                  </ul>
                  <h2>CONSELHO FISCAL</h2>
                  <p><strong>Presidente:</strong></p>
                  <ul className="lista">
                    <li><b>Cel</b>  Alberto César Álvares Fernandes</li>
                  </ul>
                  <p><strong>Membros Efetivos:</strong> </p>
                  <ul className="lista">
                    <li><b>Ten</b> Vicente Pawelec</li>
                    <li><b>Sr.</b> Adilson Soares Barbosa</li>
                  </ul>
                  <p><strong>Suplentes:</strong> </p>
                  <ul className="lista">
                    <li><b>Sr.</b> Francisco Henrique Fauth</li>
                  </ul>
                  <span className="hide">Fim do conteúdo da página</span>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </div>
  )
}

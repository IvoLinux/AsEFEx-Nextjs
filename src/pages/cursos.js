import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Header from '../modules/header'
import Menu from '../modules/menu'
import Footer from '../modules/footer'
import BarraGov from '@/components/BarraGov'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Cursos</title>
        
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
                  <h1 className="documentFirstHeading">CURSOS</h1>
                  <div className="description"> CURSOS DE INTERESSE PARA ASSOCIADOS E AMIGOS </div>
                  <p> Não há cursos oferecidos pela AsEFEx no momento. </p>
                  <p>Os Associados e Amigos podem verificar condições especiais de matrícula nas instituições parceiras da AsEFEx:</p>
                  <div style={{ margin: '1cm 6cm 1cm 6cm' }}>
                    <Link href="http://www.castelobranco.br/"><img alt="Universidade Castelo Branco" src="images/castelo_branco.png" style={{ maxWidth: 310, maxHeight: 200, width: 'auto', height: 'auto' }} /></Link>
                  </div>
                  <p>- Mensalidades diferenciadas em cursos de graduação e pós-graduação na Universidade Castelo Branco</p>
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

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
        <meta charset="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Galeria de Agraciados</title>
        {/*<base href="" />*/}
        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />

        {/* manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`. */}

        {/* <!--[if lt IE 9]><script src="js/html5shiv.js"></script><![endif]--> */}
        <link href="images/Logo.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" type='text/css' />
        <link rel="stylesheet" href="css/template-verde.css" type='text/css' />
        <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type='text/css' />
        {/* <!--[if lt IE 10]><link rel="stylesheet" href="css/ie.css" /><![endif]-->
        <!--[if lt IE 9]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
        <!--[if lt IE 8]><link rel="stylesheet" href="css/ie7.css" /><link rel="stylesheet" href="font-awesome/css/font-awesome-ie7.min.css" /><![endif]-->
        <!-- chamada de fontes local -->
        <!-- <link rel="stylesheet" href="css/fontes.css" type='text/css' />		 -->
        <!-- chamada de fontes externas --> */}
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,800,700' rel='stylesheet'
          type='text/css' />
        <link rel="stylesheet" href="jplayer/skin/portalpadrao01/jplayer.css" type='text/css' />
        <link rel="stylesheet" href="css/css_adicional.css" type='text/css' />
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
                  <h1 className="documentFirstHeading">GALERIA DE AGRACIADOS</h1>
                  <p><strong><em>Registros de agraciados com a MEDALHA MÉRITO ESPORTIVO AsEFEx sendo digitalizadas, material estará disponível em breve.</em></strong></p>
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

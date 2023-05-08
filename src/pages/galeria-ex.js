import Head from 'next/head'
import Script from 'next/script'
import Header from '../modules/header'
import Menu from '../modules/menu'
import Footer from '../modules/footer'
import BarraGov from '@/components/BarraGov'
import Filtro from './filtro_galeria'

export default function GaleriaExAlunos() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Galeria dos Ex Alunos da EsEFEx</title>

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
        <Header />

        <main>
          <div className="container">
            <div className="row-fluid">
              <Menu />
              <Filtro />
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
    </>
  )
}
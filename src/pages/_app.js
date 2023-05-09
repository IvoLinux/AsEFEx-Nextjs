import '../styles/globals.css'
import Footer from '@/modules/footer'
import Header from '@/modules/header'
import Menu from '@/modules/menu'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <noscript>
        <div className="error minor-font">
          Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
          podem não estar acessíveis.
        </div>
      </noscript>

      <Header />

      <main>
        <div className="container">
          <div className="row-fluid">
            <Menu />
            <Component {...pageProps} />
          </div>
        </div>
      </main>

      <Footer />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </div>
  )
}

export default MyApp

import '../styles/globals.css'
import Footer from '@/modules/footer'
import Header from '@/modules/header'
import Menu from '@/modules/menu'

function MyApp({ Component, pageProps }) {
  return <>
    <noscript>
      <div className="error minor-font">
        Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
        podem não estar acessíveis.
      </div>
    </noscript>

    <Header />
    
    <div className="layout">
      <main>
        <div className="container">
          <div className="row-fluid">
            <Menu />
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </div>

    <Footer />
  </>
}

export default MyApp

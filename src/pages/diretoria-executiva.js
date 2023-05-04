import Head from 'next/head'
import Script from 'next/script'
import Header from '../modules/header'
import Menu from '../modules/menu'
import Footer from '../modules/footer'
import BarraGov from '@/components/BarraGov'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Diretoria Executiva</title>
        
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
                  <h1 className="documentFirstHeading">DIRETORIA EXECUTIVA</h1>
                  <div className="container">

                    <div className="row">
                      <Card title="Presidente" image="images/presidente.png"
                        description={<><b>Cel</b> Josué Morisson de Moraes</>} />
                      <Card title="Vice-Presidente" image="images/vicepresidente.png"
                        description={<><b>Cel</b> Mauro Benedito Guaraldo Secco</>} />
                    </div>

                    <div className="row">
                      <Card title="Diretor Administrativo" image="images/DirExec_Generica.png"
                        description={<><b>Ten</b> Cleber das Neves Tourinho</>} />
                      <Card title="Diretor de Planejamento e Controle" image="images/diretorplanejamento.png"
                        description={<><b>Cel</b> Antonio Fernando Araújo Duarte</>} />
                    </div>

                    <div className="row">
                      <Card title="Diretor de Comunicação Social" image="images/diretorcomunicacao.png"
                        description={<><b>Ten Cel</b> Flavio Gomes Ferreira Pinto</>} />
                      <Card title="Diretor Cultural" image="images/diretorcultural.png"
                        description={<><b>Cel</b> Joel Francisco Correa</>} />
                    </div>

                    <div className="row">
                      <Card title="Diretor para Esporte e Eventos" image="images/diretoresportes.jpg"
                        description={<><b>Ten Cel</b> André Valentim Siqueira Rodrigues</>} />
                      <Card title="Diretor Financeiro e de Patrimônio" image="images/diretorfinanceiro.png"
                        description={<><b>Cel</b> Mário Vilá Pitaluga Filho</>} />
                    </div>

                    <div className="row">
                      <Card title="Assessor" image="images/DirExec_Generica.png"
                        description={<><b>Cap</b> Ricardo Correa Neves</>} />
                      <Card title="Assessor" image="images/DirExec_Generica.png"
                        description={<><b>Ten</b> Augusto Antônio Munck</>} />
                    </div>

                    <div className="row">
                      <Card title="Assessor" image="images/DirExec_Generica.png"
                        description={<><b>Ten</b> Jorge Ferreira da Purificação</>} />
                    </div>
                  </div>
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

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
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
            <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Revista AsEFEx</title>
            
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
                           <h1 className="documentFirstHeading">REVISTA AsEFEx</h1>
                           <p>A revista da AsEFEx tem a finalidade de divulgar matérias nas áreas
                              do ensino e pesquisa em capacitação física e áreas correlatas, desporto,
                              cultura e divulgação de fatos e eventos relacionados à atuação de Ex-Alunos e Amigos,
                              ao CCFEx e suas Organizações Militares Diretamente Subordinadas (EsEFEx, IPCFEx e CDE)
                              e ao Sitio Histórico da Fortaleza de São João. </p>
                           <p>
                              <Link style={{ color: '#0088CC' }} href="/escreva">Faça sua proposta de matéria para publicação na Revista da AsEFEx.</Link>
                           </p>

                           <h2>Edições 2022</h2>
                           <div className="container">
                              <div className="row">
                                 <Card title="Nr 117" image="images/ed117.jpg" description="Janeiro a Março de 2022"
                                    route="https://pt.calameo.com/read/006435344567665a09633?authid=e15gBQsiCu7E" />
                              </div>
                           </div>

                           <h2>Edições 2021</h2>
                           <div className="container">
                              <div className="row">
                                 <Card title="Nr 116" image="images/ed116.jpg" description="Outubro a Dezembro de 2021"
                                    route="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD" />

                                 <Card title="Nr 115" image="images/ed115.jpg" description="Julho a Setembro de 2021"
                                    route="https://pt.calameo.com/read/006435344f848ad6cf41a?authid=s9AUDEJk0ONc" />
                              </div>

                              <div className="row">
                                 <Card title="Nr 114" image="images/ed114.jpg" description="Abril a Junho de 2021"
                                    route="https://pt.calameo.com/read/006435344d3a13a215c69?authid=G7WRiQYJICNf" />

                                 <Card title="Nr 113" image="images/ed113.jpg" description="Dezembro de 2020"
                                    route="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw" />
                              </div>
                           </div>


                           <h2>Edições 2020</h2>
                           <div className="container">
                              <div className="row">
                                 <Card title="Nr 112" image="images/ed112.jpg" description="Novembro a Dezembro de 2020"
                                    route="https://pt.calameo.com/read/00643534419b2d0f41807?authid=4GXev9E6EqlB" />

                                 <Card title="Nr 111" image="images/ed111.jpg" description="Setembro a Outubro de 2020"
                                    route="https://pt.calameo.com/read/006435344e04bab2bf544?authid=lZcaNNaCa7AH" />
                              </div>


                              <div className="row">
                                 <Card title="Nr 110" image="images/ed110.jpg" description="Julho a Agosto de 2020"
                                    route="https://pt.calameo.com/read/0064353445b120d4cc41d?authid=y3M87gniA4Ak" />

                                 <Card title="Nr 109" image="images/ed109.jpg" description="Dezembro de 2019 a Junho de 2020"
                                    route="https://pt.calameo.com/read/006435344f44950abb34f?authid=y35kiMz3yHMJ" />
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

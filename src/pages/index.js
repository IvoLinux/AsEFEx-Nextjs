import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Header from '../modules/header'
import Menu from '../modules/menu'
import Footer from '../modules/footer'
import BarraGov from '@/components/BarraGov'
import Carousel from '@/modules/Carousel'

export default function Home() {
   return (
      <div>
         <Head>
            <meta charSet="utf-8" />
            <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página Inicial</title>
            
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
                     <div id="content" className="span9">
                        <section id="content-section">
                           <span className="hide">Início do conteúdo da página</span>
                           <div className="row-fluid module">
                              <div className="outstanding-header">
                                 <h2 className="outstanding-title">Principais Notícias</h2>
                              </div>
                              <div className="module module-box-01 module-box-01-top-adjust">
                                 <div className="gallery-pane">
                                    {/* inicio slideshow */}
                                       <Carousel />
                                    {/* fim galeria */}
                                 </div>
                              </div>
                           </div>
                           {/* fim .row-fluid */}
                           <div className="row-fluid">
                              <div className="span4 module variacao-module-01">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">Homenagem</h2>
                                 </div>
                                 <Link href="../homenagem" className="img-rounded"><img src="images/noticia1.jpg" alt="Homenagem" /></Link>
                                 <h2>
                                    <Link href="/homenagem"><strong>Cel Noaldo: um Guerreiro, um Exemplo</strong></Link>
                                 </h2>
                                 <p>A AsEFEx rende uma justa homenagem ao Cel Noaldo Alves da Silva</p>
                              </div>
                              <div className="span4 module variacao-module-02">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">EsEFEx</h2>
                                 </div>
                                 <Link href="http://www.esefex.eb.mil.br/complementacao-academica" className="img-rounded"><img src="images/noticia2.png" alt="EsEFEx" /></Link>
                                 <h2><Link href="http://www.esefex.eb.mil.br/complementacao-academica"><strong>Complementação Acadêmica</strong></Link></h2>
                                 <p>Confira as principais atividades que serão desenvolvidas.</p>
                              </div>
                              <div className="span4 module variacao-module-03">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">CCFEx</h2>
                                 </div>
                                 <Link href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618" className="img-rounded"><img src="images/noticia3.png" alt="CCFEx" /></Link>
                                 <h2><Link href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618"><strong>Aniversário de 402 anos da Fortaleza de São João</strong></Link></h2>
                                 <p>Saiba um pouco mais sobre esse pedaço da história nacional.</p>
                              </div>
                           </div>
                           {/* fim .row-fluid */}
                           <div className="row-fluid">
                              <div className="span6 module variacao-module-03">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">100 Anos EsEFEx</h2>
                                 </div>
                                 <Link href="http://www.esefex.eb.mil.br/centario-itemmenu"><img src="images/100EsEFEx.png" alt="100 anos EsEFEx" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
                                 <h2><Link href="http://www.esefex.eb.mil.br/centario-itemmenu"><strong>Centenário da EsEFEx</strong></Link></h2>
                                 <p>Confira o conteúdo comemorativo do centenário!</p>
                              </div>
                              <div className="span6 module variacao-module-01">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">Seja um Associado da AsEFEx</h2>
                                 </div>
                                 <Link href="/seja-associado"><img src="images/associar.png" alt="Associe-se" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
                                 <h2>
                                    <Link href="/seja-associado"><strong>Associe-se</strong></Link>
                                 </h2>
                                 <p>Preenchimento da ficha de inscrição.</p>
                              </div>
                           </div>
                           <div className="row-fluid">
                              <div className="span6 module">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">Mídias sociais AsEFEx</h2>
                                 </div>
                                 <Link href="/midias-sociais"><img src="images/midias-sociais.png" alt="Mídias Sociais" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
                                 <h2>
                                    <Link href="/midias-sociais"><strong>A AsEFEx nas Redes Sociais</strong></Link>
                                 </h2>
                                 <p>Siga nossas mídias sociais!</p>
                              </div>
                              <div className="span6 module variacao-module-02">
                                 <div className="outstanding-header">
                                    <h2 className="outstanding-title">Inauguração</h2>
                                 </div>
                                 <Link href="https://www.youtube.com/watch?v=-pSSHYJCgSc&ab_channel=CCFExCCFEx"><img src="images/youtubeccfex.png" alt="Canal CCFEx" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
                                 <h2><Link href="https://www.youtube.com/watch?v=-pSSHYJCgSc&ab_channel=CCFExCCFEx"><strong>Inauguração do Museu do Desporto do Exército</strong></Link></h2>
                                 <p>Se inscreva no canal!</p>
                              </div>
                           </div>
                           <div className="row-fluid module">
                              <div className="outstanding-header">
                                 <h2 className="outstanding-title">Acesse as páginas do CCFEx e suas Organizações Militares Diretamente Subordinadas</h2>
                              </div>
                              <div className="span3 logos">
                                 <Link href="http://www.ccfex.eb.mil.br/"><img src="images/ccfex.png" alt="CCFEx" /></Link>
                                 <Link href="http://www.ccfex.eb.mil.br/"><h3>CCFEx</h3></Link>
                              </div>
                              <div className="span2 logos">
                                 <Link href="http://www.esefex.eb.mil.br/"><img src="images/esefex.png" alt="EsEFEx" /></Link>
                                 <Link href="http://www.esefex.eb.mil.br/"><h3>EsEFEx</h3></Link>
                              </div>
                              <div className="span3 logos">
                                 <Link href="http://www.ipcfex.eb.mil.br/"><img src="images/ipcfex.png" alt="IPCFEx" /></Link>
                                 <Link href="http://www.ipcfex.eb.mil.br/"><h3>IPCFEx</h3></Link>
                              </div>
                              <div className="span2 logos">
                                 <Link href="http://www.cde.eb.mil.br/"><img src="images/cde.png" alt="CDE" /></Link>
                                 <Link href="http://www.cde.eb.mil.br/"><h3>CDE</h3></Link>
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

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
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página Institucional</title>
        
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
              <div>
                <div id="content" className="internas span9">
                  <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading">
                      O QUE É AsEFEx?
                    </h1>
                    <div className="description">
                      ASSOCIAÇÃO DOS EX-ALUNOS E DOS AMIGOS DA ESCOLA DE EDUCAÇÃO FÍSICA DO EXÉRCITO – AsEFEx
                    </div>
                    <p>
                      Fundada em 15 de março de 1990, a AsEFEx é uma associação civil de fins não econômicos, de natureza cultural, educacional e filantrópica, regida por Estatuto e pela legislação pertinente, em vigor, tendo por objeto social o estudo, a pesquisa, a difusão, o apoio e o incentivo à Educação Física, ao Desporto, ao Lazer e ao Patrimônio Histórico, Artístico e Cultural.
                    </p>
                    <p>
                      Sua sede fica na Fortaleza de São João, no bairro das Urca, no Rio de Janeiro, em dependências sob cessão do Centro de Capacitação Física do Exército Brasileiro.
                    </p>
                    <h2>Objetivos </h2>
                    <dl>
                      <dd> I - solidificar e manter laços de sã camaradagem entre seus integrantes; </dd>
                      <dd> II - Manter, permanentemente, ligações com o CENTRO DE CAPACITAÇÃO FÍSICA DO EXÉRCITO (CCFEx) e com suas Organizações Militares Subordinadas, apoiando as iniciativas e atividades que os seus Comandantes julgarem convenientes;  </dd>
                      <dd> III - incentivar o gosto pela prática da atividade física, que tenha como metas a saúde e o bem-estar do ser humano; </dd>
                      <dd> IV - estimular a pesquisa científica e o intercâmbio de informações; </dd>
                      <dd> V - organizar eventos, competições, clínicas, seminários, estágios e conferências;&nbsp;</dd>
                      <dd> VI - elaborar, desenvolver e gerenciar projetos nos campos da Educação Física, dos Desportos, da Medicina Desportiva, do Lazer e do Patrimônio Histórico, Artístico e Cultural. </dd>
                      <dd> VII - Promover atividades esportivas, recreativas e sociais.</dd>
                    </dl>
                    <h2>Visão de Futuro </h2>
                    <p>Ser a melhor Associação de Ex-Alunos do Brasil, prestando apoio com excelência de gestão e atingindo o reconhecimento da sociedade.
                    </p>
                    <h2>Valores </h2>
                    <ul>
                      <li> Busca pela excelência </li>
                      <li> Ética profissional </li>
                      <li> Valorização das pessoas </li>
                      <li> Inovação e aperfeiçoamento contínuo </li>
                      <li> Transparência </li>
                    </ul>
                  </section></div>
                {/* fim .row-fluid */}
                <span className="hide">Fim do conteúdo da página</span>
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

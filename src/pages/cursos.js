import Head from 'next/head'
import Link from 'next/link'

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
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Downloads - AsEFEx</title>
      </Head>

      <section id="content-section">
        <span className="hide">Início do conteúdo da página</span>
        <h1 className="documentFirstHeading">DOWNLOADS</h1>
        <ul className="lista">
          <li><Link href="documentos/regimento-interno.pdf">Estatuto</Link></li>
        </ul>
        <span className="hide">Fim do conteúdo da página</span>
      </section>

    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Links</title>
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">LINKS ÚTEIS</h1>
          <ul className="lista">
            <li>
              <Link title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</Link>
            </li>
            <li>
              <Link title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</Link>
            </li>
            <li>
              <Link title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</Link>
            </li>
            <li>
              <Link title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</Link>
            </li>
            <li>
              <Link title="CDE" href="http://www.cde.eb.mil.br/">CDE</Link>
            </li>
          </ul>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </div>
  )
}

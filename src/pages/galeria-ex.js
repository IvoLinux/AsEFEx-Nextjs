import Head from 'next/head'
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

      <div id="content" className="internas span9">
        <section id="content-section">
          <Filtro />
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </>
  )
}
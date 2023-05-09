import Head from 'next/head'
import Filtro from '@/modules/filtro_galeria'

export default function GaleriaExAlunos() {
  return (
    <>
      <Head>
        <title>Ex-Alunos da EsEFEx</title>
      </Head>

      <section id="content-section">
        <Filtro />
        <span className="hide">Fim do conteúdo da página</span>
      </section>

    </>
  )
}
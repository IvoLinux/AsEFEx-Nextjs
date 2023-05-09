import Head from 'next/head'
import Filtro from '@/modules/filtro_galeria'

export default function GaleriaExAlunos() {
  return (
    <>
      <Head>
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página da Galeria dos Ex Alunos da EsEFEx</title>
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
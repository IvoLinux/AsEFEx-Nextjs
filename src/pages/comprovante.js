import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Envio de Comprovante de Pagamento</title>

        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">COMPROVANTE DE PAGAMENTO</h1>
          <p>Os dados bancários para a transferência de valores visando à quitação da anuidade são os seguintes:</p>
          <p><strong>ASEFEX - Banco do Brasil - Agência: 287-9 - C/C: 212438-6 - CNPJ: 39.126.347/0001-10</strong></p>
          <p>PIX (CNPJ): 39.126.347/0001-10</p>
          <p>O comprovante da transferência deve ser encaminhado pelo link:</p>
          <p><Link style={{ color: '#0088CC' }} href="https://forms.gle/rrRxbJXLfSrk1DuG8">https://forms.gle/rrRxbJXLfSrk1DuG8</Link></p>
          <p>Permanecemos à disposição para contatos por e-mail – <Link href="asefex1990@gmail.com">asefex1990@gmail.com</Link>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </div>
  )
}

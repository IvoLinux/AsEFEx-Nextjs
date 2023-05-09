import Head from 'next/head'
import Link from 'next/link'

function Cadastro() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página de Atualização de Cadastro</title>

        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />
      </Head>

      <div id="content" className="internas span9">
        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h1 className="documentFirstHeading">ATUALIZE SEU CADASTRO</h1>
          <p>Mantenha seus dados atualizados preenchendo a ficha de Inscrição de Sócio da AsEFEx no formulário:</p>
          <Link style={{ color: '#0088CC' }} href="https://forms.gle/KsQsW8hpMG9HQ1HV8">https://forms.gle/KsQsW8hpMG9HQ1HV8</Link>
          <p>Basta preencher e submeter no próprio site.</p>
          <p>Permanecemos à disposição para contatos por e-mail – <Link style={{ color: '#0088CC' }} href="asefex1990@gmail.com">asefex1990@gmail.com</Link>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </div>

    </div>

  )
}

export default Cadastro
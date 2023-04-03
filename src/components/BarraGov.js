import Head from 'next/head';
import Link from 'next/link';

const BarraGov = () => {
    return (
        <div>
            <Head>
                <script src="http://barra.brasil.gov.br/barra.js?cor=verde" type="text/javascript" />
                <noscript>&nbsp;
                </noscript>
            </Head>
            <div id="barra-brasil">
                <Link href="http://brasil.gov.br" title="Acesse para conhecer todos os serviços e informações do Governo Brasileiro na Internet.">
                    Portal do Governo Brasileiro
                </Link>
            </div>
        </div>
    );
};
export default BarraGov;
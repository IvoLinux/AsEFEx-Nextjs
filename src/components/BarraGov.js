import Link from 'next/link';
import Script from 'next/script';

const BarraGov = () => {
    return (
        <>
            <div id="barra-brasil">
                <Link href="http://brasil.gov.br" title="Acesse para conhecer todos os serviços e informações do Governo Brasileiro na Internet.">
                    Portal do Governo Brasileiro
                </Link>
            </div>

            <Script src="http://barra.brasil.gov.br/barra.js?cor=verde" type="text/javascript" />
        </>
    );
};

export default BarraGov;
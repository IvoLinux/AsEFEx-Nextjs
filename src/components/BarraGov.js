import Link from 'next/link';

const BarraGov = () => {
    return (
        <>
            <div id="barra-brasil">
                <Link href="http://brasil.gov.br" title="Acesse para conhecer todos os serviços e informações do Governo Brasileiro na Internet.">
                    Portal do Governo Brasileiro
                </Link>
            </div>
        </>
    );
};

export default BarraGov;
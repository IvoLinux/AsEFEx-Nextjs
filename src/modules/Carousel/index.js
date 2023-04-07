import Link from "next/link"
import styles from './index.module.css'

export default function Carousel() {

// Pra usar css exclusivo nesse component, de o className no arquivo index.module.css como se fosse css normal (deixei um exemplo rolha)
// Ao inves de ser <div className="nome", vira <div className={styles.nome}
// Essa area antes do return vai todas as funcoes puramente js
// Se quiser exemplo de js pode abrir a pagina do filtro_galeria q la tem um pouco
// Lembre, existem muitos tutoriais de carousels na internet, da ate pra meter no chat gpt que sepa ele safa

    return <div className="carousel slide" id="gallery-carousel">
        {/* Exemplo rolha, pode deletar esse div */}
        <div className={styles.exemplo}>Exemplo rolha</div>
        
        <div className="carousel-inner">
            <div className="item">
                <Link href="http://www.ipcfex.eb.mil.br/ultimas-noticias/313-19-simposio-internacional-de-atividade-fisica-3"><img alt="SIAFIS" src="images/carrossel1.png" /></Link>
                <div className="galleria-info">
                    <div className="galleria-info-text">
                        <div className="galleria-info-title">
                            <h3><Link href="http://www.ipcfex.eb.mil.br/ultimas-noticias/313-19-simposio-internacional-de-atividade-fisica-3">SIAFIS</Link></h3>
                        </div>
                        <div className="galleria-info-description">Confira o conteúdo do XIX Simpósio Internacional de Atividade Física.</div>
                        {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                 </div> */}
                    </div>
                </div>
            </div>
            <div className="item active">
                <Link href="http://www.esefex.eb.mil.br/ultimas-noticias/280-vii-forum-cientifico"><img alt="VIII Fórum Científico" src="images/carrossel2.png" /></Link>
                <div className="galleria-info">
                    <div className="galleria-info-text">
                        <div className="galleria-info-title">
                            <h3><Link href="http://www.esefex.eb.mil.br/ultimas-noticias/280-vii-forum-cientifico">VIII FÓRUM CIENTÍFICO</Link></h3>
                        </div>
                        <div className="galleria-info-description">Confira as datas e o tema do evento.</div>
                        {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                 </div> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <Link href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj"><img alt="Informativo AsEFEx" src="images/carrossel3.png" /></Link>
                <div className="galleria-info">
                    <div className="galleria-info-text">
                        <div className="galleria-info-title">
                            <h3><Link href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj">Informativo AsEFEx</Link></h3>
                        </div>
                        <div className="galleria-info-description">Acesse a última edição do nosso Informativo.</div>
                        {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                 Nome do autor da imagem</div> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <Link href="https://pt.calameo.com/read/006435344d3a13a215c69?authid=G7WRiQYJICNf"><img alt="Revista AsEFEx" src="images/carrossel4.png" /></Link>
                <div className="galleria-info">
                    <div className="galleria-info-text">
                        <div className="galleria-info-title">
                            <h3><Link href="https://pt.calameo.com/read/006435344d3a13a215c69?authid=G7WRiQYJICNf">Revista AsEFEx</Link></h3>
                        </div>
                        <div className="galleria-info-description">Leia a última edição de nossa Revista.</div>
                        {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                 Nome do autor da imagem</div> */}
                    </div>
                </div>
            </div>
        </div>
        <Link data-slide="prev" href="#gallery-carousel" className="left carousel-control"><i className="icon-angle-left" /><span className="hide">Mover foto esquerda</span></Link>
        {/* separador para fins de acessibilidade */}<span className="hide">&nbsp;</span>
        {/* fim separador para fins de acessibilidade */}
        <Link data-slide="next" href="#gallery-carousel" className="right carousel-control"><i className="icon-angle-right" /><span className="hide">Mover foto esquerda</span></Link>
    </div>
}
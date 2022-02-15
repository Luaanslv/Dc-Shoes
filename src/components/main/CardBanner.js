import Card7 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/cardjosh.jpg';
import Card8 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/cardacessorios.jpg';
import './CardBanner.css'
function CardBanner() {
    return (
        <div className="card-banner-area">
            <div className="card-banner">
                <img src={Card7} alt="card7" />
                <div className="card--desc">
                    <h3>A LENDA JOSH KALIS!</h3>
                    <p>CONHEÇA TODOS OS PRO MODELS</p>
                    <h3><button> SHOP NOW <i className="fa fa-arrow-right after"></i></button></h3>
                </div>
            </div>
                <div className="card-banner">
                    <img src={Card8} alt="card8" />
                    <div className="card--desc">
                        <h3>ACESSÓRIOS</h3>
                        <p>BONÉS, MOCHILAS, GORROS, POCHETES</p>
                        <h3><button> SHOP NOW <i className="fa fa-arrow-right after"></i></button></h3>
                    </div>
            </div>
        </div>
    )

}

export default CardBanner;
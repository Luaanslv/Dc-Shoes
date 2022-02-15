import Card1 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card1.jpg';
import Card2 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card2.jpg';
import Card3 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card3.jpg';

function Cards2() {
    return (
        <div className="card-area">
            <div className='card'>
                <img src={Card1} alt="card1" />
                <div className="card--desc">
                    <h3>T-SHIRT</h3>
                    <p>PRECISANDO DE UMA CAMISETA NOVA?</p>
                    <h3><button>SHOP NOW <i className="fa fa-arrow-right"></i></button></h3>
                    
                </div>
            </div>
            <div className="card">
                <img src={Card2} alt="card1" />
                <div className="card--desc">
                    <h3>CALÇAS</h3>
                    <p>CONFIRA TODOS OS MODELOS</p>
                    <h3><button>SHOP NOW <i className="fa fa-arrow-right"></i></button></h3>
                </div>
            </div>
            <div className="card">
                <img src={Card3} alt="card1" />
                <div className="card--desc">
                    <h3>JAQUETAS</h3>
                    <p>QUAL COMBINA COM VOCÊ?</p>
                    <h3><button> SHOP NOW <i className="fa fa-arrow-right after"></i></button></h3>
                </div>
            </div>
        </div>
    )
}

export default Cards2;
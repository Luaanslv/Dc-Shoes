import Card4 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card4.jpg';
import Card5 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card5.jpg';
import Card6 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card6.jpg';

function Cards2() {
    return (
        <div className="card-area">
        <div className='card'>
            <img src={Card4} alt="card4" />
            <div className="card--desc">
                <h3>TÊNIS MASCULINO</h3>
                <p>CLIQUE E CONHEÇA A COLEÇÃO</p>
                <h3><button>SHOP NOW <i className="fa fa-arrow-right"></i></button></h3>
                
            </div>
        </div>
        <div className="card">
            <img src={Card5} alt="card5" />
            <div className="card--desc">
                <h3>TÊNIS KIDS</h3>
                <p>SE LIGA NA COLEÇÃO JUVENIL</p>
                <h3><button>SHOP NOW <i className="fa fa-arrow-right"></i></button></h3>
            </div>
        </div>
        <div className="card">
            <img src={Card6} alt="card6" />
            <div className="card--desc">
                <h3>TÊNIS FEMININO</h3>
                <p>SNEAKER OU SKATE SÓ ESCOLHER</p>
                <h3><button> SHOP NOW <i className="fa fa-arrow-right after"></i></button></h3>
            </div>
        </div>
    </div>
    )
}

export default Cards2;
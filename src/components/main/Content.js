import Banner from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/Banner.jpg';
import Banner2 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/banner2.jpg';
import Card1 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card1.jpg';
import Card2 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card2.jpg';
import Card3 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card3.jpg';
import Card4 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card4.jpg';
import Card5 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card5.jpg';
import Card6 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card6.jpg';
import Card7 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/cardjosh.jpg';
import Card8 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/cardacessorios.jpg';
import './Content.css'

function Content() {
return(
    <div className="content-area">
        <div className="Content--banner">
            <img src={Banner} alt="banner" />
        </div>
        <div className="card-area">
            <div className='card'>
                <img src={Card1} alt="card1" />
                <div className="card--desc">
                    <h3>T-SHIRT</h3>
                    <p>PRECISANDO DE UMA CAMISETA NOVA?</p>
                    <h3><button>SHOP NOW <i class="fa fa-arrow-right"></i></button></h3>
                    
                </div>
            </div>
            <div className="card">
                <img src={Card2} alt="card1" />
                <div className="card--desc">
                    <h3>CALÇAS</h3>
                    <p>CONFIRA TODOS OS MODELOS</p>
                    <h3><button>SHOP NOW <i class="fa fa-arrow-right"></i></button></h3>
                </div>
            </div>
            <div className="card">
                <img src={Card3} alt="card1" />
                <div className="card--desc">
                    <h3>JAQUETAS</h3>
                    <p>QUAL COMBINA COM VOCÊ?</p>
                    <h3><button> SHOP NOW <i class="fa fa-arrow-right after"></i></button></h3>
                </div>
            </div>
        </div>
        <div className="btn--help">
            <button><i class="fa fa-question"></i>  Ajuda</button>
        </div>
        <div className="banner2--area">
            <img src={Banner2} alt="banner" />
        </div>
        <div className="card-area">
            <div className='card'>
                <img src={Card4} alt="card4" />
                <div className="card--desc">
                    <h3>TÊNIS MASCULINO</h3>
                    <p>CLIQUE E CONHEÇA A COLEÇÃO</p>
                    <h3><button>SHOP NOW <i class="fa fa-arrow-right"></i></button></h3>
                    
                </div>
            </div>
            <div className="card">
                <img src={Card5} alt="card5" />
                <div className="card--desc">
                    <h3>TÊNIS KIDS</h3>
                    <p>SE LIGA NA COLEÇÃO JUVENIL</p>
                    <h3><button>SHOP NOW <i class="fa fa-arrow-right"></i></button></h3>
                </div>
            </div>
            <div className="card">
                <img src={Card6} alt="card6" />
                <div className="card--desc">
                    <h3>TÊNIS FEMININO</h3>
                    <p>SNEAKER OU SKATE SÓ ESCOLHER</p>
                    <h3><button> SHOP NOW <i class="fa fa-arrow-right after"></i></button></h3>
                </div>
            </div>
        </div>
        <div className="card-banner-area">
            <div className="card-banner">
                <img src={Card7} alt="card7" />
                <div className="card--desc">
                    <h3>A LENDA JOSH KALIS!</h3>
                    <p>CONHEÇA TODOS OS PRO MODELS</p>
                    <h3><button> SHOP NOW <i class="fa fa-arrow-right after"></i></button></h3>
                </div>
            </div>
                <div className="card-banner">
                    <img src={Card8} alt="card8" />
                    <div className="card--desc">
                        <h3>ACESSÓRIOS</h3>
                        <p>BONÉS,MOCHILAS,GORROS,POCHETES</p>
                        <h3><button> SHOP NOW <i class="fa fa-arrow-right after"></i></button></h3>
                    </div>
                </div>

        </div>
    </div>
)
}

export default Content;
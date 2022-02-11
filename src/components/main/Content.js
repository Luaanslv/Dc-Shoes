import Banner from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/Banner.jpg';
import Card1 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card1.jpg';
import Card2 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card2.jpg';
import Card3 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/card3.jpg';
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
            </div>
            <div className="card">
            <img src={Card2} alt="card1" />
            </div>
            <div className="card">
            <img src={Card3} alt="card1" />
            </div>
        </div>
    </div>
)
}

export default Content;
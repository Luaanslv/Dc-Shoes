import Banner from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/Banner.jpg';
import './Content.css'

function Content() {
return(
    <div className="content-area">
        <div className="Content--banner">
            <img src={Banner} alt="banner" />
        </div>
        <div className="btn--help">
            <button><i className="fa fa-question"></i>  Ajuda</button>
        </div>
    </div>
)
}

export default Content;
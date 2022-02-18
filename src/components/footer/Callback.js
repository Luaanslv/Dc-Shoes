import banner3 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/banner3.png';
import './Callback.css'

function Callback() {
    return (
        <div className="callback">
            <div className="callback--area">
                <img src={banner3} alt="callback" />
                <div className='cadastro--area'>
                    <div className="call--desc">
                        <h1>NOVIDADES E PROMOÇÕES!</h1>
                        <p>Cadastre-se agora e receba todas as novidades e promoções exclusivas da DCSHOES!</p>
                    </div>
                    <input type="text" placeholder='Digite seu e-mail'/>
                    <button>CADASTRAR</button>
                </div>
                </div>
            </div>
    )

}

export default Callback;
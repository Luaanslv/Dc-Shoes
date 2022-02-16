import './Banner3.css'

function Banner3() {
    return (
        <div className="callback--area">
            <h1>NOVIDADES E PROMOÇÕES!</h1>
            <p>Cadastre-se agora e receba todas as novidades e promoções exclusivas da DCSHOES!</p>
            <div className='cadastro--area'>
                <input type="text" placeholder='Digite seu e-mail'/> 
                <button>CADASTRAR</button>
            </div>
        </div>
    )
}

export default Banner3;
import logo2 from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/logo2.png'
import './InfoAd.css'

function InfoAd() {
    return (
        <div className="infoad--area">
                <div className="local">
                    <p><strong>ENCONTRE A LOJA MAIS PROXIMA</strong></p>
                    <input type="text" placeholder='Cidade ou CEP' />
                    <button><i className='fas fa-map-marker-alt'></i></button>
                </div>
                <div className="sociais">
                    <p><strong>NOS SIGA NAS REDES SOCIAIS:</strong></p>
                    <ul>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className='fab fa-twitter'></i></li>
                        <li><i className='fab fa-instagram'></i></li>
                        <li><i className='fab fa-youtube'></i></li>
                        <li><i className='fab fa-pinterest-p'></i></li>
                    </ul>
                </div>
                <div className="atendimento">
                    <p><strong>ATENDIMENTO AO CONSUMIDOR</strong></p>
                    <ul>
                        <li>Status do pedido</li>
                        <li>Tabela de Medidas</li>
                        <li>Entregas</li>
                        <li>Trocas e Devoluções</li>
                        <li>Como Comprar</li>
                        <li>Perguntas Frequentes</li>
                        <li>Pagamentos e Segurança</li>
                        <li>Termos e Condições</li>
                        <li>Política de Privacidade</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>
                <div className="Boardriders">
                    <p><strong>BOARDRIDERS INC.</strong></p>
                    <ul>
                        <li>Carreiras</li>
                        <li>DC Shoes</li>
                        <li>Institucional</li>
                    </ul>
                </div>
            <div className="linguagem-logo">
                <i className="fa fa-globe"></i>
                <p>Escolha sua região</p>
                <img src={logo2} alt="logo2" className="img-logo2"/>
            </div>
        </div>
    )
}

export default InfoAd;
import './Carousel.css'
import {useRef} from 'react'

function Carousel() {

    const carousel1 = useRef(null);
    const carousel2 = useRef(null);

    const handleLeftClick = (e) => {
        
    }
    const handleRightClick = (e) => {
       
    }

    return (
        <div>
            <div className="carousel" >
                <div className="carousel--item"ref={carousel1}>
                    <span><strong>Não quer esperar?</strong> <button>compre pelo whatsapp</button></span>
                </div>
                <div className="carousel--item2" ref={carousel2}>
                    <span><strong>SALE INICIADA! ATÉ 40% OF </strong><button>compre agora!</button></span>
                </div>
            </div>
            <div className="buttons">
                <button className='left' onClick={handleLeftClick}><i class="fa fa-angle-left"></i></button>
                <button className='right' onClick={handleRightClick}><i className="fa fa-angle-right"></i></button>
            </div>
        </div>
        
    )
}

export default Carousel;
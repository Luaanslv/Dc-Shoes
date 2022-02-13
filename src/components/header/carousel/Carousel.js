import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import './Carousel.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            infinite: true,
            autoplay: 200,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="carousel--area">
                <div className="carousel">
                    <Slider ref={c =>(this.slider = c)} {...settings}>
                        <div className="carousel--item" >
                            <span key={1}>Não quer esperar ? compre pelo whatsapp</span>
                        </div>
                        <div className="carousel--item" >
                            <span key={2}>SALE INICIADA! ATÉ 40% OF compre agora!</span>
                        </div>
                       
                    </Slider>


                </div>
                <div className="carousel--button">
                    <i className="fa fa-angle-left  left" onClick={this.previous} ></i>
                    <i className="fa fa-angle-right right" onClick={this.next} ></i>
                </div>
            </div>
        );
    }
}
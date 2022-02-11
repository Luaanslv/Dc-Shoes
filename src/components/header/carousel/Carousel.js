import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import './Carousel.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="carousel">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Slider>
                <button>right</button>
                <button>left</button>
            </div>
        );
    }
}
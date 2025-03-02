import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import accesorios from '../assets/imgs/accesorios.jpg';
import juegosDeMesa from '../assets/imgs/juegos-mesa.jpg';
import cartasYSets from '../assets/imgs/cartas-sets.jpg';
import '../assets/styles/CategoryCarousel.css';

const CategoryCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/categories/accesorios"> 
          <img
            className="d-block w-100"
            src={accesorios}
            alt="Accesorios"
            aria-label="Accesorios"
          />
          <Carousel.Caption>
            <div className="carouselCaption">
              <h3>Accesorios</h3>
              <p>Fundas protectoras, playmats, cajas de almacenamiento y contadores de vida, entre otros.</p>
            </div>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/categories/cartas-y-sets">
          <img
            className="d-block w-100"
            src={cartasYSets}
            alt="Cartas y Sets de cartas"
            aria-label="Cartas y Sets de cartas"
          />
          <Carousel.Caption>
            <div className="carouselCaption">
              <h3>Cartas sueltas y Set de cartas</h3>
              <p>Yu-Gi-Oh!, Pokemon TCG, Magic The Gathering, One Piece.</p>
            </div>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/categories/juegos-de-mesa">
          <img
            className="d-block w-100"
            src={juegosDeMesa}
            alt="Juegos De Mesa"
            aria-label="Juegos De Mesa"
          />
          <Carousel.Caption>
            <div className="carouselCaption">
              <h3>Juegos de Mesa</h3>
              <p>Desde el más simple Catán hasta juegos exclusivos.</p>
            </div>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default CategoryCarousel;
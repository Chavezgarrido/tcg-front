import React from 'react';
import NewProducts from './NewProducts';
import FeaturedCategory from './FeaturedCategory';
import FeaturedSeller from './FeaturedSeller';
import FeaturedProduct from './FeaturedProduct';
import RegisteredUsers from './RegisteredUsers';
import CategoryCarousel from './CategoryCarousel';
import '../assets/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="container mt-4">
      <CategoryCarousel />
      <NewProducts />
      <FeaturedCategory />
      <div className="d-flex justify-content-between">
        <FeaturedSeller />
        <FeaturedProduct />
      </div>
      <RegisteredUsers />
    </div>
  );
};

export default HeroSection;
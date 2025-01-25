import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16012025-MainBanners-Z1-P2-Yousta-under399.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-16012025-MainBanners-Z1-P-dnmx-netplay-flat70.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16012025-MainBanners-Z1-P5-Dennislingo-TheIndianGarageCo-min60.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16012025-MainBanners-Z1-P6-BudaJeans-FyreRose-SAM-flat80.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16012025-MainBanners-Z1-P7-NEWBALANCE-SKECHERS-min30.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-16012025-mainbanners-z1-p-asos-upto50.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-16012025-mainbanners-z1-p-H&M-upto60.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

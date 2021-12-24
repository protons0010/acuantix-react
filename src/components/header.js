import React from 'react'

function header() {
    return (
    <>

     <div class="carousel-inner">
        <div class="carousel-item active">

            <img class="d-block w-100 home-bg" alt="home-bg" src="/assets/images/home-bg.png" />

            <div class="carousel-caption d-md-block">
            
                <h5>Flexible Web Design.</h5>
                <p>Make a design by the method.Grow your business through the mechanism</p>

            </div>


        </div>
        <div class="carousel-item">
            <img class="d-block w-100 home-bg" alt="home-bg" src="/assets/images/home-bg.png" />

            <div class="carousel-caption d-md-block">
    
                 <h5>Responsive Web Design.</h5>
                <p>Create a dreams like worthless</p>

            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100 home-bg" alt="home-bg" src="/assets/images/home-bg.png" />

            <div class="carousel-caption d-md-block">
         
                <h5>Compatible Web Design.</h5>
                <p>Make a E-commerce Website For your business.</p>

            </div>
        </div>
        <div class="scroll-button">
           
            <a href="#about-us" class="page-scroll">
                <img src="/assets/images/arrows-down.png" alt="arrow down" />
            </a>

        </div>
    </div>
 <div class="col-lg-4">

                            <svg class="back-bg" viewBox="0 0 535 618">
                                <defs>
                                    <linearGradient id="PSgrad_0" x1="0%" x2="100%" y1="0%" y2="0%">
                                        <stop offset="0%" stop-color="rgb(88,192,255)" stop-opacity="1" />
                                        <stop offset="100%" stop-color="rgb(18,112,228)" stop-opacity="1" />
                                    </linearGradient>

                                </defs>
                            </svg>

                            <div class="owl-carousel owl-carousel1 owl-theme">
                                <div>
                                    <img src="/assets/images/slider1.png" alt="" class="img-fluid" />
                                </div>
                                <div>
                                    <img src="/assets/images/slider2.png" alt="" class="img-fluid" />
                                </div>
                                <div>
                                    <img src="/assets/images/slider3.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>

    <ul class="carousel-indicators">
        <li class="active" data-target="#fh5co-hero-carousel" data-slide-to="0" aria-current="location"></li>
        <li data-target="#fh5co-hero-carousel" data-slide-to="1"></li>
        <li data-target="#fh5co-hero-carousel" data-slide-to="2"></li>
    </ul>
    </>
    );
}

export default header;

import React from 'react'

function about() {
    return (
            <div class="container-fluid fh5co-about-us" id="about-us">
                <div class="container">
                    <div class="row">
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


                        <div class="col-lg-8">
                            <div class="about-us-content">
                                <h2>ABOUT US</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                                    ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                    dolore magnam aliquam quaerat voluptatem.</p>
                                <a href="#" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default about;

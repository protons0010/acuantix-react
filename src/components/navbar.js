import React from 'react'

function navbar() {
    return (
<nav class="navbar fixed-top navbar-expand-xl">
        <div class="container">
            <a class="navbar-brand mobile-logo" href="#"> <img src="/assets/images/logo.png" alt="Vista Pro" /></a>
            <button class="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse">
                <span class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span> </button>

            <div id="my-nav" class="collapse navbar-collapse">

                <div>
                    <p class="text-left follow">Follow Us:</p>
                    <ul class="navbar-nav float-left social-links">
                        <li class="nav-item"><a class="nav-link" href="https://www.quora.com/profile/Rahat-Hasan-Ahmed"><i class="fab fa-quora"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://www.behance.net/designerrockstar"><i class="fab fa-behance"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://medium.com/@rahat_hasan.7"><i class="fab fa-medium"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.facebook.com/rahathasan.ahmed.7"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://dribbble.com/rahatahmed"><i class="fab fa-dribbble"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://twitter.com/rahat_hasan7"><i class="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>

                <ul class="navbar-nav mx-auto logo-desktop">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><img src="/assets/images/logo.png" alt="Vista Pro" /></a>
                    </li>
                </ul>

                <ul class="navbar-nav float-right menu-links">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Gains</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">Tutorial</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    );
}

export default navbar;

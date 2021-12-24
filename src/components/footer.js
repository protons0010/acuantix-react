import React from 'react'

function footer() {
    return (
            <footer class="container-fluid fh5co-footer">
                <div class="container" id="contact">
                    <div class="row">
                        <div class="col-lg-5">
                            <h2>CONTACT US DIRECTLY </h2>
                            <p class="light">
                                If you are looking for a Developer, so I am here .
                            </p>
                            <p>
                                <span class="email"><img src="/assets/images/email.png"
                                        alt="email icon" /></span><b>rahatahmed6408@gmail.com</b>
                            </p>
                            <p>
                                <span class="phone"><img src="/assets/images/phone.png" alt="phone icon" /></span><b>+8801646296408</b>
                            </p>
                            <h3>Learn more about me:</h3>
                            <ul class="navbar-nav float-left social-links footer-social">
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

                        <div class="col-lg-7">
                            <div class="form-box">
                                <h4>What would you like to talk about</h4>
                                <p>We'd Love to Hear From you !</p>
                                <hr />
                                <table class="table table-light table-borderless">
                                    <tr>
                                        <td><input type="text" class="form-control" placeholder="Name..." />
                                        </td>

                                        <td><input type="text" class="form-control" placeholder="Email address" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="2"><textarea class="form-control" placeholder="You Message"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <button type="submit">
                                                SUBMIT NOW
                                            </button>

                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
    );
}

export default footer;

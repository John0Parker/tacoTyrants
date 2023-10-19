import React from 'react';

const ContactUs = (props) => {


    return(
        <>
            <div class="container">
                <div class="d-flex justify-content-around">
                    <div class="card px-3 my-3">
                        <h4>Questions? Comments? Concerns? We love 'em</h4>
                        <p class="d-flex justify-content-center mt-1"><strong>email:</strong> tacosaurus@tacotyrants.com</p>
                        <p class="d-flex justify-content-center"><strong>phone:</strong> (555)219-1213</p>
                    </div>
                    <div class="card px-3 my-3">
                        <h4>Interested in Becoming a Tyrant?</h4>
                        <span class="d-flex justify-content-center">
                            <p>Find us on <a href="https://linkedin.com/">
                                <img height={25} width={45} src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png" alt="LinkedIn logo" /></a>
                            </p>
                        </span>
                        <span class= "d-flex justify-content-center">
                            <h5>We're Social </h5>
                            <img class="ml-2"height={25} width={90} src="https://www.pinclipart.com/picdir/big/323-3234191_png-for-free-download-on-mbtskoudsalg-black-and.png" alt="Icons for Facebook, Twitter, and Instagram," />
                        </span>

                    </div>
                </div>
            </div>
            <footer class="py-5 my-5">
                <hr />
                <p class="text-center text-muted">© 2023 TacoTown LLC. </p>
            </footer>
        </>
    )
}

export default ContactUs;
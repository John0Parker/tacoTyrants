
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs =()=>{
    return(
        <div className='container'>
            <h2 className='mt-5'>About Us</h2>
            <div>
                <div>
                    <div className='card my-3'>
                        <h5 className='card-header'>Our Mission: </h5>
                        <div className='card-body'>
                            <p>
                                At Taco Tyrants, our mission is to conquer taste buds and wage a delicious war on blandness.
                                We aim to assert our supremacy in the world of tacos, one mouthwatering bite at a time.
                                Our relentless commitment to crafting tantalizing tortillas and luscious fillings will make you bow down to the almighty taco.
                                We're not just a restaurant; we're a tasty revolution. Join us in the quest for taco domination and savor the flavor of our 
                                tyrannically tasty creations. Taco Tyrants: where tacos reign supreme, and taste is our weapon of choice!
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h5 className='card-header'>A Word from out founder: Tito Alvarez </h5>
                        <div className=' card-body  d-flex justify-content-around '>
                            <div className='col-7'>
                                <p>
                                    Ladies and gentlemen, amigos and amigas, welcome to Taco Tyrants, where the quest for taco domination and the pursuit of
                                    culinary chuckles reign supreme! People often ask me, "Why, oh why, did you create Taco Tyrants, señor?" 
                                    Well, let me share my whimsical tale of inspiration.
                                </p>
                                <p>
                                    One evening, as I pondered the mysteries of the universe while munching on a particularly lackluster taco, 
                                    a revelation struck me like a piñata at a fiesta! I realized that tacos deserved a realm of their own, 
                                    a kingdom where they could reign supreme, free from the tyranny of dull flavors.
                                </p>
                                <p>
                                    The vision for Taco Tyrants was forged in the fiery pits of salsa, the crispy crunch of taco shells, and the zestiness of jalapeños.
                                    Inspired by the bravado of luchadores and the wisdom of ancient taco texts, I set out to create a sanctuary for all taco enthusiasts.
                                </p>
                                <p>
                                Every taco at Taco Tyrants is infused with the spirit of fiesta and the essence of laughter. We believe in serving not just tacos but 
                                edible tales, where each bite tells a whimsical story of taco triumph. So, dear amigos, join us on this taco crusade, where flavor rebels against
                                the mundane, and where every taco bite is a step closer to a world ruled by the delicious tyranny of tacos!
                                </p>
                                <p>
                                    Ole!
                                </p>
                                <Link to='/orders/create' className='btn btn-outline-success'>Order Now</Link>
                                <Link to='/menu' className='btn btn-outline-warning ml-2'>See Menu</Link>
                            </div>
                            <img  className="col-4" src="https://c8.alamy.com/comp/2J70WK5/a-chef-spoons-sauce-over-beef-tacos-on-the-grill-2J70WK5.jpg" alt="founders photo" />
                        </div>
                    </div>    
                </div>
                </div> {/* end card div for founder */}
                    <div className='card  mt-3 mb-5'>
                        <h4 className='card-header'>Check Out and support our favorite charity's </h4>
                    <div className='card-body row'>
                        <img className='col-4' src="https://cdn-icons-png.flaticon.com/512/240/240437.png" alt="charity img" />
                        <div className='row col-8 '>
                            <p><h6>T.H.U.D (Tacos Heightened for Unmatched Deliciousness):</h6>
                                Strives to create a taco that, when dropped, 
                                always lands filling-side up, preventing the dreaded taco disaster.
                                <hr className='mb-0'/>
                            </p>
                            <p><h6>Taco-Tron: Embracing AI in Taco Crafting:</h6> 
                                Strives to develop a robot capable of assembling the most extraordinary
                                and perfectly crafted tacos, free from human error.
                                <hr className='mb-0'/>
                            </p>
                            <p><h6>P.E.T.A (People for the Ethical Treatment of Avocados):</h6> 
                                Advocates for the avocado's right to be placed in tacos, 
                                ensuring they're always ripe and ready for the taco spotlight.
                                <hr className='mb-0'/>
                            </p>
                            <p><h6>S.O.S. (Save Our Salsa):</h6> 
                                Dedicated to rescuing salsa from the clutches of subpar chip-dipping,
                                promoting proper salsa handling and encouraging salsa therapy sessions.
                            </p>
                        </div>
                    </div>
                </div> {/* end card div for charities */}
        </div>
    )//end return
}//end aboutUs
export default AboutUs;

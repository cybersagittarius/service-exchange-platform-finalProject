import React, { useState } from 'react';
import '../styles/scss/Card.scss'



function Card() {
    const [name, setName] = useState("User Name");
    const [about, setAbout] = useState("About me");
    const [looking, setLooking] = useState("I'm looking for");
    const [offer, setOffer] = useState("I can offer");


    return (
        <div className="Card">
            <div className="upper-container">

                <div className="user-name"> <h3>{name}</h3>
                </div>


                <div className="image-container">
                    <img src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" alt="" height="100px" width="100px" />

                </div>
            </div>
            <div className="lower-container">
                <div className="flex-grid">
                    <div className="user-information">

                        <h4>{about}</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta est rerum similique, eveniet dolor.</p>
                        <button className="contact-user">Contact User</button>
                    </div>
                    <div className="about-container">


                        <h4>{looking}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit.</p>
                        <h4>{offer}</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quos.</p>

                    </div></div>


            </div>


        </div>
    )

}
export default Card;

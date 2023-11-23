import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
const link =  <a href="https://www.vrbo.com/?">link</a>    
    const navigate = useNavigate();

    function navigateToList() {
        navigate("/services");
    }
    function navigateToPost(){
        navigate("/postingForm")
    }
    function navigateToReviews(){
      navigate("/reviews")
    }

  return (
    <>
    <h1 style={{padding:"20px"}}>Home Page</h1>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <figure style={{ marginRight: '20px' }}>
          <img

            src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=100px.jpg
            "
            alt="Try Again"
            padding
          />
        </figure>
        <div>
          <h2>BNB EXPLORER</h2>
          <p>
We serves as an inclusive platform connecting travelers with a rich array of accommodations worldwide. Its user-friendly interface allows visitors to seamlessly navigate and explore a diverse range of options, from charming bed and breakfasts and boutique inns to unique private homes. Each accommodation listing is thoughtfully curated, providing detailed information, high-quality visuals, and user reviews to empower travelers in making informed choices. The platform's global coverage ensures that users can discover and book accommodations in various countries and cities, fostering a sense of adventure and cultural exploration. Host profiles add a personal touch, allowing travelers to connect with hosts on a more human level, while a secure booking system and robust customer support contribute to a trustworthy and reliable travel experience.

<br/>With a commitment to user satisfaction and safety, the global BNB website prioritizes security and privacy, implementing cutting-edge encryption for personal information and secure payment transactions. Multilingual support accommodates an international user base, facilitating effective communication between hosts and travelers from diverse linguistic backgrounds. The platform's dedication to community and authenticity is evident through its review system, enabling guests to share their experiences and build a collective knowledge base. As a result, the global BNB website stands as a go-to destination for travelers seeking unique, personalized, and culturally rich accommodations around the world.

 </p>

        </div>
      </section>
      <div><p>In this project we have a  few  <span onClick={navigateToList} style={{color:"blue"}}><em>list</em></span> of BnBs and also you are allowing You to <span onClick={navigateToPost} style={{color:"blue"}}><em>post</em></span> your own  BnBs.However,all BnBs may not be there therefore you can use this <em>{link}</em>to search for more. 
    also u can <span onClick={navigateToReviews}style={{color:"blue"}}> <em>review us</em></span>
   </p></div>
   < Footer />
    </>
  );
}

export default Home;

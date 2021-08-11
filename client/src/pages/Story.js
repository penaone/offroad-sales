import React from "react";
import Cart from '../components/Cart';

const Story = () => {
  return (
    <section>
      <Cart />
      <div className="our-story">
        <div className="story-top">
            <p>
              It all started with a passion...
            </p>
        </div>

        <div className="content-title">Our Story</div>

        <div className="story-div">
          <div className="story-div-left">
            <div className="chef-img"></div>
          </div>
          
          <div className="story-div-right">
            <p>
            My name is Raquel Flores, and I enjoy cooking and spending time with family and friends.  
            It all started when I was a little girl and had a Holly Hobbie Playhouse with a kitchen, stove, and refrigerator. 
            To this day I am a firm believer that the best way to spend time together with family and friends is with food.   
            I cook traditional Puerto Rican meals every Easter, Thanksgiving, and Christmas. 
            For example, I make <i>arroz con gandules,</i> empanadas, plantains, stew beef with potatoes, and <i>pasteles.</i>
            The one thing that everyone enjoys is the empanadas.  
            They are always a big hit, and 
            I always bring them to my family and friend's events. They can never get enough!
            One day a friend asked me if she could buy two dozen, but I had never thought about selling them.  
            Since that day, I began Mamasita's Empanadas.
            It’s amazing how quickly the word got around about my empanadas. 
            I feel truly blessed to be able to share my Spanish tradition with everyone around me.   
            Food tastes better when you share it with the people you love.               </p>
          </div>
        </div>

        <div className="inside"></div>

        <div className="our-values">
          <div className="sub-content-title">Our Values</div>
          <p>
            To achieve the best tasting food, we know that getting our ingredients from local farms makes a big difference.
            Using the freshest, most organic ingredients ensures that every batch of empanadas we make are the best. 
            We know by consistently following our values, you will enjoy every empanada you buy.
          </p>
        </div>

        <div className="our-partners">
          <div className="sub-content-title">Our Partners</div>
          <div className="partner-wrapper">

            <div className="partner-item">
              <a href="https://www.citifarms.com/" target="_blank" rel="noreferrer"><div className="partner-1"></div></a>
              <p>CitiFarms</p>
            </div>
            
            <div className="partner-item">
              <a href="http://mayasfarm.com/" target="_blank" rel="noreferrer"><div className="partner-2"></div></a>
              <p>Mayas Farm</p>
            </div>
            
            <div className="partner-item">
              <a href="http://www.doublecheckranch.com/" target="_blank" rel="noreferrer"><div className="partner-3"></div></a>
              <p>Double Check Ranch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
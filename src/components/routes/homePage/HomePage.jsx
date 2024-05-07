import React from "react";
import "./homePage.scss";
import SearchBar from "../../searchbar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem error dicta repellat repudiandae adipisci ipsam
            earum, minus illum saepe asperiores cupiditate voluptatem ipsa iste
            dolorum soluta voluptatum aliquam, magni nisi.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Pictures of rental properties" />
      </div>
    </div>
  );
};

export default HomePage;

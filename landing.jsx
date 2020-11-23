import React from 'react';

function Landing() {
  return(
    <div>
      <div className="landing-header">
        <img src="img"/>
        <h1 className="landing-h1">STYLE, GROOMING &<br>LIFESTYLE FOR EVERYDAY</br></h1>
        <h2 className="landing-h2">Be prepared for each occasion and join our community of stylish men.</h2>
        <button className="button">Get Started</button>
      </div>
      <div>
        <div className="section-header-container">
          <h2 className="section-header">FEATURED POSTS</h2>
        </div>
        <div className="posts-container">
          <div className="post">
          <img src=""></img>
          <h4 className="post-category">GROOMING</h4>
          <h5 className="post-title">How to groom your beard for your face shape</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
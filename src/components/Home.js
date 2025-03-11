// Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
        
<section class="inner-banner term-sec">

<div class="page-title-area" style={{backgroundImage: `url('/images/Header-image.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '500px'}}>

    <div class="container">
        <div class="page-title-content" style={{ paddingTop:'100px', color:'black', paddingLeft:'200px'}}>
          <h3 style={{fontSize:'11px',color: ' hsl(46, 100%, 50%)', backgroundColor:'GrayText', width:'20%', borderRadius:'3px', padding:'10px'}}>___ SOLUTIONS FOR YOUR BUSSINESS</h3>
        <h1 style={{fontWeight:'25px', color:'white'}}>SIMPLYFING<br/> TECHNOLOGY FOR <br/> YOUR EASE!</h1>
      <p style={{color:'white'}}>BAMFER Consulting, a veteran-owned and operated <br/>organiation, prioritize the needs of its customers above all<br/> else</p>
      <div className="btn_group" style={{paddingLeft:"20px"}}>
      <button style={{backgroundColor: ' hsl(46, 100%, 50%)'}} >Book A Demo</button>
      <button style={{backgroundColor: ' hsl(46, 100%, 50%)'}}>Free Assessment</button>
      </div>  
        </div>
    </div>
</div>
</section>

  
    <br/>
    <br/>
    <br/>
    <section className="get_trademark_sec has_elem gray_bg">
  <div className="container wow slideUp animate__animated animate__backInRight" style={{ textAlign: 'left' }}>
    <div className="row">
      <div className="col-md-12">
        <div className="content-grid">
          <div className="img_holder desktop">
            <img src="../images/Header-image.png" alt="" className="img-fluid" />
          </div>
          <div className="gt_1">
            <h3 style={{color: ' hsl(46, 100%, 50%)'}}> WELCOME TO BAMFER CONSULTING ____</h3>
            <h2 style={{ fontWeight: 'bolder' }}>BEST CONSULTING <br/>SERVICES YOU CAN TRUST</h2>
            <h4 style={{color: ' hsl(46, 100%, 50%)'}}>THE PROFESIONAL APPROACH TO TECHNOLOGY</h4>
            <p>We don’t stop at direct hit searches; we explore alternative spellings, intentional misspellings, and more using AI tools. Utilizing advanced AI tools ensures your time and resources aren’t wasted on unavailable or non-unique trademarks.Our experts cover federal and international searches for a thorough analysis. Our trademark search reports are comprehensive yet easy to understand, guiding your trademark decisions effectively.<br /><br />Choosing a comprehensive trademark search safeguards your brand against conflicts and potential rejections, ensuring a strong foundation for your business identity.</p>
        
            <a href="#howits" className="theme-btn outlined_btn" style={{backgroundColor:'hsl(46, 100%, 50%)'}}>Read More</a>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

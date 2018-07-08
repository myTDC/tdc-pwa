/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
// import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
    <style>
    * {
        box-sizing: border-box;
    }
    a {
      text-decoration: none;
      font-size: inherit;
      color: inherit;
      }
    .toolbar {
      @apply --layout-horizontal;
      @apply --layout-end-justified;
      background-color: rgba(255, 255, 255, 0.95);
      }
  .tabs {
    height: 100%;
    @apply --layout-horizontal;
  }
  .tabs > a {
    @apply --layout-vertical;
    @apply --layout-center-center;
    margin: 12px 16px 12px;
    border-bottom: 1px solid #222;
  }
  header {
    @apply --layout-vertical;
    @apply --layout-center-center;
    height: calc(100vh - 64px);
    padding: 0 16px;
    background:radial-gradient(closest-side at 50%, #455A64,  #232D36);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    text-align: center;
  }
  header > h2 {
    font-size: 90px;
    font-weight: 500;
    margin: 0;
    color:white;
    
  }
  
  header > p {
    font-size: 18px;
    font-family: 'Open Sans';
  }
  header > h6 {
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight:300;
    margin:2px 0px 8px 0px;
  }
  section {
    /*padding: 88px 16px;*/
    @apply --layout-vertical;
    @apply --layout-center-center;
    height: calc(100vh - 64px);
    padding: 30px 20px;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    text-align: left;
    background-color: #232D32;
  }
  .container {
    @apply --layout-horizontal;
    max-width: 100%;
    margin: 5px auto;
    background-color: #232D32;
  }
  .container > * {
    @apply --layout-flex;
  }
  .container img {
    max-width: 100%;
    max-height: calc(100vh - 64px);
    border-radius:4%;
  }

  .container h3 {
    font-size: 32px;
    font-weight: 300;
    margin: 5px 30px;
    font-family:Fira sans;
    
  }
  .container p {
    line-height: 1.5;
    font-family:Open sans;
    margin: 0px 30px;
    
  }
  @media (max-width: 600px) {
    .container {
      @apply --layout-vertical;
      display:table;
      }
    .container p{
        font-size: 14px;
      }
    .container h3{
      font-size: 24px;
    }  
      .div1 {
        display:table-footer-group;  
      }
      .div2 {
        display:table-header-group;
      }
      section{
      height: calc(110vh);}
  }
  .btn {
    font-weight: 548;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    color: #000;
    font-family: 'Open Sans',sans-serif;
  }
  .btn-xl {
    padding: 0.5rem 1rem;
  }
  .btn-primary {
    background-color: #fff;
    border-color: #fff;
  }
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
    background-color: #16df82 !important;
  }
    
  .column {
      position: relative;
      float: left;
      width: 25%;
      padding: 0px;
      height: 100vh; 
  }
    .column:nth-child(1){
        background: url('./images/teacher.webp');
        background-position: center;
        background-size: 120%;
        background-repeat: no-repeat;
        transition: background-size 2s;
    }
    .column:nth-child(2){
        background: url('./images/student.webp');
        background-position: center;
        background-size: 120%;
        background-repeat: no-repeat;
        transition: background-size 2s;
    }
    .column:nth-child(3){
        background: url('./images/investor.webp');
        background-position: center;
        background-size: 120%;
        background-repeat: no-repeat;
        transition: background-size 2s;
    }
    .column:nth-child(4){
        background: url('./images/sponsor.webp');
        background-position: center;
        background-size: 120%;
        background-repeat: no-repeat;
        transition: background-size 2s;
    }
    div.column:hover{
      background-size:130%;
    }

    .grad{
      height:100%;
      background: linear-gradient(#232D32, rgba(0,0,00,0), #232D32);
      opacity:50;
      transition: opacity 2s;
      }
    div.grad:hover{
      opacity:0; 
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .column>h2{
      font-family: 'Fira Sans', sans-serif;
      font-weight: 900;
      font-size: 40px;
      position: absolute;
      bottom: 35px;
      left: 50%;
      color: #FF5722;
      transform: translate(-50%, -50%);
    }
    .column>p{
      font-family: 'Fira Sans', sans-serif;
      font-weight: 300;
      text-align:center;
      position: absolute;
      bottom: 5px;
      padding: 20px;
      color:#fff;
    }

    @media screen and (max-width: 1028px) {
      .column {
          width: 50%;
      }
    }  

    @media screen and (max-width: 600px) {
      .column {
          width: 100%;
      }
      .column>h2{
         font-size: 60px;
      }
    }
    footer {
      padding: 24px;
      background: var(--app-drawer-background-color);
      background:linear-gradient(#232D32 , #111619);
      text-align: center;
      color:  var(--app-header-text-color);
    }  
    ul{
      list-style:none;    
      display: inline-block;
      padding:0px;
      margin-top:0px;
    }
    li{
      display: inline-block;  
    }
    footer>p{
      font-size: 12px;
    }
    </style>
    <app-header-layout>
      
      <header>
      <br>
      <img src="images/plane-green.svg" style="width: 70%; height: 70%;">
        <h2 ><span style="font-family: 'Raleway', sans-serif; font-weight: 900;">TDC </span><span style="font-family:'Fira Sans', sans-serif; font-weight:800">'18</span></h2>
        <p>Building a startup is never easy. But we can always make it easier.</p>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Get Started Now</a>
        <h6>(There's no time like the present)</h6>
      </header>
      <section id="about">
        <div class="container">
          <div>
            <img src="images/eco.png">
          </div>
          <div >
            <h3> We want to build a sustainable future.</h3>
            <p>Leaving behind a legacy is not enough anymore. We need to ensure that be build a happy tomorrow which in turn ensures a better legacy.</p><br>
            <p>Sustainability is the destination but disruption is the vehincle you arrive in. The balance between the two is what we advocate.</p>
            <p>TDC aims to challenge you to find that balance and help build that future, one disruptive innovation at a time.</p>
            </div>
        </div>
      </section>
      <section id="intro">
        <div class="container">
         <div class="div1">
            <h3> By helping you realize your startup dreams.</h3><br>
            <p>Every smart ideas has the potential to be great, they just need the right launchpad.</p><br>
            <p>At TDC we help you build your custom launchpad, tailored to you and your ventures.</p><br>
            <p>We just like to place our bets on those willing to take a leap of faith to live their dreams.</p>
          </div>
          <div class="div2">
            <img src="images/startup.webp">
          </div>
        </div>
      </section>
      <section id="introNext">
        <div class="container">
          <div>
            <img src="images/serhat.webp">
          </div>
          <div>
            <h3> We guide, analyse & facilitate opportunities via our disruptive startup eco-system.</h3><br>
            <p>With our modular approach we only give you guidance packages required for your startup.</p><br>
            <p>By monitoring your growth with industry trends we facilitate data-driven insights for your marketplace.</p><br>
            <p>Finally our eco-system strives to give you the right opportunities at the right time.</p>
          </div>
        </div>
      </section>

    <div id="categories" class="row">
      <div class="column">
        <div class="grad"> </div>
        <h2>FACULTY</h2>
        <p>For those who wish to help their 
        students be the tomorrow.</p>
      </div>
      <div class="column">
        <div class="grad"> </div>
        <h2>STUDENT</h2>
        <p>For those who are willing to take the
        leap of faith to live their dreams.</p>
      </div>
      <div class="column">
        <div class="grad"> </div>
        <h2>INVESTOR</h2>
        <p>For those who guide the dreamers
        to build the future they deserve.</p>
      </div>
      <div class="column">
        <div class="grad"> </div>
        <h2>SPONSOR</h2>
        <p>For those who wish to help us 
        make a better tomorrow.</p>
      </div>
    </div>
  <footer>
        <p style="font-size:15px;"> Explore our Social Media and Get in touch: </p>
        <ul> 
          <li>
              <a href="https://www.facebook.com/TDCSIF/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 56 55"><title>Facebook</title><path fill="#fff" d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"></path></svg></a>
          </li>
          <li>
              <a href="https://www.instagram.com/thedisruptionchallenge/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 54 54"><title>instagram</title><path fill="#fff" d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"></path></svg></a>
          </li>
          <li>
              <a href="mailto:info.tdc18@gmail.com?Subject=I%20have%20a%20query." target="_top"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 56 43"><title>email</title><path fill="#fff" d="M10.5 6.4C9.1 6.4 8 7.5 8 8.9v21.3c0 1.3 1.1 2.5 2.5 2.5h34.9c1.4 0 2.5-1.2 2.5-2.5V8.9c0-1.4-1.1-2.5-2.5-2.5H10.5zm2.1 2.5h30.7L27.9 22.3 12.6 8.9zm-2.1 1.4l16.6 14.6c.5.4 1.2.4 1.7 0l16.6-14.6v19.9H10.5V10.3z"></path></svg></a>
          </li>
      </ul>
      <p>
      <a href="https://mytdc.github.io/tdcconnects" target="_blank">Our TDC | Connects portal - mytdc.github.io/tdcconnects</a>
      </p>  
      <p> TDC | Connects is a part of The Disruption Challenge 2018
      <p>An SIF initiative © FGC 2018</p>
  </footer>

    `;
  }
}

window.customElements.define('my-view1', MyView1);

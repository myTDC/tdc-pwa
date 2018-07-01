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
  }
  .container {
    @apply --layout-horizontal;
    max-width: 100%;
    margin: 5px auto;
    
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
    </style>
    <app-header-layout>
      
      <header>
      <br>
      <img src="images/plane-green.svg" style="width: 70%; height: 70%;">
        <h2 ><span style="font-family: 'Raleway', sans-serif; font-weight: 900;">TDC </span><span style="font-family:'fira sans';">'18</span></h2>
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
    `;
  }
}

window.customElements.define('my-view1', MyView1);

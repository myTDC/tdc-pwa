import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
class MyDash extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
        <style>
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
          background:linear-gradient(45deg,#455A64, #232D36) ;
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
          font-size: 28px;
          font-family: 'Open Sans';
        }
        header > h3 {
          font-family: 'Open Sans';
        }
        section {
          /*padding: 88px 16px;*/
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: calc(100vh - 64px);
          padding: 0px 20px;
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
          border-radius: 300px;
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
    </style>

    <app-header-layout>
      
      <header>
      <br>
      <img src="images/plane-green.svg" style="width: 70%; height: 70%;">
        <h2 ><b><span style="font-family:'raleway';">TDC </span><span style="font-family:'fira sans';">'18</span></b></h2>
        <p>Building a startup is never easy. But we can always make it easier.</p>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Get Started Now</a>
        <h3>(There's no time like the present)</h3>
      </header>
      <section id="about">
        <div class="container">
          <div>
            <img src="images/header.jpg">
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
            <img src="images/header.jpg">
          </div>
        </div>
      </section>
      <section id="introNext">
        <div class="container">
          <div>
            <img src="images/header.jpg">
          </div>
          <div>
            <h3> We guide, analyse & facilitate opportunities via our disruptive startup eco-system.</h3><br>
            <p>With our modular approach we only give you guidance packages required for your startup.</p><br>
            <p>By monitoring your growth with industry trends we facilitate data-driven insights for your marketplace.</p><br>
            <p>Finally our eco-system strives to give you the right opportunities at the right time.</p>
          </div>
        </div>
      </section>
    
 
    `;
  }
}
window.customElements.define('my-dash', MyDash);

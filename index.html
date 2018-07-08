/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerStateLeft,
  updateDrawerStateRight,
  updateLayout
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon, trialProfile, wifiOffIcon, wifiOnIcon } from './my-icons.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _drawerOpenedLeft, _drawerOpenedRight, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`

    <style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans');
      :host {
        --app-drawer-width: 300px;
        display: block;

        --app-primary-color: #455A64;
        --app-primary-dark-color: #1C313A;
        --app-secondary-color: #293237;
        --app-accent-color: #00C853;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: var(--app-primary-dark-color);
        --app-header-text-color: #90A4AE;
        --app-header-selected-color: var(--app-accent-color);

        --app-drawer-background-color: var(--app-primary-dark-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #2962FF;
      }
      
      app-header {
        position: fixed;
        z-index: 999;
        height: 64px;
        left: 0;
        width: 100%;
        text-align: left;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 3px solid #2962FF;
        
      }

      #navbar{
      
      }

      .toolbar-top {
        height: 55px;
        background-color: var(--app-header-background-color);
      }

      [main-title] {
        font-family: 'Fira Sans', sans-serif;
        font-weight: regular;
        font-size: 15px;
        text-align: center;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-left: 20px;
      }

      .toolbar-list {
        display: none;
        outline: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
        outline: none;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn-left {
        background: none;
        border: none;
        position: fixed;
        left:2%;
        cursor: pointer;
        height: 35px;
        width: 35px;
        outline: none;
      }

      .menu-btn-right {
        background: none;
        border: none;
        position: fixed;
        right:2%;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
        outline: none;
      }

      .wifi-status{
        background: none;
        border: none;
        position: fixed;
        right:23%;
        fill: #2962FF;
        cursor: pointer;
        height: 44px;
        width: 44px;
        outline: none;
      }

      @media (max-width: 460px){
        .wifi-status{
          display: none;
        }
      }
      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
        outline: none;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
        outline: none;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
        outline: none;
      }

      /* Workaround for IE11 displaying <main> as inline */
      main {
        display: block;
      }

      .main-content {
        padding-top: 64px;
        max-height: 100vh;
        padding: 0px;
        margin:0px;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      /* Ripple effect */
      .ripple {
        background-position: center;
        transition: background 0.8s;
        border-radius: 3px;
      }
      .ripple:hover {
        background: #455A64 radial-gradient(circle, transparent 1%, #37474F 1%) center/15000%;
      }
      .ripple:active {
        background-color: #37474F;
        background-size: 100%;
        transition: background 0s;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }
      }  
        .main-content {
          padding-top: 64px;
        }
        .mybrand{
          font-family: 'Fira Sans', sans-serif;
        }
    </style>

    <!-- Header -->
    <app-header reveals>
      <app-toolbar>
        <button class="menu-btn-left"  on-click="${_ => store.dispatch(updateDrawerStateLeft(true))}">${menuIcon}</button>
        <button class="menu-btn-right ripple" on-click="${_ => store.dispatch(updateDrawerStateRight(true))}">${trialProfile}</button>
        <button class="wifi-status">${_offline ? wifiOffIcon : wifiOnIcon}</button>
        <div main-title>TDC'18</div>
      </app-toolbar>
    </app-header>

    <!-- Drawer content Left-->
    <app-drawer style="z-index:9999;" id="drawerLeft" opened="${_drawerOpenedLeft}"
        on-opened-changed="${e => store.dispatch(updateDrawerStateLeft(e.target.opened))}">
      <nav class="drawer-list">
        <a class="ripple" selected?="${_page === 'view1'}" href="/view1">Get Started</a>
        <a class="ripple" selected?="${_page === 'view2'}" href="/view2">Disruption Journey</a>
        <a class="ripple" href="https://www.facebook.com/TDCSIF">Social Media</a>
      </nav>
    </app-drawer>

    <!-- Drawer content Right-->
    <app-drawer style="z-index:9999;" align="end" opened="${_drawerOpenedRight}"
        on-opened-changed="${e => store.dispatch(updateDrawerStateRight(e.target.opened))}">
      <nav class="drawer-list">
      
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main" class="main-content">
      <my-view1 class="page" active?="${_page === 'view1'}"></my-view1>
      <my-view2 class="page" active?="${_page === 'view2'}"></my-view2>
      <my-view3 class="page" active?="${_page === 'view3'}"></my-view3>
      <my-view404 class="page" active?="${_page === 'view404'}"></my-view404>
    </main>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>

        
 
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpenedLeft: Boolean,
      _drawerOpenedRight: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }
  
  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpenedLeft = state.app.drawerOpenedLeft;
    this._drawerOpenedRight = state.app.drawerOpenedRight;
  }
}

window.customElements.define('my-app', MyApp);

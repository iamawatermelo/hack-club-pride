// ==UserScript==
// @name        hack-club-pride
// @namespace   Violentmonkey Scripts
// @match       *://app.slack.com/client/T0266FRGM/*
// @grant       none
// @version     1.0
// @author      iamawatermelo
// @description Restore the Hack Club Pride logo (https://github.com/iamawatermelo/hack-club-pride)
// ==/UserScript==

document.head.innerHTML += `<style>
  /* Inserted by hack-club-pride */
  .p-account_switcher__team_icon--current {
    background-image: url("https://assets.hackclub.com/icon-progress-square.png") !important;
  }
</style>`;
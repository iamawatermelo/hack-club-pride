console.log("[hack-club-pride] Listening for changes")

let el;

const tryReplace = () => {
  el = document.getElementsByClassName("p-account_switcher__team_icon--current")[0];
  if (el) {
    el.style.backgroundImage = `url("https://assets.hackclub.com/icon-progress-square.png")`;
  }
  
  // literally cba doing this correctly
  setTimeout(tryReplace, 200);
};

tryReplace();
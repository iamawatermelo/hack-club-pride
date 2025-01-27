console.log("[hack-club-pride] Listening for changes")

const try_replace = () => {
  const el = document.getElementsByClassName("p-account_switcher__team_icon--current")[0];
  if (el === undefined) {
    console.log("[hack-club-pride] Trying again in 200ms...");
    setTimeout(try_replace, 200);
    return;
  }
  
  console.log("[hack-club-pride] Replacing background image");
  el.style.backgroundImage = `url("https://assets.hackclub.com/icon-progress-square.png")`;
};

try_replace();
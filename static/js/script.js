const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector("#menu");

const main = document.querySelector(".main");

const menu_container = document.querySelector(".menu-container");

const name = document.querySelector("#name")

const dashboard = document.querySelector("#dashboard");
const gamers = document.querySelector("#gamers");
const game = document.querySelector("#game");
const leaderboard = document.querySelector("#leaderboard");
const news = document.querySelector("#news");
const player = document.querySelector("#player");
const shop = document.querySelector("#shop");
const forum = document.querySelector("#forum");
const report = document.querySelector("#report");
const settings = document.querySelector("#settings")

// import


let previousToggled = null;
let currentToggled = null;

// 

dashboard.addEventListener("click", (e) => {
  toggleMenu(dashboard);
});

gamers.addEventListener("click", (e) => {
  toggleMenu(gamers);
});

game.addEventListener("click", (e) => {
  toggleMenu(game);
});

leaderboard.addEventListener("click", (e) => {
  toggleMenu(leaderboard);
});

news.addEventListener("click", (e) => {
  toggleMenu(news);
});

player.addEventListener("click", (e) => {
  toggleMenu(player);
});

shop.addEventListener("click", (e) => {
  toggleMenu(shop);
});

forum.addEventListener("click", (e) => {
  toggleMenu(forum);
});

report.addEventListener("click", (e) => {
  toggleMenu(report);
});

settings.addEventListener("click", (e) => {
  toggleMenu(settings);
});



const toggleMenu = (button) => {
  if (previousToggled && button !== menu) {
    untoggleMenu(previousToggled);
  }

  button.classList.add("toggled");
  button.style.backgroundColor = "#f33f3fc8";

  if (button !== menu) {
    previousToggled = button;
  }
};

const untoggleMenu = (button) => {
  button.classList.remove("toggled");
  button.style.backgroundColor = "#f33f3fc8";
};

menu.addEventListener("click", (e) => {
  sidebar.classList.contains("active") ? closeMenu() : openMenu();
});

const openMenu = () => {
  sidebar.classList.add("active");
  sidebar.style.width = "250px";

  toggleMenu(menu);

  let menu_logo = document.createElement("img");
  menu_logo.id = "menu-logo";
  menu_logo.src = "static/images/rajul.jpg";
  menu_logo.style.borderRadius = "40%";
  menu_logo.style.width = "60px";
  menu_container.style.paddingLeft = "15px";
  menu_container.insertBefore(menu_logo, menu_container.childNodes[0]);

  
  let p_dash = document.createElement("p");
  p_dash.id = "p-dashboard";
  p_dash.innerHTML = "Dashboard";
  dashboard.style.width = "220px";
  dashboard.style.justifyContent = "left";
  dashboard.appendChild(p_dash);

  let p_gamers = document.createElement("p");
  p_gamers.id = "p-gamers";
  p_gamers.innerHTML = "Gamers";
  gamers.style.width = "220px";
  gamers.style.justifyContent = "left";
  gamers.appendChild(p_gamers);

  let p_game = document.createElement("p");
  p_game.id = "p-game";
  p_game.innerHTML = "Game";
  game.style.width = "220px";
  game.style.justifyContent = "left";
  game.appendChild(p_game);

  let p_leader = document.createElement("p");
  p_leader.id = "p-leaderboard";
  p_leader.innerHTML = "Leaderboard";
  leaderboard.style.width = "220px";
  leaderboard.style.justifyContent = "left";
  leaderboard.appendChild(p_leader);


  let p_news = document.createElement("p");
  p_news.id = "p-news";
  p_news.innerHTML = "News";
  news.style.width = "220px";
  news.style.justifyContent = "left";
  news.appendChild(p_news);

  let p_player = document.createElement("p");
  p_player.id = "p-player";
  p_player.innerHTML = "Player";
  player.style.width = "220px";
  player.style.justifyContent = "left";
  player.appendChild(p_player);

  let p_shop = document.createElement("p");
  p_shop.id = "p-shop";
  p_shop.innerHTML = "Shop";
  shop.style.width = "220px";
  shop.style.justifyContent = "left";
  shop.appendChild(p_shop);

  let p_forum = document.createElement("p");
  p_forum.id = "p-forum";
  p_forum.innerHTML = "Forum";
  forum.style.width = "220px";
  forum.style.justifyContent = "left";
  forum.appendChild(p_forum);

  let p_report = document.createElement("p");
  p_report.id = "p-report";
  p_report.innerHTML = "Report";
  report.style.width = "220px";
  report.style.justifyContent = "left";
  report.appendChild(p_report);

  let p_settings = document.createElement("p");
  p_settings.id = "p-settings";
  p_settings.innerHTML = "Settings";
  settings.style.width = "220px";
  settings.style.justifyContent = "left";
  settings.appendChild(p_settings);

  icon_logout.style.width = "25%";

  main.style.width = "calc(100% - 250px)";
};

const closeMenu = () => {
  menu_container.removeChild(document.getElementById("menu-logo"));
  menu_container.style.paddingLeft = "0px";

  untoggleMenu(menu);

  dashboard.removeChild(document.getElementById("p-dashboard"));
  dashboard.style.width = "50px";
  dashboard.style.justifyContent = "center";

  gamers.removeChild(document.getElementById("p-gamers"));
  gamers.style.width = "50px";
  gamers.style.justifyContent = "center";
  
  game.removeChild(document.getElementById("p-game"));
  game.style.width = "50px";
  game.style.justifyContent = "center";

  leaderboard.removeChild(document.getElementById("p-leaderboard"));
  leaderboard.style.width = "50px";
  leaderboard.style.justifyContent = "center";

  news.removeChild(document.getElementById("p-news"));
  news.style.width = "50px";
  news.style.justifyContent = "center";

  player.removeChild(document.getElementById("p-player"));
  player.style.width = "50px";
  player.style.justifyContent = "center";

  shop.removeChild(document.getElementById("p-shop"));
  shop.style.width = "50px";
  shop.style.justifyContent = "center";

  forum.removeChild(document.getElementById("p-forum"));
  forum.style.width = "50px";
  forum.style.justifyContent = "center";

  report.removeChild(document.getElementById("p-report"));
  report.style.width = "50px";
  report.style.justifyContent = "center";

  settings.removeChild(document.getElementById("p-settings"));
  settings.style.width = "50px";
  settings.style.justifyContent = "center";

  sidebar.classList.remove("active");
  sidebar.style.width = "78px";

  main.style.width = "calc(100% - 78px)";
};


function screenDashboard() {
  window.location.href = "/";
}

function screenGamers() {
  window.location.href = "/gamers";
}

function screenGame() {
  window.location.href = "/game";
}

function screenLeaderboard() {
  window.location.href = "/leaderboard";
}

function screenNews() {
  window.location.href = "/news";
}

function screenPlayer() {
  window.location.href = "/player";
}

function screenShop() {
  window.location.href = "/shop";
}

function screenForum() {
  window.location.href = "/forum";
}

function screenReport() {
  window.location.href = "/report";
}

function screenSettings() {
  window.location.href = "/settings";
}

document.getElementById("dashboard").addEventListener("click", screenDashboard);
document.getElementById("gamers").addEventListener("click", screenGamers);
document.getElementById("game").addEventListener("click", screenGame);
document.getElementById("leaderboard").addEventListener("click", screenLeaderboard);
document.getElementById("news").addEventListener("click", screenNews);
document.getElementById("player").addEventListener("click", screenPlayer);
document.getElementById("shop").addEventListener("click", screenShop);
document.getElementById("forum").addEventListener("click", screenForum);
document.getElementById("report").addEventListener("click", screenReport);
document.getElementById("settings").addEventListener("click", screenSettings);

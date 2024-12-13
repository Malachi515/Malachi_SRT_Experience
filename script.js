function pauseAll() {
  document.getElementById("Lock").pause();
  document.getElementById("Lock").currentTime = 0;
  document.getElementById("Start").pause();
  document.getElementById("Start").currentTime = 0;
  document.getElementById("Door").pause();
  document.getElementById("Door").currentTime = 0;
  document.getElementById("Trunk").pause();
  document.getElementById("Trunk").currentTime = 0;
  document.getElementById("Panic").pause();
  document.getElementById("Panic").currentTime = 0;
}

function goToEngine() {
  pauseAll();
  document.getElementById("Door").play();
  setTimeout(() => {
    window.location.href = "https://wczq74.csb.app/";
  }, 1200);
}

function goToFilm() {
  window.location.href = "https://6jzdvp.csb.app/";
}

function goToGame() {
  window.location.href = "https://99sqy4.csb.app/";
}

function playLockUnlock() {
  pauseAll();
  document.getElementById("Lock").play();
}

function playStart() {
  pauseAll();
  document.getElementById("Start").play();
}

function goToInside() {
  pauseAll();
  document.getElementById("Door").play();
  setTimeout(() => {
    window.location.href = "https://mkzvf8.csb.app/";
  }, 1200);
}

function playPanic() {
  pauseAll();
  document.getElementById("Panic").play();
}

function playTrunk() {
  pauseAll();
  document.getElementById("Trunk").play();
}

function playHoverSound() {
  document.getElementById("Select").currentTime = 0;
  document.getElementById("Select").play();
}

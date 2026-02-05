const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reply = document.getElementById("reply");
const music = document.getElementById("music");
const card = document.getElementById("card");

/* Start music on first interaction */
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

/* YES button */
yesBtn.addEventListener("click", () => {
  reply.innerText = "";
  card.classList.add("celebrate");
  typeWriter("I knew it babe 🥹💖 You make my life beautiful.");
  explodeHearts();
});

/* NO button runs away */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", () => {
  reply.innerText = "You can’t say no babe 😏❤️";
});

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Typewriter effect */
function typeWriter(text) {
  let i = 0;
  const speed = 50;
  function write() {
    if (i < text.length) {
      reply.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }
  write();
}

/* Floating hearts generator */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

/* Heart explosion */
function explodeHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💘";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "50vh";
    heart.style.animationDuration = "2s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
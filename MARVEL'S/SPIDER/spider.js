const csr = document.querySelector(".csr");
const csr2 = document.querySelector(".csr2");
document.addEventListener("mousemove", (dets) => {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
  csr2.style.left = dets.x + "px";
  csr2.style.top = dets.y + "px";
});

// Add 100 stars to the container
const container = document.querySelector(".stars-container");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
  star.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  star.style.animationDelay = `${Math.floor(Math.random() * 10)}s`;
  star.style.animationDuration = `${Math.floor(Math.random() * 20) + 10}s`;
  container.appendChild(star);
}

//ANIMATION ENDED

//FETCHING STARTED...
//FETCHING STARTED...
let url =
  "https://www.superheroapi.com/api.php/727054372039115/search/spider-man";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    const card = document.querySelector(".card");
    card.innerHTML = `
      <div class="card">
        <div class="content">

        <div class="topg">
        <div id="theme">
        <i class="fa-solid fa-shirt"></i>
        </div>
        <div id="cha">
        <i class="fas fa-user"></i>

        </div></div>

          <div id="pro">
            <h4>PROFILE:</h4>
            <h3>${data.results[0].name}</h3>
          </div>
         
          <div class="info">
            <h3>INFORMATION</h3>
          </div>
          <div class="carddd">
          <div class="carddd__stat">
              <span class="carddd__stat-name">Real Name:</span>
              <span class="carddd__stat-value">${data.results[0].biography["full-name"]}</span>
            </div>
            
            <div class="carddd__stat">
              <span class="carddd__stat-name">Gender:</span>
              <span class="carddd__stat-value">${data.results[0].appearance.gender}</span>
            </div>
            <div class="carddd__stat">
              <span class="carddd__stat-name">Weight:</span>
              <span class="carddd__stat-value">${data.results[0].appearance.weight[1]}</span>
            </div>
            <div class="carddd__stat">
              <span class="carddd__stat-name">Height:</span>
              <span class="carddd__stat-value">${data.results[0].appearance.height[1]}</span>
            </div>
            <div class="carddd__stat">
              <span class="carddd__stat-name">Eye Color:</span>
              <span class="carddd__stat-value">${data.results[0].appearance["eye-color"]}</span>
            </div>
            <div class="carddd__stat">
              <span class="carddd__stat-name">Birth Place:</span>
              <span class="carddd__stat-value">${data.results[0].biography["place-of-birth"]}</span>
            </div>
            
         
            <div class="more">
            <button id="moree" onclick="read()">Read More </button>
          </div>
          </div> 
        </div>
        <img id="hulk-image" src="/SPIDER/1.png" />
      </div>`;

    //CHARACTER CHANGE
    const character = document.querySelector("#cha i");
    const hulkImage = document.querySelector("#hulk-image");
    const images = [
      "/SPIDER/1.png",
      "/SPIDER/3 standingh.png",
      "/SPIDER/4.png",
    ];
    let currentImageIndex = 0;

    character.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      hulkImage.src = images[currentImageIndex];
    });

    //THEME CHANGE
    const themeIcon = document.querySelector("#theme i");
    const body = document.querySelector("body");
    const backgrounds = [
      "/SPIDER/bg2.webp",
      "/SPIDER/bg6.gif",
      "/SPIDER/bg5.gif",
      "/SPIDER/bg2.webp",
      "/SPIDER/bg8.gif",
      "/SPIDER/bg9.gif",
      "/SPIDER/bg10.gif",
      "/SPIDER/bg3.gif",
    ];
    let currentBackgroundIndex = 0;

    themeIcon.addEventListener("click", () => {
      currentBackgroundIndex =
        (currentBackgroundIndex + 1) % backgrounds.length;
      body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    });
  });

//FETCHING ENDED...

//GRID:Read More
function read() {
  window.open("/GRID/grid.html", "_blank");
}
//Grid End

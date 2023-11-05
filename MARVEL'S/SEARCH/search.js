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

document.addEventListener("DOMContentLoaded", function () {
  let url = "https://www.superheroapi.com/api.php/727054372039115/search/";
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");
  const box = document.querySelector(".box");

  btn.addEventListener("click", function () {
    var inputtext = input.value;
    document.querySelector(".logo").style.display = "none";
    fetch(`${url}${inputtext}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const card = document.querySelector(".card");
        card.innerHTML = `
          <div class="card">
            <div class="content">
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
            <img id="hulk-image" src="${data.results[0].image.url}" />
          </div>`;
        document.querySelector(".error").style.display = "none";
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".card").innerHTML = "";
      });

    input.value = "";
    box.style.top = "10%";
  });
});

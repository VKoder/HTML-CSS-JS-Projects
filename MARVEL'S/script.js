const csr = document.querySelector(".csr");
const csr2 = document.querySelector(".csr2");
document.addEventListener("mousemove", (dets) => {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
  csr2.style.left = dets.x + "px";
  csr2.style.top = dets.y + "px";
});

const heros = document.querySelectorAll(".heros img");
heros.forEach((element) => {
  element.addEventListener("mousemove", () => {
    csr.style.width = "30px";
    csr.style.height = "30px";
    csr.style.backgroundColor = "transparent";
    csr.style.border = "2px solid white";
  });
  element.addEventListener("mouseleave", () => {
    csr.style.width = "10px";
    csr.style.height = "10px";
    csr.style.backgroundColor = "yellow";
    csr.style.border = "none";
  });
});

//ANIMATION
function init() {
  var style = ["style1", "style2", "style3", "style4"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //meteoros

  var numeroAleatorio = 5000;

  setTimeout(function () {
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro() {
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro =
      "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
    document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = meteoro;
    setTimeout(function () {
      document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = "";
    }, 1000);
  }
}
window.onload = init;

var scene = new THREE.Scene();
// document.addEventListener("mousemove", onMouseMove, false);
var camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var mouseX;
var mouseY;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const loader = new THREE.TextureLoader();

const distance = Math.min(300, window.innerWidth);
const geometry = new THREE.BoxGeometry();
const material = new THREE.PointsMaterial({
  flatShading: true,
});

for (var i = 0; i < 1600; i++) {
  var vertex = new THREE.Vector3();

  var theta = Math.acos(THREE.Math.randFloatSpread(2));
  var phi = THREE.Math.randFloatSpread(360);

  vertex.x = distance * Math.sin(theta) * Math.cos(phi);
  vertex.y = distance * Math.sin(theta) * Math.sin(phi);
  vertex.z = distance * Math.cos(theta);

  geometry.vertices.push(vertex);
}
var particles = new THREE.Points(geometry, material);
particles.boundingSphere = 5;

var renderingParent = new THREE.Group();
renderingParent.add(particles);
var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);

camera.position.z = 360;

var animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
var myTween;
function onMouseMove(event) {
  if (myTween) myTween.kill();

  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  myTween = gsap.to(particles.rotation, {
    duration: 0.1,
    x: mouseY * -1,
    y: mouseX,
  });
}
animate();

// Scaling animation
var animProps = { scale: 1, xRot: 0, yRot: 0 };
gsap.to(animProps, {
  duration: 16,
  scale: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine",
  onUpdate: function () {
    renderingParent.scale.set(
      animProps.scale,
      animProps.scale,
      animProps.scale
    );
  },
});

gsap.to(animProps, {
  duration: 1000,
  xRot: Math.PI * 2,
  yRot: Math.PI * 4,
  repeat: -1,
  yoyo: true,
  ease: "none",
  onUpdate: function () {
    renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
  },
});
// function spider() {
//   window.open("/SPIDER/spider.html", "_self");
// }

// function thor() {
//   window.open("/THOR/thor.html", "_self");
// }

// function iron() {
//   window.open("/IRON/iron.html", "_self");
// }

// function hulk() {
//   window.open("/HULK/hulk.html", "_self");
// }

// function captain() {
//   window.open("/CAPTAIN/captain.html", "_self");
// }

//LINKED
const images = document.querySelectorAll(".heros img");
let index = 0;

function showImage() {
  if (index < images.length) {
    images[index].style.display = "block";
    index++;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(showImage, 7000);

function e() {
  alert(
    `This is just a practice project to implement what I have understood about JavaScript API and to implement, the main goal of this website, which is to focus on the superhero API and much on JavaScript. I didn't put much effort into designing and elaborating it.`
  );
}

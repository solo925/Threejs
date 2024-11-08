import * as THREE from 'three';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);


const planets = [];
const planetColors = [0xff4500, 0x1e90ff, 0x32cd32, 0xffd700, 0x8a2be2, 0xff1493, 0x00ffff, 0xff8c00];

//this is the distance from the sun
const orbitDistances = [3, 5, 7, 9, 11, 13, 15, 17];

for (let i = 0; i < planetColors.length; i++) {
  const planetGeometry = new THREE.SphereGeometry(0.3 + i * 0.05, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: planetColors[i] });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);


  planet.userData = {
    orbitDistance: orbitDistances[i],
    angle: Math.random() * Math.PI * 2,
  };

  scene.add(planet);
  planets.push(planet);
}

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;


function animate() {
  requestAnimationFrame(animate);

  sun
  planets.forEach((planet) => {
    planet.userData.angle += 0.02 / planet.userData.orbitDistance;


    planet.position.x = planet.userData.orbitDistance * Math.cos(planet.userData.angle);
    planet.position.z = planet.userData.orbitDistance * Math.sin(planet.userData.angle);
  });


  renderer.render(scene, camera);
}

animate();

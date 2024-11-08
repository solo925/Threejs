// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Lighting for better visibility
// const light = new THREE.PointLight(0xffffff, 300, 100, 2);
// light.position.set(5, 5, 5);
// scene.add(light);

// // Cube setup
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// // Sphere setup with lighting-responsive material
// const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
// const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.position.x = -5;
// sphere.position.y = 2; // Position sphere to the right of the cube
// scene.add(sphere);

// // Set camera position
// camera.position.z = 5;

// function animate() {
//   cube.rotation.x += 0.02;
//   cube.rotation.y += 0.03;
//   sphere.rotation.x += 0.02;
//   sphere.rotation.y += 0.03;

//   renderer.render(scene, camera);
// }


// renderer.setAnimationLoop(animate);


import * as THREE from 'three';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const light = new THREE.PointLight(0xffffff, 350);
light.position.set(5, 5, 5);
scene.add(light);


const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 2;
scene.add(sphere);

const cubeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
cubeCamera.position.z = 5;

const sphereCamera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
sphereCamera.position.z = 3;


function animate() {

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.03;
  sphere.rotation.x += 0.02;
  sphere.rotation.y += 0.03;


  renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
  renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
  renderer.setScissorTest(true);
  renderer.render(scene, cubeCamera);


  renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
  renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
  renderer.render(scene, sphereCamera);

  renderer.setScissorTest(false);
}


renderer.setAnimationLoop(animate);

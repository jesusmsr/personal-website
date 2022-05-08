import $ from 'jquery';
import * as THREE from 'three';
import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('canvas.webgl');

// Textures
const textureLoader = new THREE.TextureLoader();
const normal1Texture = textureLoader.load('./assets/textures/normal2.png');

// Scene
const scene = new THREE.Scene();

// Objects
const sphereGeometry = new THREE.SphereBufferGeometry(1, 64, 64);

// Materials

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.color = new THREE.Color(0x000000);
material.normalMap = normal1Texture;

// Mesh 
const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Light
const light = new THREE.PointLight(0xffffff, .5);
light.position.x = 1.5;
light.position.y = 0;
light.position.z = 5;
scene.add(light);

const light2 = new THREE.PointLight(0xff0000, 6);
light2.position.set(-2, 1.5, 6);
scene.add(light2);

const light3 = new THREE.PointLight(0xff00ff, 2);
light3.position.set(0, -2, 5);
scene.add(light3);

window.addEventListener('resize', () => {
    // Update sizes 
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}

const clock = new THREE.Clock();

const tick = () => {

    targetX = mouseX * .001;
    targetY = mouseY * .001;

    const elapsedTime = clock.getElapsedTime();

    // Update Objects
    sphere.rotation.y = .5 * elapsedTime;
    //sphere.rotation.x = .5 * elapsedTime;
    //sphere.rotation.z = -0.15 * elapsedTime;

    sphere.rotation.y += .5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += .05 * (targetY - sphere.rotation.x);
    sphere.rotation.z += -.05 * (targetY - sphere.rotation.x);

    // Update orbital controls

    // Render 
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();


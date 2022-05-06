import $ from 'jquery';
import AOS from 'aos';
import KUTE from 'kute.js'

$(document).ready(function () {

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Geometry
  var cubeGeometryBig = new THREE.BoxGeometry(50, 50, 50);
  var cubeGeometryMedium = new THREE.BoxGeometry(10, 10, 10);
  var cubeGeometrySmall = new THREE.BoxGeometry(50, 50, 50);
  var points = [];

  // Materials
  var greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var blackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
  points.push(new THREE.Vector3(- 10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  // Meshes
  var cube = new THREE.Mesh(cubeGeometryBig, greenMaterial);
  var cube2 = new THREE.Mesh(cubeGeometryMedium, blackMaterial);
  var lineG = new THREE.BufferGeometry().setFromPoints(points);
  var line = new THREE.Line(lineG, lineMaterial);

  scene.add(cube);
  scene.add(cube2);
  scene.add(line);

  cube.position.z = 0;
  cube2.position.z = 50;
  camera.position.z = 100;

  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  AOS.init();

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  if (window.screen.width >= 320) {
    document.querySelector('.main-container').style.position = 'fixed';
    document.querySelector('.scroll').style.position = 'fixed';
  }

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // const tween = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob1' },
  //   { path: '#blob2' },
  //   { easing: "easingCubicInOut", duration: 1500 }
  // )

  // const tween2 = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob2' },
  //   { path: '#blob3' },
  //   { easing: "easingCubicInOut", duration: 2000 }
  // )

  // const tween3 = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob3' },
  //   { path: '#blob4' },
  //   { easing: "easingCubicInOut", duration: 1750 }
  // )

  // const tween4 = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob4' },
  //   { path: '#blob5' },
  //   { easing: "easingCubicInOut", duration: 2000 }
  // )

  // const tween5 = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob5' },
  //   { path: '#blob2' },
  //   { easing: "easingCubicInOut", duration: 1750 }
  // )
  // const tween6 = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob2' },
  //   { path: '#blob1' },
  //   { easing: "easingCubicInOut", duration: 2000 }
  // )

  // tween.chain(tween2);
  // tween2.chain(tween3);
  // tween3.chain(tween4);
  // tween4.chain(tween5);
  // tween5.chain(tween6);
  // tween6.chain(tween);
  // tween.start();

});


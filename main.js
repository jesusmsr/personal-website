import $ from 'jquery';
import AOS from 'aos';
import KUTE from 'kute.js'

$(document).ready(function () {

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 2;

  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

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


import * as THREE from 'https://unpkg.com/three@0.123.0/build/three.module.js';
import { OrbitControls } from "https://unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({alpha:true,canvas:canvas});
renderer.setSize(window.innerWidth/3,window.innerHeight/3);

const scene = new THREE.Scene();
scene.background=null;

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(10,0,0);
camera.lookAt(0,0,0);

const controls = new OrbitControls(camera,renderer.domElement);
controls.autoRotate = true;
controls.maxDistance=20;
controls.minDistance=7.4;

const geometry = new THREE.SphereGeometry(4.5,64,64);

const loader = new THREE.TextureLoader();

loader.load('/weed.jpg',
function(texture){
    var material = new THREE.MeshBasicMaterial({map: texture});
    const sphere = new THREE.Mesh(geometry,material);
    sphere.position.set(0,0,0);
    scene.add(sphere);
});

function animate(){
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();
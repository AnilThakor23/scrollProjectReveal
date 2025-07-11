import * as THREE from 'three';
import vertexShader from '/shaders/vertex.glsl'
import fragmentshader from '/shaders/fragment.glsl'
// import GUI from 'lil-gui';
import gsap from 'gsap';
import Lenis from 'lenis'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
gsap.registerPlugin(ScrollTrigger);



const images = document.querySelectorAll(".projectImg")
let Planes = [];

const lenis = new Lenis({
  smoothWheel:true,
  smooth:true,
  wheelMultiplier: 0.5 // default is 1.0
});
lenis.on('scroll', updatePositions());

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const image1 = "./vc.jpg"
const image2 = "https://hajimewatanabe.jp/assets/img/categories/20/vc.jpg"

const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// camera.position.set(0, 0, 5); 
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 2;

const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2, 
  frustumSize * aspect / 2,  
  frustumSize / 2,          
  -frustumSize / 2,          
  0.1,                        
  10                          
);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);




const textureLoader = new THREE.TextureLoader();

images.forEach((img, idx) => {
  const rect = img.getBoundingClientRect();
  const imgSrc = img.getAttribute('src');
  const texture = textureLoader.load(imgSrc, (texture) => {
    texture.encoding = THREE.sRGBEncoding;
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  // Convert DOM rect to world units
  const width = pixelsToWorldUnits(rect.width, window.innerWidth, frustumSize * aspect);
  const height = pixelsToWorldUnits(rect.height, window.innerHeight, frustumSize);

  const geometry = new THREE.PlaneGeometry(width, height);

  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentshader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uTexture: { value: texture },
      uScroll: { value: 1.6 },
      uImageSize: { value: new THREE.Vector2(width, height) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }
  });

  // Calculate world position from DOM rect (centered)
  const x = ((rect.left + rect.width / 2) / window.innerWidth) * frustumSize * aspect - frustumSize * aspect / 2;
  const y = -(((rect.top + rect.height / 2) / window.innerHeight) * frustumSize - frustumSize / 2);

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(x, y, 0);

  scene.add(plane);
  Planes.push({ mesh: plane, material, img });
});


const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomParams = {
  bloomStrength: 0.8,
  bloomThreshold: 0.0,
  bloomRadius: 1.15
};
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  bloomParams.bloomStrength,
  bloomParams.bloomRadius,
  bloomParams.bloomThreshold
);
composer.addPass(bloomPass);



const clock = new THREE.Clock();
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  updatePositions();
  composer.render(); 
  // renderer.render(scene, camera);
}

animate();



function pixelsToWorldUnits(pixelSize, canvasSize, frustumSize) {
  return (pixelSize / canvasSize) * frustumSize;
}

function updatePositions() {
  Planes.forEach((plane, index) => {
    const img = images[index];
    const rect = img.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * frustumSize * aspect - frustumSize * aspect / 2;
    const y = -(((rect.top + rect.height / 2) / window.innerHeight) * frustumSize - frustumSize / 2);

   
    plane.mesh.position.set(x, y, 0);
  })
}

images.forEach((img,index)=>{

  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 60%",
      end: "bottom 25%",
      scrub: 1,
      // markers: true,
      onUpdate: (self) => {
        Planes[index].material.uniforms.uScroll.value = (0.5 - self.progress) * 2 * 1.6;
      }
    },
    // y: -1000,
    ease: "none"
  })

})
"use client";
import { useDarkMode } from "@contexts/AppContext";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const colorPaletteLight = ["#772aa1", "#2b30c2", "#662ba9", "#552cb0", "#482db6"];
const colorPaletteDark = ["#7accff", "#ffa8fd", "#97c4ff", "#bcbafe", "#ffa8fd"];

const getRandomFromRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Scene
const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Directional Light
const dirLight = new THREE.DirectionalLight(0xffffff, 0.25);

// Hemisphere Light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x808080);

// Light Holder Group
const lightHolder = new THREE.Group();

// Ambient Light
// const ambientLight = new THREE.AmbientLight(0xabdfff);

// Mess Array
const meshArray: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial>[] = [];

//Function Component
function Three() {
  // // Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // // Dark mode
  const { darkMode } = useDarkMode();

  // Color Palette
  const colorPalette = useMemo(() => {
    return darkMode ? colorPaletteLight : colorPaletteDark;
  }, [darkMode]);

  //Camera
  const camera = useMemo(() => {
    if (typeof window !== "undefined") {
      return new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight);
    }
    return null;
  }, []);

  // First Load
  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0, -1000);
      scene.add(camera);
    }
    dirLight.position.set(10, 10, 0);
    // lightHolder.add(hemiLight);
    lightHolder.add(dirLight);
    scene.add(lightHolder);
    scene.add(hemiLight);

    for (let i = 0; i < colorPalette.length; i++) {
      const color = colorPalette[i];
      const randomScale = getRandomFromRange(0.5, 1.5);
      const randomPositionX = getRandomFromRange(-12, 12);
      const randomPositionY = getRandomFromRange(-12, 12);
      const randomPositionZ = getRandomFromRange(-12, 12);
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(randomScale, randomScale, randomScale);
      mesh.position.set(randomPositionX, randomPositionY, randomPositionZ);
      meshArray.push(mesh);
      scene.add(mesh);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera]);

  // Render WEBGL
  useEffect(() => {
    let requestFrameID: number;
    // canvas
    const canvas = canvasRef.current;
    if (canvas && camera) {
      // WebGL renderer
      const webGLRenderer = new THREE.WebGLRenderer({ canvas, alpha: true });

      webGLRenderer.setSize(window.innerWidth, window.innerHeight);

      const render = () => {
        webGLRenderer.render(scene, camera);
      };

      // orbit controls
      const orbitControls = new OrbitControls(camera, canvas);
      orbitControls.enableRotate = true;
      orbitControls.autoRotate = true;
      orbitControls.enableZoom = true;
      orbitControls.autoRotateSpeed = 0.5;
      orbitControls.enablePan = false;
      orbitControls.enableDamping = true;
      orbitControls.dampingFactor = 0.05;

      const copyLight = () => {
        lightHolder.quaternion.copy(camera.quaternion);
      };
      orbitControls.addEventListener("change", copyLight);

      // animate
      const animate = () => {
        // request frame
        requestFrameID = requestAnimationFrame(animate);

        orbitControls.update();
        render();
      };
      animate();

      // window resize
      const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", resize);

      // component will unmount
      return () => {
        // cancel frame
        cancelAnimationFrame(requestFrameID);
        // dispose webgl
        webGLRenderer.dispose();
        // remove event listener
        orbitControls.removeEventListener("change", copyLight);
        window.removeEventListener("resize", resize);
      };
    }
  }, [camera]);

  // Change Color
  useEffect(() => {
    if (meshArray.length === 5) {
      for (let i = 0; i < meshArray.length; i++) {
        const color = colorPalette[i];
        meshArray[i].material.color.set(color);
      }
    }
  }, [colorPalette, darkMode]);

  // Render
  return (
    <>
      <canvas
        className="fixed top-0  left-0"
        ref={canvasRef}></canvas>
    </>
  );
}
export default Three;

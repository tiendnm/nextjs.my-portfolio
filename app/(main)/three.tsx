"use client";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { useDarkMode } from "@contexts/AppContext";

const colorPaletteLight = ["#772aa1", "#2b30c2", "#662ba9", "#552cb0", "#482db6"];
const colorPaletteDark = ["#7accff", "#ffa8fd", "#97c4ff", "#bcbafe", "#ffa8fd"];

const getRandomFromRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

function Three() {
  let meshArray: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial>[] = useMemo(
    () => [],
    []
  );
  // // Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // // Dark mode
  const { darkMode } = useDarkMode();

  // Color Palette
  const colorPalette = useMemo(() => {
    return darkMode ? colorPaletteLight : colorPaletteDark;
  }, [darkMode]);

  // Scene
  const scene = useMemo(() => {
    return new THREE.Scene();
  }, []);

  // Geometry
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(3, 64, 64);
  }, []);

  //camera
  const camera = useMemo(() => {
    if (typeof window !== "undefined") {
      return new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight);
    }
    return null;
  }, []);

  const dirLight = useMemo(() => {
    return new THREE.DirectionalLight(0xffffff, 0.25);
  }, []);

  const hemiLight = useMemo(() => {
    return new THREE.HemisphereLight(0xffffff, 0x808080);
  }, []);

  const lightHolder = useMemo(() => {
    return new THREE.Group();
  }, []);

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0, -700);
      scene.add(camera);
    }
    dirLight.position.set(10, 10, 0);
    lightHolder.add(hemiLight);
    lightHolder.add(dirLight);
    scene.add(lightHolder);

    // directional light

    // scene.add(dirLight);

    // hemisphere light

    // scene.add(hemiLight);

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
  }, []);

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
      orbitControls.enableZoom = false;
      orbitControls.autoRotateSpeed = 0.5;
      orbitControls.enablePan = false;
      const copyLight = () => {
        lightHolder.quaternion.copy(camera.quaternion);
      };
      orbitControls.addEventListener("change", copyLight);
      // drag controls
      // const dragControls = new DragControls([mesh1, mesh2, mesh3, mesh4], camera, canvas);
      // const dragStart = (event: THREE.Event) => {
      //   event.object.material.emissive.set(0xaaaaaa);
      // };
      // const dragEnd = (event: THREE.Event) => {
      //   event.object.material.emissive.set(0x000000);
      // };
      // dragControls.addEventListener("dragstart", dragStart);
      // dragControls.addEventListener("dragend", dragEnd);

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
        // dragControls.removeEventListener("dragstart", dragStart);
        // dragControls.removeEventListener("dragend", dragEnd);
        window.removeEventListener("resize", resize);
      };
    }
  }, [camera, dirLight, scene]);

  useEffect(() => {
    if (meshArray.length === 5) {
      for (let i = 0; i < meshArray.length; i++) {
        const color = colorPalette[i];
        meshArray[i].material.color.set(color);
      }
    }
  }, [colorPalette, darkMode, meshArray]);
  return (
    <>
      <canvas
        className="fixed top-0  left-0"
        ref={canvasRef}></canvas>
    </>
  );
}
export default memo(Three);

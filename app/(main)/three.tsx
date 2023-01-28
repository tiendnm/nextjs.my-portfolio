"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Three() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let req: any = null;
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const scene = new THREE.Scene();
    const geo = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: "orange",
    });
    const material2 = new THREE.MeshPhysicalMaterial({
      color: "pink",
    });
    const material3 = new THREE.MeshPhysicalMaterial({
      color: "purple",
    });
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(11, 11, 11);
    scene.add(mesh);

    const mesh2 = new THREE.Mesh(geo, material2);
    mesh2.position.set(0, -6, -6);
    scene.add(mesh2);

    const mesh3 = new THREE.Mesh(geo, material3);
    mesh3.position.set(-10, 9, -7);
    scene.add(mesh3);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(3, 10, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 2;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 2;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const camera = new THREE.PerspectiveCamera(2, canvasWidth / canvasHeight, 1, 10000);
    camera.position.set(700, 200, -500);
    scene.add(camera);

    const canvas = canvasRef.current;
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(canvasWidth, canvasHeight);
      renderer.render(scene, camera);
      const controls = new OrbitControls(camera, canvas);
      controls.enableRotate = false;
      controls.autoRotate = true;
      controls.rotateSpeed = 100;
      // controls.maxPolarAngle = (0.9 * Math.PI) / 2;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.enablePan = false;
      const animate = () => {
        req = requestAnimationFrame(animate);
        controls.update();

        renderer.render(scene, camera);
      };
      animate();
      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);
  return (
    <>
      <canvas
        className="fixed top-0  left-0"
        ref={canvasRef}></canvas>
    </>
  );
}
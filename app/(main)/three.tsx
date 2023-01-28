"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
export default function Three() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let req: any = null;
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const scene = new THREE.Scene();
    const geo = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#772aa1",
    });
    const material2 = new THREE.MeshPhysicalMaterial({
      color: "#2b30c2",
    });
    const material3 = new THREE.MeshPhysicalMaterial({
      color: "#7accff",
    });
    const material4 = new THREE.MeshPhysicalMaterial({
      color: "#ffa8fd",
    });
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(15, -8, -10);
    scene.add(mesh);

    const mesh2 = new THREE.Mesh(geo, material2);
    mesh2.position.set(-12, -2.5, -5);
    scene.add(mesh2);

    const mesh3 = new THREE.Mesh(geo, material3);
    mesh3.position.set(9, 2.5, 0);
    scene.add(mesh3);

    const mesh4 = new THREE.Mesh(geo, material4);
    mesh4.position.set(-10, 8, 10);
    scene.add(mesh4);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(0, 10, -10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 3;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 2;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x919090);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    const camera = new THREE.PerspectiveCamera(2, canvasWidth / canvasHeight, 1, 10000);
    camera.position.set(500, 100, -700);
    scene.add(camera);

    const canvas = canvasRef.current;
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(canvasWidth, canvasHeight);
      renderer.render(scene, camera);
      const render = () => {
        renderer.render(scene, camera);
      };

      const controls = new OrbitControls(camera, canvas);
      controls.enableRotate = false;
      controls.autoRotate = true;
      controls.enableZoom = false;
      controls.autoRotateSpeed = 2;
      controls.enablePan = false;

      const dragStart = (event: THREE.Event) => {
        event.object.material.emissive.set(0xaaaaaa);
      };
      const dragEnd = (event: THREE.Event) => {
        event.object.material.emissive.set(0x000000);
      };
      const controls2 = new DragControls([mesh, mesh2, mesh3, mesh4], camera, canvas);
      controls2.addEventListener("dragstart", dragStart);
      controls2.addEventListener("dragend", dragEnd);

      const animate = () => {
        req = requestAnimationFrame(animate);
        controls.update();
        render();
      };
      animate();
      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
        controls2.removeEventListener("dragstart", dragStart);
        controls2.removeEventListener("dragend", dragEnd);
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

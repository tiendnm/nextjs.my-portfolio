"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default function Three() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const geo = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: "red",
    });

    const mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600);
    camera.position.z = 20;
    scene.add(camera);
    const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(800, 600);
      renderer.render(scene, camera);
      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.autoRotate = true;
      const loop = () => {
        window.requestAnimationFrame(loop);
        controls.update();

        renderer.render(scene, camera);
      };
      loop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <canvas className="webgl"></canvas>
    </>
  );
}

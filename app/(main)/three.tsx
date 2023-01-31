"use client";
import { useDarkMode } from "@contexts/AppContext";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type SphereMesh = THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial>;

const colorPaletteLight = [
  "#72ddf7",
  "#8093f1",
  "#b388eb",
  "#f7aef8",
  "#fdc5f5",
  "#ff7bac",
];
const colorPaletteDark = [
  "#7400b8",
  "#5932e6",
  "#b332e6",
  "#8632e6",
  "#e032e6",
  "#111a6f",
];

const getRandomFromRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getObjectSize = (mesh: SphereMesh) => {
  const measure = new THREE.Vector3();
  const boundingBox = new THREE.Box3().setFromObject(mesh);
  const size = boundingBox.getSize(measure);
  return size;
};

// Scene
const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Directional Light
const dirLight = new THREE.DirectionalLight(0xffffff, 0.35);

// Hemisphere Light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x808080);

// Light Holder Group
const lightHolder = new THREE.Group();

//Camera
const camera =
  typeof window !== "undefined"
    ? new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight)
    : undefined;

if (camera) {
  camera.position.set(0, 0, -1000);
  scene.add(camera);
  dirLight.position.set(10, 10, 0);
  lightHolder.add(hemiLight);
  lightHolder.add(dirLight);
  scene.add(lightHolder);
}
// Mess Array
const meshArray: SphereMesh[] = [];

//Function Component
function Three() {
  // // Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // // Dark mode
  const { darkMode } = useDarkMode();

  // Color Palette
  const colorPalette = useMemo(() => {
    const pallete = darkMode ? colorPaletteDark : colorPaletteLight;
    return [...pallete];
  }, [darkMode]);

  // First Load
  useEffect(() => {
    for (let i = 0; i < colorPalette.length; i++) {
      // biến lưu trạng thái tìm thấy khoảng trống
      let foundSpace = false;

      // biến lưu trạng thái vật thể bị đè
      let overlapped = false;

      // chọn màu theo thứ tự trong color palette
      const color = colorPalette[i];

      // lọc ra những vật thể cũ;
      const oldMeshArray = meshArray.filter((value, index) => index < i);

      // sinh ra tỉ lệ ngẫu nhiên
      const randomScale = getRandomFromRange(0.5, 1.5);

      // khi chưa tìm thấy khoảng trống, thực thi lệnh
      while (!foundSpace) {
        // mặc định các vật thể không bị đè
        overlapped = false;

        // sinh ra vị trí ngẫu nhiên
        const randomPositionX = getRandomFromRange(-13, 13);
        const randomPositionY = getRandomFromRange(-13, 13);
        const randomPositionZ = getRandomFromRange(-13, 13);

        // kiếm tra nếu phát hiện có các vật thể cũ thì so sánh với vật thể hiện tại
        if (oldMeshArray.length > 0) {
          // so sánh thông số với các vật thể cũ, nếu đè lên nhau thì ngưng
          for (let k = 0; k < oldMeshArray.length; k++) {
            const oldMesh = oldMeshArray[k];

            // lấy thông số của vật thể cũ
            const oldMeshSize = getObjectSize(oldMesh);
            // đường kính vật thể cũ
            const oldMeshDiameter = oldMeshSize.x;

            // vị trí vật thể mới
            const newMeshPosition = new THREE.Vector3(
              randomPositionX,
              randomPositionY,
              randomPositionZ
            );

            // đường kính vật thể mới
            const newMeshDiameter = 6 * randomScale;

            // khoảng cách từ vật thể cũ đến vật thể mới
            const meshesDistance = newMeshPosition.distanceTo(oldMesh.position);

            // nếu khoảng cách từ 2 tâm bé hơn đường kính của 2 vật thể thì 2 vật thể đang đè lên nhau
            if (meshesDistance <= newMeshDiameter + oldMeshDiameter) {
              overlapped = true;
              break;
            }
          }
          // nếu chưa phát hiện trùng nhau thì đã tìm thấy khoảng trống
          if (!overlapped) {
            foundSpace = true;
          }
        } else {
          foundSpace = true;
        }

        // thực hiện thêm vật thể vào bối cảnh nếu như đã tìm thấy khoảng trống
        if (foundSpace) {
          const material = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0,
            roughness: 0,
          });
          material.color.convertSRGBToLinear();
          const mesh = new THREE.Mesh(geometry, material);
          mesh.scale.set(randomScale, randomScale, randomScale);
          mesh.position.set(randomPositionX, randomPositionY, randomPositionZ);
          meshArray.push(mesh);
          scene.add(mesh);
        }
      }
    }

    let requestFrameID: number;
    // canvas
    const canvas = canvasRef.current;
    if (canvas && camera) {
      // WebGL renderer
      const webGLRenderer = new THREE.WebGLRenderer({ canvas, alpha: true });

      webGLRenderer.setSize(window.innerWidth, window.innerHeight);
      webGLRenderer.outputEncoding = THREE.sRGBEncoding;
      // webGLRenderer.physicallyCorrectLights = true
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
  }, []);

  // Change Color
  useEffect(() => {
    if (meshArray.length === colorPalette.length) {
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

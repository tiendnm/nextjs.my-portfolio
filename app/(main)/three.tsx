"use client";
import { useDarkMode } from "@contexts/AppContext";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type SphereMesh = THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial>;

let requestFrameID: number;
const SPHERE_RADIUS: number = 3;
const SPHERES_COUNT: number = 7;
const MAX_SPACE: number = 20;
const MIN_SCALE: number = 0.8;
const MAX_SCALE: number = 1.8;

const LIGHT_COLOR_PALETTE: string[] = [
  "#72ddf7",
  "#8093f1",
  "#b388eb",
  "#f7aef8",
  "#fdc5f5",
  "#ff7bac",
];
const DARK_COLOR_PALETTE: string[] = [
  "#7400b8",
  "#5932e6",
  "#7d09ab",
  "#5300b3",
  "#661a69",
  "#111a6f",
];

const getRandomFromRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const getObjectSize = (mesh: SphereMesh): THREE.Vector3 => {
  const measure = new THREE.Vector3();
  const boundingBox = new THREE.Box3().setFromObject(mesh);
  const size = boundingBox.getSize(measure);
  return size;
};

const getRandomItemFromArray = (list: any[]): any => {
  return list[Math.floor(Math.random() * list.length)];
};

// Scene
const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.SphereGeometry(SPHERE_RADIUS, 64, 64);

// Light Holder Group
const lightHolder = new THREE.Group();

// Point light
const pointLight = new THREE.PointLight(0xffffff, 0.5, 0);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024; // default
pointLight.shadow.mapSize.height = 1024; // default
pointLight.position.set(20, 20, 10);

// Hemisphere Light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x808080, 1);

// Add lights to group
lightHolder.add(pointLight);
lightHolder.add(hemiLight);
scene.add(lightHolder);

//Camera
const camera =
  typeof window !== "undefined"
    ? new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight, 1, 10000)
    : undefined;

if (camera) {
  camera.position.set(0, 500, -1000);
  scene.add(camera);
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
    const pallete = darkMode ? DARK_COLOR_PALETTE : LIGHT_COLOR_PALETTE;
    return [...pallete];
  }, [darkMode]);

  // First Load
  useEffect(() => {
    for (let i = 0; i < SPHERES_COUNT; i++) {
      // biến lưu trạng thái tìm thấy khoảng trống
      let foundSpace = false;

      // biến lưu trạng thái vật thể bị đè
      let overlapped = false;

      // chọn màu ngẫu nhiên
      const color = getRandomItemFromArray(colorPalette);

      // lọc ra những vật thể cũ;
      const oldMeshArray = meshArray.filter((value, index) => index < i);

      // khi chưa tìm thấy khoảng trống, thực thi lệnh
      while (!foundSpace) {
        // mặc định các vật thể không bị đè
        overlapped = false;
        // sinh ra tỉ lệ ngẫu nhiên
        const randomScale = getRandomFromRange(MIN_SCALE, MAX_SCALE);
        // sinh ra vị trí ngẫu nhiên
        const randomX = getRandomFromRange(-MAX_SPACE, MAX_SPACE);
        const randomY = getRandomFromRange(-MAX_SPACE, MAX_SPACE);
        const randomZ = getRandomFromRange(-MAX_SPACE, MAX_SPACE);

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
            const newMeshPosition = new THREE.Vector3(randomX, randomY, randomZ);

            // đường kính vật thể mới
            const newMeshDiameter = SPHERE_RADIUS * 2 * randomScale;

            // khoảng cách từ vật thể cũ đến vật thể mới
            const meshesDistance = newMeshPosition.distanceTo(oldMesh.position);

            // nếu khoảng cách từ 2 tâm bé hơn đường kính của 2 vật thể thì 2 vật thể đang đè lên nhau
            if (meshesDistance <= newMeshDiameter + oldMeshDiameter) {
              overlapped = true;
              break;
            }
          }
        }
        // nếu chưa phát hiện trùng nhau thì đã tìm thấy khoảng trống
        if (!overlapped) {
          foundSpace = true;
        }
        // thực hiện thêm vật thể vào bối cảnh nếu như đã tìm thấy khoảng trống
        if (foundSpace) {
          const material = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0,
            roughness: 0,
            reflectivity: 1,
          });
          material.color.convertSRGBToLinear();
          const mesh = new THREE.Mesh(geometry, material);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.scale.set(randomScale, randomScale, randomScale);
          mesh.position.set(randomX, randomY, randomZ);
          meshArray.push(mesh);
          scene.add(mesh);
        }
      }
    }

    // canvas
    const canvas = canvasRef.current;
    if (canvas && camera) {
      // WebGL renderer
      const webGLRenderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      webGLRenderer.shadowMap.enabled = true;
      webGLRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
      webGLRenderer.setSize(window.innerWidth, window.innerHeight);
      webGLRenderer.outputEncoding = THREE.sRGBEncoding;
      const render = () => {
        webGLRenderer.render(scene, camera);
      };

      // orbit controls
      const orbitControls = new OrbitControls(camera, canvas);
      orbitControls.enableRotate = true;
      orbitControls.autoRotate = true;
      orbitControls.enableZoom = false;
      orbitControls.autoRotateSpeed = 1;
      orbitControls.enablePan = false;
      orbitControls.enableDamping = true;
      orbitControls.dampingFactor = 0.05;

      const copyLight = () => {
        lightHolder.quaternion.copy(camera.quaternion);
        // console.log(trackballControls.object.position);
      };
      orbitControls.addEventListener("change", copyLight);
      // animate
      const animate = () => {
        // request frame
        requestFrameID = requestAnimationFrame(animate);
        // helper.update();
        orbitControls.update();

        render();
      };
      animate();
      copyLight();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change Color
  useEffect(() => {
    if (meshArray.length === SPHERES_COUNT) {
      hemiLight.color.set(darkMode ? 0x351a68 : 0xffc8dd);
      hemiLight.groundColor.set(darkMode ? 0x061445 : 0x9c6fa6);
      for (let i = 0; i < meshArray.length; i++) {
        const color = getRandomItemFromArray(colorPalette);
        meshArray[i].material.color.set(color);
      }
    }
  }, [colorPalette, darkMode]);

  // Render
  return (
    <canvas
      className="fixed top-0  left-0"
      ref={canvasRef}></canvas>
  );
}
export default Three;

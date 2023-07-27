import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ModelViewer = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // Créer une scène, une caméra et un rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Charger le modèle 3D
    const loader = new THREE.GLTFLoader();
    loader.load("chemin/vers/votre/modele.gltf", (gltf) => {
      modelRef.current = gltf.scene;
      scene.add(gltf.scene);

      // Vous pouvez ajuster la position, l'échelle et la rotation du modèle ici si nécessaire
      // gltf.scene.position.set(x, y, z);
      // gltf.scene.scale.set(scale, scale, scale);
      // gltf.scene.rotation.set(rx, ry, rz);
    });

    // Ajouter des lumières si nécessaire
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Gérer le redimensionnement de la fenêtre
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation du rendu 3D en fonction de la souris
    const animate = () => {
      requestAnimationFrame(animate);

      // Récupérer la position de la souris (entre -1 et 1)
      const mouseX = (window.event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (window.event.clientY / window.innerHeight) * 2 - 1;

      // Faire tourner le modèle en fonction de la position de la souris
      if (modelRef.current) {
        modelRef.current.rotation.y = mouseX;
        modelRef.current.rotation.x = mouseY;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Nettoyer les écouteurs d'événements lors du démontage du composant
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ModelViewer;

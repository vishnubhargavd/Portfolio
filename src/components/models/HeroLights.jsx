import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="#00d9ff"
    />

    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#00d9ff"
    />

    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#ff4500"
    />

    <primitive
      object={new THREE.RectAreaLight("#ffb347", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    <pointLight position={[0, 1, 0]} intensity={10} color="#ff7b00" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#ff3d00" />
  </>
);

export default HeroLights;

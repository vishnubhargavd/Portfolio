import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024)" });
  const isPhone = useMediaQuery({ query: "(max-width:768)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 5}
      />
      <HeroLights />
      <Particles count={100}/>
      <group
        scale={isPhone ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};
export default HeroExperience;

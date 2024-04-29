import { useGLTF } from '@react-three/drei';
import bgbgitled from '../assets/3d/bgbgitled.glb';

export const Background = () => {
  const { nodes, materials } = useGLTF(bgbgitled);
  return (
    <group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[50000, 49999.992, 49999.992]}
        />
      </group>
    </group>
  );
};

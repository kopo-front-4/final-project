import { useGLTF } from "@react-three/drei";
// @ts-expect-error
import backgroundFinal from "../assets/3d/backgroundFinal.glb";

export const Background = () => {
  const { nodes, materials } = useGLTF(backgroundFinal);
  return (
    <group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[50000, 49999.992, 49999.992]}
        />
      </group>
    </group>
  );
};

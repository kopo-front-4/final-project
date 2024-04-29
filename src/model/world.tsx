import { Dispatch, SetStateAction, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import final from "../assets/3d/final.glb";
import { useFrame } from "@react-three/fiber";

interface WorldProps {
  hover: number;
  setHover: Dispatch<SetStateAction<number>>;
  isSouthHemisphere: boolean;
  setVisited: Dispatch<SetStateAction<Array<boolean>>>;
}

export const World: React.FC<WorldProps> = ({
  hover,
  setHover,
  isSouthHemisphere,
  setVisited,
}) => {
  const { nodes, materials } = useGLTF(final);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef(null); // 지구본
  const katamariRef = useRef(null); // 총운
  const coinRef = useRef(null); // 재물운
  const heartRef = useRef(null); // 연애운
  const buildingRef = useRef(null); // 사업운
  const healthPackRef = useRef(null); // 건강운
  const bookRef = useRef(null); // 학업운

  useFrame((_, delta) => {
    // @ts-expect-error 타입스크립트는 몰라유~ 무조건 있음
    if (isSouthHemisphere && ref.current.rotation.z < Math.PI - 0.2)
      ref.current.rotation.z += delta * 2;
    // @ts-expect-error 타입스크립트는 몰라유~ 무조건 있음
    if (!isSouthHemisphere && ref.current.rotation.z > 0.2)
      ref.current.rotation.z -= delta * 2;

    coinRef.current.rotation.z += delta;
    heartRef.current.rotation.z += delta;
    // buildingRef.current.rotation.z += delta;
    healthPackRef.current.rotation.z += delta;
    bookRef.current.rotation.z += delta;
  });

  const handlePointerOver = (name: string) => {
    let idx = 0;
    if (name === "KATAMARI") idx = 0;
    if (name === "COIN") idx = 1;
    if (name === "HEART") idx = 2;
    if (name === "BUILDING") idx = 3;
    if (name === "HEALTH_PACK") idx = 4;
    if (name === "BOOK") idx = 5;

    setHover(idx);

    setVisited((cur) => {
      let _cur = cur;
      _cur[idx] = true;
      return _cur;
    });
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    setHover(-1);
    document.body.style.cursor = "unset";
  };

  return (
    <>
      <group dispose={null} ref={ref} scale={1.5}>
        {/* Building */}
        <group
          position={[0, 0, -0.041]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerOver={() => handlePointerOver("BUILDING")}
          onPointerOut={() => handlePointerOut()}
          ref={buildingRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cube004.geometry}
            material={materials.Red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cube004_1.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube003.geometry}
          material={materials.LightBrown}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials.Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_1.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_2.geometry}
            material={materials.Snow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_3.geometry}
            material={materials.Brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_4.geometry}
            material={materials.DarkGreen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_Icosphere002.geometry}
          material={materials.White}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_Icosphere003.geometry}
          material={materials.White}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_Icosphere004.geometry}
          material={materials.White}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_Icosphere005.geometry}
          material={materials.White}
          rotation={[Math.PI / 2, 0, 0]}
        />
        {/* Health Pack */}
        <group
          position={[0.32, -9.865, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={() => handlePointerOver("HEALTH_PACK")}
          onPointerOut={() => handlePointerOut()}
          ref={healthPackRef}
        >
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group
              position={[-32.694, 865.294, -17.149]}
              rotation={[1.63, 0, 0]}
              scale={3}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material008_0.geometry}
                material={materials["Material.008"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material021_0.geometry}
                material={materials["Material.021"]}
              />
            </group>
          </group>
        </group>
        {/* Book Mesh */}
        <group
          onPointerOver={() => handlePointerOver("BOOK")}
          onPointerOut={() => handlePointerOut()}
          ref={bookRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["Material.001"]}
            position={[0, 0, 1.182]}
            scale={[0.07, 0.01, 0.091]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.003"]}
            position={[0, -0.01, 1.182]}
          />
        </group>

        {/* Coin Mesh */}

        <mesh
          ref={coinRef}
          onPointerOver={() => handlePointerOver("COIN")}
          onPointerOut={() => handlePointerOut()}
          castShadow
          receiveShadow
          geometry={nodes.Coin.geometry}
          material={materials.Gold}
          position={[0.706, 0.893, -0.167]}
          rotation={[-0.259, -0.254, -0.757]}
          scale={0.1}
        />

        {/* Heart Mesh */}
        <mesh
          ref={heartRef}
          castShadow
          receiveShadow
          onPointerOver={() => handlePointerOver("HEART")}
          onPointerOut={() => handlePointerOut()}
          geometry={nodes.Plane001.geometry}
          material={materials["Material.004"]}
          position={[-1.077, 0.17, 0]}
          rotation={[-1.801, 1.538, -2.913]}
          scale={0.03}
        />
      </group>
    </>
  );
};

useGLTF.preload(final);

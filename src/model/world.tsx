import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import worldFinal2 from "../assets/3d/worldFinal2.glb";
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
  const { nodes, materials } = useGLTF(worldFinal2);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef(null); // 지구본
  const treeRef = useRef(null); // 총운
  const coinRef = useRef(null); // 재물운
  const heartRef = useRef(null); // 연애운
  const buildingRef = useRef(null); // 사업운
  const healthPackRef = useRef(null); // 건강운
  const bookRef = useRef(null); // 학업운

  useFrame((_, delta) => {
    // @ts-expect-error 타입스크립트는 몰라유~ 무조건 있음
    if (isSouthHemisphere && ref.current.rotation.z < Math.PI - 0.2)
      ref.current.rotation.z += delta * 2;
    // @ts-exp`ect-error 타입스크립트는 몰라유~ 무조건 있음
    if (!isSouthHemisphere && ref.current.rotation.z > 0.2)
      ref.current.rotation.z -= delta * 2;

    coinRef.current.rotation.z += delta;
    heartRef.current.rotation.z += delta;
  });

  const handlePointerOver = (name: string) => {
    let idx = 0;
    if (name === "TREE") idx = 0;
    if (name === "COIN") idx = 1;
    if (name === "HEART") idx = 2;
    if (name === "BUILDING") idx = 3;
    if (name === "HEALTH_PACK") idx = 4;
    if (name === "BOOK") idx = 5;

    if (idx == 2) console.log("하또");
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
    <group ref={ref} scale={1.5}>
      <group name="Scene">
        {/* Building */}
        <group
          name="Building"
          ref={buildingRef}
          onPointerOver={() => handlePointerOver("BUILDING")}
          onPointerOut={() => handlePointerOut()}
          position={[-0.334, 0.053, 0.264]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.468}
        >
          <mesh
            name="Cube001_Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cube004.geometry}
            material={materials.Red}
          />
          <mesh
            name="Cube001_Cube004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cube004_1.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          name="Cube_Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube003.geometry}
          material={materials.LightBrown}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="Earth" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Icosphere001"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials.Blue}
          />
          <mesh
            name="Icosphere001_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_1.geometry}
            material={materials.Green}
          />
          <mesh
            name="Icosphere001_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_2.geometry}
            material={materials.Snow}
          />
          <mesh
            name="Icosphere001_3"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_3.geometry}
            material={materials.Brown}
          />
          <mesh
            name="Icosphere001_4"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_4.geometry}
            material={materials.DarkGreen}
          />
        </group>
        <mesh
          name="Cloud001"
          castShadow
          receiveShadow
          geometry={nodes.Cloud001.geometry}
          material={materials.White}
          position={[-0.006, -0.571, 0.448]}
          rotation={[-0.076, -0.832, -1.569]}
          scale={0.754}
        />
        <mesh
          name="Cloud002"
          castShadow
          receiveShadow
          geometry={nodes.Cloud002.geometry}
          material={materials.White}
          position={[-0.795, -1.184, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cloud003"
          castShadow
          receiveShadow
          geometry={nodes.Cloud003.geometry}
          material={materials.White}
          position={[-0.285, -0.437, -0.111]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.794}
        />
        <mesh
          name="Cloud004"
          castShadow
          receiveShadow
          geometry={nodes.Cloud004.geometry}
          material={materials.White}
          position={[-0.152, -0.131, -0.313]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.807}
        />

        <group
          name="Healthpack"
          ref={healthPackRef}
          onPointerOver={() => handlePointerOver("HEALTH_PACK")}
          onPointerOut={() => handlePointerOut()}
          position={[0.32, -9.865, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="9bab33231bcd4c598399d63f692701a4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="Cube003"
                position={[-33.304, 846.051, 39.473]}
                rotation={[1.511, -0.001, -3.12]}
                scale={5.046}
              >
                <mesh
                  name="HealthPack002"
                  castShadow
                  receiveShadow
                  geometry={nodes.HealthPack002.geometry}
                  material={materials["Material.006"]}
                />
                <mesh
                  name="HealthPack003"
                  castShadow
                  receiveShadow
                  geometry={nodes.HealthPack003.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="HealthPack004"
                  castShadow
                  receiveShadow
                  geometry={nodes.HealthPack004.geometry}
                  material={materials["Material.021"]}
                />
                <mesh
                  name="HealtPack001"
                  castShadow
                  receiveShadow
                  geometry={nodes.HealtPack001.geometry}
                  material={materials["Material.002"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          ref={bookRef}
          onPointerOver={() => handlePointerOver("BOOK")}
          onPointerOut={() => handlePointerOut()}
        >
          <mesh
            name="Bookinner001"
            castShadow
            receiveShadow
            geometry={nodes.Bookinner001.geometry}
            material={materials["Material.001"]}
            position={[-0.28, -0.237, 1.261]}
            rotation={[-1.498, -0.116, -1.004]}
            scale={[0.094, 0.024, 0.122]}
          />
          <mesh
            name="Book001"
            castShadow
            receiveShadow
            geometry={nodes.Book001.geometry}
            material={materials["Material.003"]}
            position={[-0.3, -0.24, 1.273]}
            rotation={[-1.498, -0.116, -1.004]}
            scale={[1.35, 2.504, 1.35]}
          />
        </group>
        <mesh
          name="Coin"
          ref={coinRef}
          onPointerOver={() => handlePointerOver("COIN")}
          onPointerOut={() => handlePointerOut()}
          castShadow
          receiveShadow
          geometry={nodes.Coin.geometry}
          material={materials.Gold}
          position={[1.16, 0.643, 0.132]}
          rotation={[0.052, -0.254, -0.757]}
          scale={0.158}
        />
        <mesh
          name="Hearth001"
          ref={heartRef}
          onPointerOver={() => handlePointerOver("HEART")}
          onPointerOut={() => handlePointerOut()}
          castShadow
          receiveShadow
          geometry={nodes.Hearth001.geometry}
          material={materials["Material.004"]}
          position={[-1.217, 0.133, -0.006]}
          rotation={[-1.801, 1.538, -2.913]}
          scale={0.064}
        />
        <group
          ref={treeRef}
          onPointerOver={() => handlePointerOver("TREE")}
          onPointerOut={() => handlePointerOut()}
          name="Tree"
          position={[-0.644, 0.992, 0.952]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.356}
        >
          <group name="Root">
            <group
              name="Armature"
              position={[0.971, 0.898, -0.882]}
              rotation={[0.86, 0.568, 1.692]}
              scale={0.661}
            >
              <group name="tree" />
              <skinnedMesh
                name="tree_0"
                geometry={nodes.tree_0.geometry}
                material={materials.wood}
                skeleton={nodes.tree_0.skeleton}
              />
              <primitive object={nodes.Armature_rootJoint} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

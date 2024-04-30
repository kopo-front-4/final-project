export function Model(props) {
  const { nodes, materials } = useGLTF("/world-final.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.604}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-12.684, 39.086, -1.418]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.green}
              position={[11.874, -37.573, 3.124]}
              rotation={[-0.212, 1.045, 1.018]}
              scale={0.019}
            />
          </group>
          <group position={[-4.136, 6.268, 0.637]} scale={0.24}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.trunk}
              position={[15.126, -20.84, 2.247]}
              rotation={[-0.212, 1.045, 1.018]}
              scale={0.081}
            />
          </group>
        </group>
      </group>
      <group
        position={[-0.334, 0.053, 0.264]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.468}
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
          geometry={nodes.Icosphere001.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials.Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials.Snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_3.geometry}
          material={materials.Brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_4.geometry}
          material={materials.DarkGreen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001_Icosphere002.geometry}
        material={materials.White}
        position={[0.002, -0.89, 0.17]}
        rotation={[1.595, -1.232, -0.002]}
        scale={0.754}
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
        position={[-0.285, -0.437, -0.111]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.794}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004_Icosphere005.geometry}
        material={materials.White}
        position={[-0.152, -0.131, -0.313]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.807}
      />
      <group position={[0.32, -9.865, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-33.378, 846.839, -17.149]}
            rotation={[1.63, 0, 0]}
            scale={5.046}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[-0.29, -0.227, 1.267]}
        scale={[0.094, 0.024, 0.122]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.003"]}
        position={[-0.29, -0.251, 1.267]}
        scale={[1.35, 2.504, 1.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coin.geometry}
        material={materials.Gold}
        position={[0.79, 0.93, -0.261]}
        rotation={[-0.259, -0.254, -0.757]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.004"]}
        position={[-1.217, 0.133, -0.006]}
        rotation={[-1.801, 1.538, -2.913]}
        scale={0.064}
      />
    </group>
  );
}

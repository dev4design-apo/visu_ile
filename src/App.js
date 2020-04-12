import * as THREE from "three";
import { ObjectLoader } from "three";

import ReactDOM from "react-dom";
import "./styles.css";
import logo from "../public/images/ile01.png";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame
} from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import phare from "../public/3D/ileali.obj";
//import React, { Suspense } from "react";
import React, { Suspense, useRef, useMemo } from "react";

extend({ OrbitControls });

const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

const Model = ({}) => {
  const model = useRef();
  const toto = "../public/3D/bunny.obj";
  const loader = useLoader(OBJLoader, "../public/3D/bunny.obj");
  //const loader = useMemo(() => new THREE.ObjectLoader().load(toto), [toto]);
  return <primitive object={loader} ref={model} />;
};

const glowMaterial = new THREE.MeshBasicMaterial({
  color: new THREE.Color("lightblue")
});

const Drone = React.memo(({ data }) => {
  //const { clock } = useStore(state => state.mutation)
  const gltf = useLoader(OBJLoader, "../public/3D/bunny.obj");
  const ref = useRef();

  useFrame(() => {
    //const r = Math.cos((clock.getElapsedTime() / 2) * data.speed) * Math.PI
    //ref.current.position.copy(0.001);
    //ref.current.rotation.set(r, r, r);
  });
  return (
    <group ref={ref} scale={[2, 2, 2]}>
      <mesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        material={glowMaterial}
      >
        <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 100, 4]} />
      </mesh>
      <mesh
        name="Sphere_DroneGlowmat_0"
        material={glowMaterial}
        scale={[10, 10, 10]}
      >
        <primitive object={gltf} />
      </mesh>
    </group>
  );
});

const Scene = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  return (
    <>
      <Cube />

      <orbitControls args={[camera, domElement]} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Her is my work!</h1>
      <Canvas>
        <Suspense fallback={<Cube />}>
          <Scene />
          <Drone />
        </Suspense>
      </Canvas>
      <h2>I make some magic happen!</h2>
    </div>
  );
}

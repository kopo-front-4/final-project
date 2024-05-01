import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Dispatch, SetStateAction, useRef } from 'react';
import { Spherical } from 'three';

interface CustomOrbitControlsProps {
  phi: number;
  theta: number;
  isMoving: boolean;
  setIsMoving: Dispatch<SetStateAction<boolean>>;
}

export const CustomOrbitControls: React.FC<CustomOrbitControlsProps> = ({ phi, theta, isMoving, setIsMoving }) => {
  // @ts-expect-error 타입스크립트는 몰라유~
  const ref = useRef<OrbitControls>(null);

  useFrame((_, delta) => {
    const spherical = new Spherical();
    spherical.radius = ref.current.getDistance();
    spherical.phi = ref.current.getPolarAngle();
    spherical.theta = ref.current.getAzimuthalAngle();
    if (!isMoving) return;

    let count = 0;

    if (Math.abs(spherical.theta - theta) > 0.15) {
      if (spherical.theta < theta) spherical.theta += delta;
      else spherical.theta -= delta;
    } else {
      count++;
    }

    if (Math.abs(spherical.phi - phi) > 0.15) {
      if (spherical.phi < phi) spherical.phi += delta;
      else spherical.phi -= delta;
    } else {
      count++;
    }

    if (count === 2) setIsMoving(false);

    ref.current.object.position.setFromSpherical(spherical);
  });

  return <OrbitControls ref={ref} autoRotate={true} enableRotate={!isMoving} autoRotateSpeed={0.5} />;
};

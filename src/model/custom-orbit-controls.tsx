import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useRef } from "react";
import { Spherical } from "three";

interface CustomOrbitControlsProps {
  phi: number;
  theta: number;
  isMoving: boolean;
  setIsMoving: Dispatch<SetStateAction<boolean>>;
}

export const CustomOrbitControls: React.FC<CustomOrbitControlsProps> = ({
  phi,
  theta,
  isMoving,
  setIsMoving,
}) => {
  // @ts-expect-error 타입스크립트는 몰라유~
  const ref = useRef<OrbitControls>(null);

  useFrame(() => {
    if (!isMoving) return;
    const spherical = new Spherical();
    // spherical.radius = ref.current.getDistance();
    spherical.radius = 5;
    spherical.phi = ref.current.getPolarAngle();
    spherical.theta = ref.current.getAzimuthalAngle();

    let count = 0;

    if (Math.abs(spherical.theta - theta) > 0.3) {
      if (spherical.theta < theta) spherical.theta += 0.02;
      else spherical.theta -= 0.02;
    } else {
      count++;
    }

    if (Math.abs(spherical.phi - phi) > 0.3) {
      if (spherical.phi < phi) spherical.theta += 0.02;
      else spherical.phi -= 0.02;
    } else {
      count++;
    }

    if (count === 2) setIsMoving(false);

    ref.current.object.position.setFromSpherical(spherical);

    // TODO theta 계산하자

    // 0.5 3.14로 가는 가장 빠른 방밥
    // 0.5 -> 3.14
    // 부호가 같다면 정직하게 가는 것이 가장 빠름
    // 부호가 다르다면 더 정직하게 가는 것이 가장 빠르지 않을 수도 있음
    // 3.0에서 -3.14로 가는 것은
    // 3 -> 0 -> -3.14가 아니다
    // 3 -> 3.14 -> -3.14이다.
    // 부호가 다르다면
    // 정직하게 가능 방법  Math.abs(spherical.theta) + Math.abs(theta)
    // 정직하지 않은 방법 ( PI - Math.abs(spherical.theta) ) + ( PI - Math.abs(theta) )
    // 즉 2PI - Math.abs(spherical.theta) - Math.abs(theta)
    // 비교 Math.abs(spherical.theta) + Math.abs(theta) > 2PI - Math.abs(spherical.theta) - Math.abs(theta)
    // Math.abs(spherical.theta) + Math.abs(spherical.theta) + Math.abs(theta) + Math.abs(theta) > 2PI
    // Math.abs(spherical.theta) + Math.abs(theta) > PI
    //
  });

  return (
    <OrbitControls
      ref={ref}
      autoRotate={true}
      enableRotate={!isMoving}
      autoRotateSpeed={0.5}
    />
  );
};

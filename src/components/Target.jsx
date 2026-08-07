import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) return;

    const t1 = gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
    return () => t1.kill();
  }, []);

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Tripod Stand Legs */}
      <mesh position={[-0.45, -1.2, 0]} rotation={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.04, 0.04, 2.4, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.45, -1.2, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.04, 0.04, 2.4, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.2, -0.6]} rotation={[-0.25, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2.4, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Target Board Outer Rim & Backer */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.12, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
      </mesh>

      {/* Bullseye Rings */}
      {/* Outer Red Ring */}
      <mesh position={[0, 0, 0.07]}>
        <circleGeometry args={[1.15, 32]} />
        <meshStandardMaterial color="#ef4444" roughness={0.4} />
      </mesh>
      {/* White Ring */}
      <mesh position={[0, 0, 0.08]}>
        <circleGeometry args={[0.92, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.4} />
      </mesh>
      {/* Red Ring */}
      <mesh position={[0, 0, 0.09]}>
        <circleGeometry args={[0.69, 32]} />
        <meshStandardMaterial color="#ef4444" roughness={0.4} />
      </mesh>
      {/* White Ring */}
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[0.46, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.4} />
      </mesh>
      {/* Center Bullseye Gold */}
      <mesh position={[0, 0, 0.11]}>
        <circleGeometry args={[0.23, 32]} />
        <meshStandardMaterial color="#eab308" metalness={0.3} roughness={0.3} />
      </mesh>
    </group>
  );
};

export default Target;

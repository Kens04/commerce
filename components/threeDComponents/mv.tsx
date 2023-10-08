'use client';

import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

export const Mv = () => {
  return (
    <Text3D
      bevelEnabled
      bevelThickness={0.5}
      bevelSize={0.1}
      font={'fonts/Inter-Bold.ttf'}
      rotation-y={THREE.MathUtils.degToRad(30)}
      position={[-8, 0, -5]}
      size={4}
      bevelSegments={10}
    >
      Farmlys
      <meshStandardMaterial color={'#a1bb6f'} />
    </Text3D>
  );
};

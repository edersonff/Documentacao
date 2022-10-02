/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Chicara.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cilindro001.geometry} material={materials['Material.001']} scale={[1.7, 1.7, 1.7]} />
    </group>
  )
}

useGLTF.preload('/Chicara.glb')
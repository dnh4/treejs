import React from "react";
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
const filePath = './Environnement/Tree.fbx'
function Scene() {
  const fbx = useLoader(FBXLoader,filePath)
  return <primitive object={fbx} />
}

export default Scene;
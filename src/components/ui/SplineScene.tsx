import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
};

export default SplineScene;

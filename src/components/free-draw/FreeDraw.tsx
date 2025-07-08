import { useRef, useState } from 'react';
import type { TouchEvent } from 'react';
import { FreeDrawProps } from './PropsType';

const styleSheet: any = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  touchAction: 'none',
};

const FreeDraw = (props: FreeDrawProps) => {
  const {
    strokeColor = '#000',
    strokeWidth = 3,
    backgroundColor = 'transparent',
    onDrawStart,
    onDrawMove,
    onDrawEnd,
  } = props;

  const [pathData, setPathData] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  const handleMouseDown = (e: TouchEvent<SVGSVGElement>) => {
    setIsDrawing(true);
    const p = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setPathData(`M${p.x},${p.y}`);
    onDrawStart?.(e);
  };
  
  const handleMouseMove = (e: TouchEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (!isDrawing) return;
    const p = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setPathData(`${pathData} L${p.x},${p.y}`);
    onDrawMove?.(e);
  };
  
  const handleMouseUp = (e: TouchEvent<SVGSVGElement>) => {
    setIsDrawing(false);
    onDrawEnd?.(e, pathRef.current?.getBoundingClientRect());
  };

  return (
    <svg
      style={{
        ...styleSheet,
        backgroundColor,
      }}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      >
      <path
        ref={pathRef}
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default FreeDraw;

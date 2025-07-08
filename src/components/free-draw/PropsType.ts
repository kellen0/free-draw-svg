import type { TouchEvent } from 'react';

export interface FreeDrawProps {
  /** 线条颜色 */
  strokeColor?: string;
  /** 线条宽度 */
  strokeWidth?: number;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 开始绘制事件 */
  onDrawStart?: (e?: TouchEvent<SVGSVGElement>) => void;
  /** 滑动绘制事件 */
  onDrawMove?: (e?: TouchEvent<SVGSVGElement>) => void;
  /** 结束绘制事件 */
  onDrawEnd?: (e?: TouchEvent<SVGSVGElement>, clientRect?: DOMRect) => void;
  /** 挂载父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
}

export type FreeDrawInstance = (opts: FreeDrawProps) => ({
  /** 清除当前绘制 */
  clear: () => void;
});

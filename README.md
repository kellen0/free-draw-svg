# FreeDraw 一个基于svg的移动端react自定义画图工具

## 介绍

前端绘画工具，可以在屏幕上自由绘画。

## 使用

### 基础用法
```tsx
import { FreeDraw } from 'free-draw-svg';

const App = () => {
  const clear = FreeDraw({
    strokeColor: 'red',
  });

  setTimeout(() => {
    clear.clear();
  }, 5000);
  return (
    <></>
  );
};
```

### 自定义线条颜色、宽度和背景
```tsx
const clear = FreeDraw({
  strokeColor: 'red',
  strokeWidth: 5,
  backgroundColor: 'rgba(0, 0, 0, .5)',
});
```

### 清除绘制
```tsx
const clear = FreeDraw({
  strokeColor: 'red',
  strokeWidth: 5,
});

setTimeout(() => {
  clear.clear();
}, 5000);
```

## API

### 方法
| 参数 | 说明 | 类型 | 返回值 |
| --- | --- | --- | --- |
| FreeDraw | 绘图 | _(opts: FreeDrawProps) => ({clear: () => void;})_ | `{clear: () => void;}` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| strokeColor | 线条颜色 | _string_ | `#000` |
| strokeWidth | 线条宽度 | _number_ | `3` |
| backgroundColor | 背景颜色 | _string_ | `transparent` |
| zIndex | 指定层级 | _number_ | `9999` |
| teleport | 指定挂载的节点 | _HTMLElement\|(() => HTMLElement)_ | body |

### Events

| 事件名           | 说明                       | 回调参数       |
| ---------------- | -------------------------- | -------------- |
| onDrawStart      | 点击屏幕开始绘画触发          | _event: Event_ |
| onDrawMove       | 滑动绘制时触发               | -event: Event  |
| onDrawEnd        | 结束绘制事件                 | (event: Event, clientRect: DOMRect) |

### 类型定义

组件导出以下类型定义：

```ts
import type { FreeDrawProps, FreeDrawInstance } from 'free-draw-svg';
```

import { JSX } from 'react';
import ReactDOM from 'react-dom/client';

export const render = (Comp: () => JSX.Element, container: HTMLElement) => {
  const root = ReactDOM.createRoot(
    container as HTMLElement,
  );

  root.render(
    Comp(),
  );
};

import { useEffect } from 'react';
import { render } from './render';
import FreeDraw from './FreeDraw';
import { FreeDrawProps, FreeDrawInstance } from './PropsType';

function resolveContainer(
  getContainer: HTMLElement | (() => HTMLElement) | undefined,
): HTMLElement {
  const container =
    typeof getContainer === 'function' ? getContainer() : getContainer;
  return container || document.body;
}

const removeContainer = (container: HTMLElement) => {
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
  }
};

const FreeDrawObj: FreeDrawInstance = (p: FreeDrawProps) => {
  const { teleport } = p;

  const container = document.createElement('div');
  const bodyContainer = resolveContainer(teleport);
  bodyContainer.appendChild(container);

  useEffect(() => {
    render(() => (<FreeDraw {...p} />), container);
  }, []);


  return {
    clear: () => {
      removeContainer(container);
    },
  };
};

export default FreeDrawObj;

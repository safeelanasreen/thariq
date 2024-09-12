import { useRef } from "react";
import useIsInViewport from "../../logics/useIsInViewPort";
const useAnimate = ({ options }) => {
  const elementRef = useRef(null);
  const optionsProps = {
    threshold: 0.18,
    ...options,
  };
  const intersecting = useIsInViewport(elementRef, { ...optionsProps }, false);

  const animationClass = intersecting ? "visible" : "";

  return {
    elementRef,
    animationClass,
  };
};

export default useAnimate;

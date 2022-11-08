import { useEffect, useRef } from "react";

//Custom hook by Dan Abramov
export const useInterval = (callback, delay) => {
  const savedCallBack = useRef();

  //Remember the latest callback
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  //Set up the interval
  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }
    if(delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};

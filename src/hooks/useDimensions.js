import { useEffect, useState } from 'react';


function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export default function useDimensions() {
  const [size, setSize] = useState(getWindowSize())

  useEffect(() => {
    function setWindowSize() {
      setSize(getWindowSize());
    }

    window.addEventListener('resize', setWindowSize);
    return () => {
      window.removeEventListener('resize', setWindowSize);
    }
  }, [])

  return size;
}
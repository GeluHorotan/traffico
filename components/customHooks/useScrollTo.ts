import { useEffect } from 'react';

type Params = {
  refElement?: RefObject<HTMLDivElement>;
};

function useScrollTo(refElement: Params) {
  const element = refElement.current;

  const handleScroll = () => {
    if (element !== null) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return [element];
}

export default useScrollTo;

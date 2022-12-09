import { useEffect, useState } from 'react';

function useMediaQuery(mediaQueryString: string): boolean {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = () => setMatches(!!mediaQueryList.matches);
    mediaQueryList.addListener(listener);

    // Call the listener() function immediately to set the local
    // state as soon as possible.
    listener();

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, [mediaQueryString]);

  // @ts-ignore: Unreachable code error
  return matches;
}

export default useMediaQuery;

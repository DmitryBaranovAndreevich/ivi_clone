import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../service/constans';

function useAppMediaQuery() {
  const isSmallDesktop = useMediaQuery({
    query: mediaQuery.$smallDesktop,
  });
  const isTablet = useMediaQuery({
    query: mediaQuery.$phones,
  });

  return { isSmallDesktop, isTablet };
}

export default useAppMediaQuery;

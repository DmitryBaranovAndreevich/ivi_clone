import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../service/constans';

function useAppMediaQuery() {
  const isDesktop = useMediaQuery({
    query: mediaQuery.$smallDesktop,
  });
  const isSmallDesktop = useMediaQuery({
    query: mediaQuery.$laptop,
  });
  const isLaptop = useMediaQuery({
    query: mediaQuery.$tablets,
  });
  const isTablet = useMediaQuery({
    query: mediaQuery.$phones,
  });

  return { isDesktop, isSmallDesktop, isTablet, isLaptop };
}

export default useAppMediaQuery;

import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../service/constans';

function useAppMediaQuery() {
  const isTablet = useMediaQuery({
    query: mediaQuery.$phones,
  });

  return { isTablet };
}

export default useAppMediaQuery;

import { connect } from 'react-redux';
import { TRootState } from '../../../store/store';
import { TNavigation } from '../../../type/type';
import Navigation from './Navigation';

type TMapStateToProps = {
  navDesktop: Array<TNavigation>;
  navLaptop: Array<TNavigation>;
  setItemHovered: (isHover: string | null) => void;
};

type TOwnProps = {
  setItemHovered: (isHover: string | null) => void;
};

// type MapDispatchToPropsType = {};

export type TNavigationProps = TMapStateToProps;

const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => ({
  navDesktop: state.app.navigationDesktop,
  navLaptop: state.app.navigationTablet,
  setItemHovered: ownProps.setItemHovered,
});

export default connect(mapStateToProps, {})(Navigation);

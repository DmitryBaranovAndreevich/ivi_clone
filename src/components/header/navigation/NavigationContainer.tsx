import { connect } from 'react-redux';
import { TRootState } from '../../../store/store';
import { TNavigationDesctop, TNavigationLaptop } from '../../../type/type';
import { TItemHovered } from '../Header';
import Navigation from './Navigation';

type TMapStateToProps = {
  navDesktop: Array<TNavigationDesctop>;
  navLaptop: Array<TNavigationLaptop>;
  setItemHovered: (isHover: TItemHovered) => void;
};

type TOwnProps = {
  setItemHovered: (isHover: TItemHovered) => void;
};

// type MapDispatchToPropsType = {};

export type TNavigationProps = TMapStateToProps;

const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => ({
  navDesktop: state.appReducer.navigationDesktop,
  navLaptop: state.appReducer.navigationTablet,
  setItemHovered: ownProps.setItemHovered,
});

export default connect(mapStateToProps, {})(Navigation);

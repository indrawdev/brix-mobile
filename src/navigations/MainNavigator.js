import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import ShopNavigator from './ShopNavigator';

const MainNavigator = props => {
  // const navRef = useRef();
  // const isAuth = useSelector(state => !!state.auth.token);

  // useEffect(() => {
  //   if (!isAuth) {
  //     navRef.current.dispatch(
  //       NavigationActions.navigate({ routeName: 'Login' })
  //     );
  //   }
  // }, [isAuth]);

  // return <ShopNavigator ref={navRef} />;
};

export default MainNavigator;
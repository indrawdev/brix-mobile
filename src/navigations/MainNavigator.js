import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DrawerNavigator from '../navigations/DrawerNavigator';

const MainNavigator = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
        // props.navigation.navigate('Login')
				console.log('Login')
    }
  }, [isAuth]);

  return <DrawerNavigator ref={navRef} />;
};

export default MainNavigator;
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import icons from '../constants/icons';

const NavigationDrawer = props => {

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
					source={icons.drawer_white}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawer;
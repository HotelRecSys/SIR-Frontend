import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import {
  Hotels,
  SignIn,
  SplashScreen,
} from '../screens';
import TabNavigator from './Tabs';

const Stack = createStackNavigator();

function Router({ isLoggedIn }) {
  return (
      
    <Stack.Navigator headerMode="none">
      {!isLoggedIn ? (
        <>
        {/* kullanıcı girisi olmadıgında gozukecek componentler buraya eklenıcek */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </>
      ) : (
        <>
        {/* kullanıcı gırısı olduktan sonra eklenıcek component ve routelar */}
        {/* tabbar eklemek için gerekli olan ( dokuman ıcerısınden adım adım gıdılerek yapılabılır) */}
          <Stack.Screen name="Home" component={TabNavigator} /> 
          <Stack.Screen name="Hotels" component={Hotels} /> 
        </>
      )}
    </Stack.Navigator>
  );
}

const mapStateToProps = ({ authentication }) => ({
    isLoggedIn: true,
});
export default connect(mapStateToProps)(Router);

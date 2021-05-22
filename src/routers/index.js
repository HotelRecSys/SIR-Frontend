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

function Router({ isLoggedIn, user }) {
  return (
      
    <Stack.Navigator headerMode="none">
      {isLoggedIn && user ? (
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
    isLoggedIn: authentication.isLoggedIn,
    user: authentication.user
});
export default connect(mapStateToProps)(Router);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import {
  SignIn,
} from '../screens';
import TabNavigator from './Tabs';

const Stack = createStackNavigator();

function Router({ isLoggedIn }) {
  return (
      
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
        {/* kullanıcı girisi olmadıgında gozukecek componentler buraya eklenıcek */}
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      ) : (
        <>
        {/* kullanıcı gırısı olduktan sonra eklenıcek component ve routelar */}
        {/* tabbar eklemek için gerekli olan ( dokuman ıcerısınden adım adım gıdılerek yapılabılır) */}
          <Stack.Screen name="Home" component={TabNavigator} /> 
        </>
      )}
    </Stack.Navigator>
  );
}

const mapStateToProps = ({ authentication }) => ({
    isLoggedIn: authentication.token,
});
export default connect(mapStateToProps)(Router);

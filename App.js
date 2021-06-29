import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { Provider } from "react-redux";
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import "react-native-gesture-handler";

import Router from "./src/routers";
import store from "./src/store";
import theme from "./src/config/theme";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faHome, faAt, faLock, faKey, faEye, faEyeSlash, faChevronRight, faMapMarkerAlt, faChevronLeft, faUser, faGlobeAmericas, faEnvelope, faEnvelopeOpen, faSearch, faStar, faHotel, faCrown, faSlidersH, faUserEdit } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUserCircle, faHome, faAt, faLock, faKey,faEye, faEyeSlash,faChevronRight,faMapMarkerAlt,faChevronLeft,faUser,faGlobeAmericas,faEnvelope,  faEnvelopeOpen,faSearch, faStar, faHotel, faCrown,faSlidersH, faUserEdit  )

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={0}
        >
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </ThemeProvider>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Provider>
  );
}

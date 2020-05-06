import React from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <Button
      title='Push Settings Screen'
      color='#710ce3'
      onPress={() => Navigation.push(props.componentId, {
        component: {
          name: 'Settings'
        }
      })}></Button>
    </View>
  )
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
}

const SettingsScreen = () => {
  return (
    <View style={styles.home}>
      <Text>Settings Screen</Text>
    </View>
  )
}

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings'
    },
  },
  bottomTab: {
    text: 'Settings'
  }
}

const LoginScreen = () => {
  return (
    <View style={styles.home}>
      <Button
      title='Login'
      color='#710ce3'
      onPress={() => Navigation.setRoot(mainRoot)}></Button>
    </View>
  )
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Login', () => LoginScreen);

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home'
                }
              }
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings'
                }
              }
            ]
          }
        }
      ]
    }
  }
};

const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
}

// We need to add this, setDefaultOptions, snippet before registering the registerAppLaunchedListener. This way we ensure our theme is applied when our root is set.
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
})

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

// conditional roots
const isLoggedIn = () => {
  // we'll check if a user is logged in there and set the appropriate root accordingly 
  return false;
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
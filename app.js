/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

var LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

class FBLoginView extends Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
    };

    render(){
        return (
          <View style={{backgroundColor: '#ff0000'}}>
            <Text
              onPress={() => {
                if(!this.context.isLoggedIn){
                  this.context.login()
                }else{
                  this.context.logout()
                }
              }}
              style={{backgroundColor: '#ccc', borderWidth: 1, padding: 5}}>
              {this.context.isLoggedIn?"Logout Facebook":"Login Facebook"}
            </Text>
          </View>
      )
    }
}


export default class LoginFB extends Component {
  render() {
    return (
      <FBLogin
        loginBehavior={LoginBehavior[Platform.OS]}
        buttonView={<FBLoginView />}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        permissions={["email","user_friends"]}
        onLogin={function(e){console.log(e)}}
        onLoginFound={function(e){console.log(e)}}
        onLoginNotFound={function(e){console.log(e)}}
        onLogout={function(e){console.log(e)}}
        onCancel={function(e){console.log(e)}}
        onPermissionsMissing={function(e){console.log(e)}}
      />
    );
  }
}

import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import './LoginScreen.css';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId : '',
      password : '',
      text : ''
    };
  }

  render() {
    return (
      <View>
        <div className="login">
            <TextInput
              onChangeText = {(text)=>{ this.setState({ text : text }) }}
              value = {this.state.text}
            />
            <Button  />        
        </div>         
      </View>
    );
  }
}



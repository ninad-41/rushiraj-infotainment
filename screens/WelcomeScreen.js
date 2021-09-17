import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: 'false',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert(
        'So sorry, password is not matching, so please check your password.'
      );
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
          });
          return alert(
            'User Added Successfully. Now you can use the app with the email id and the password.',
            '',
            [
              {
                text: 'OK',
                onPress: () => this.setState({ isModalVisible: false }),
              },
            ]
          );
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>
                <b>
                  <u>Registration Form</u>
                </b>
              </Text>
              <TextInput
                style={styles.formTextInput}
                fontWeight='bold'
                placeholder={'Enter your full name'}
                placeholderTextColor="black"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your contact No.'}
                placeholderTextColor="black"
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
             
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your Email Id'}
                placeholderTextColor="black"
                keyboardType={'email-id'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your password'}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confirm Password'}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => this.setState({ isModalVisible: false })}>
                  <Text
                    style={{ fontFamily: 'sans-serif', fontSize: 30 , color : '#0E0E0D',fontWeight: 'bold'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.allData}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}></View>
        {this.showModal()}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>
            <u>
              <b>Infotainment App </b>
            </u>
          </Text>
          <Image
            style={styles.imageIcon}
            source={require('../assets/5491425.png')}
          />
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email here"
              placeholderTextColor="black"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter the password here"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allData: {
    flex: 1,
    backgroundColor: '#D22121',
  },
  header: {
    fontFamily: 'cursive',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#FCFC0D',
    borderBottomRadius : 100,
  },
  imageIcon: {
    width: 300,
    height: 280,
    alignSelf: 'center',
    marginTop: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 10.32,
    shadowRadius: 10.32,
    elevation: 25,
  },
  textInput: {
    width: 290,
    height: 50,
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#C5D221',
    fontWeight: 'bold',
    fontFamily: 'Roman',
    marginTop: 20,
    fontSize: 25,
    borderRadius : 20
  },
  buttonText: {
    fontWeight : 'bold',
    fontSize: 35,
    textAlign: 'center',
    padding: 6,
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#43C6DB',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 31,
    margin: 10,
    padding: 5,
    fontFamily: 'cusive',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#93FFE8',
    borderRadius: 30,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ADDFFF',
    borderRadius: 5,
    fontSize : 17,
    fontFamily: 'sans-serif',
  },
  registerButton: {
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#3EA99F',
  },
  registerButtonText: {
 fontFamily: 'sans-serif', fontSize: 30 , color : '#0C090A',fontWeight: 'bold'
  },
  
});

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import MyHeader from '../components/MyHeader'

export default class Pronounciation extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
            <MyHeader title="UK ACCENT" style={styles.headerText} navigation={this.props.navigation}/>  
        <Image
          source={require('../assets/bm2.jpg')}
          style={{ width: 230, height: 230, marginLeft: 70, marginTop: 10 }}
        />

        <TextInput
          style={Design.txthol}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />
        <TouchableOpacity style={Design.buttonStyle} onPress={this.speak}>
          <Text style={{ fontWeight: 'bold', marginTop: 14, fontSize: 20 }}>
            Click Here .
          </Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}

let Design = StyleSheet.create({
  txthol: {
    width: 310,
    height: 40,
    alignSelf: 'center',
    borderWidth: 4.5,
    marginTop: 10,
    textAlign: 'center',
    borderColor:'black',
  },

  
  buttonStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 3,
    marginTop: 50,
    width: 200,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'aqua',
  },
});

const styles  = StyleSheet.create({
})

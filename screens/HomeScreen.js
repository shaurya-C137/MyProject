import { Text, View, DrawerNavigator,ImageBackground, Image } from 'react-native'
import React, { Component } from 'react'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>

<ImageBackground source={require('./bgImage.gif')} style={styles.backgroundImage}>
        <Text>HomeScreen</Text>
        <Text>something about the App</Text>
</ImageBackground>
      </View>
    )
  }
}

//create a stylesheet
const styles = StyleSheet.create({
backgroundImage: {
  flex: 1,
  resizeMode: 'cover',}
})
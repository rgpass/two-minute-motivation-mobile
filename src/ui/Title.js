import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 48,
  },
})

const Title = props => (
  <View style={[props.containerStyle, styles.container]}>
    <Text style={[props.textStyle, styles.text]}>Two-Minute Motivation</Text>
  </View>
)

export default Title

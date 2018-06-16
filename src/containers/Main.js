import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Action, Next, Title } from '../ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
    }),
    textAlign: 'center',
  },
})

const Main = () => (
  <View style={styles.container}>
    <Title containerStyle={styles.container} textStyle={styles.text} />
    <Action containerStyle={styles.container} textStyle={styles.text} />
    <Next containerStyle={styles.container} textStyle={styles.text} />
  </View>
)

export default Main

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Action, Next, Title } from '../ui'
import data from '../../data.json'

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

const randomIndex = () => Math.floor(Math.random() * data.actions.length)
const getNewActionIndex = currentIndex => {
  let newIndex = randomIndex()
  while (newIndex === currentIndex) {
    newIndex = randomIndex()
  }

  return newIndex
}

class Main extends Component {
  constructor() {
    super()

    this.state = {
      actionIndex: getNewActionIndex(),
    }

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    const { actionIndex } = this.state
    const newIndex = getNewActionIndex(actionIndex)
    this.setState({ actionIndex: newIndex })
  }

  render() {
    const { actionIndex } = this.state
    const action = data.actions[actionIndex].title
    const { handlePress } = this

    return (
      <View style={styles.container}>
        <Title containerStyle={styles.container} textStyle={styles.text} />
        <Action
          action={action}
          containerStyle={styles.container}
          textStyle={styles.text}
        />
        <Next
          onPress={handlePress}
          containerStyle={styles.container}
          textStyle={styles.text}
        />
      </View>
    )
  }
}

export default Main

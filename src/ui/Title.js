import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { shape } from 'prop-types'

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

Title.propTypes = {
  containerStyle: shape,
  textStyle: shape,
}

Title.defaultProps = {
  containerStyle: {},
  textStyle: {},
}

export default Title

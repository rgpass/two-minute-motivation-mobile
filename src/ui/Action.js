import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { string } from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 24,
  },
})

const Action = props => (
  <View style={[props.containerStyle, styles.container]}>
    <Text style={[props.textStyle, styles.text]}>{props.action}</Text>
  </View>
)

Action.propTypes = {
  action: string.isRequired,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
}

Action.defaultProps = {
  containerStyle: {},
  textStyle: {},
}

export default Action

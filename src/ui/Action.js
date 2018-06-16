import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { shape } from 'prop-types'

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
    <Text style={[props.textStyle, styles.text]}>
      Clean your computer screen and here is a really long one for example
    </Text>
  </View>
)

Action.propTypes = {
  containerStyle: shape,
  textStyle: shape,
}

Action.defaultProps = {
  containerStyle: {},
  textStyle: {},
}

export default Action

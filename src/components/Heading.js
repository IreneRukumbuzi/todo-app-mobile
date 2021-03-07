import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = ({children,style, ...props}) => {
  return (
    <Text {...props} style={[style, styles.header]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#55BCF6'
  }
})

export default Heading

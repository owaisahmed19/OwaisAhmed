import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Item(props) {
  return (
<View style={styles.container}>
    <Text style={styles.txt}>{props.task}</Text>
</View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'80%',
        height:30
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
    },
})

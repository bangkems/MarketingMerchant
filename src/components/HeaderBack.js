import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'

function HeaderBack({ titleText, backButton }) {

    return (
      <Appbar.Header style={styles.headerContainer}>
        <Appbar.BackAction
          onPress={ backButton }
        />
        <Appbar.Content
          title={ titleText }
        />
      </Appbar.Header>
    )
  }
  
  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#2980b9'
    },
    title: {
      color: '#FFF'
    }
  })
  
  export default HeaderBack
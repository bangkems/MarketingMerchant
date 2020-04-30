import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
// import Header from '../components/Header'

function Welcome( {navigation} ) {
    return (
      <>
        {/* <Header titleText='Add a new note' /> */}
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Selamat Datang di Marketing Platform</Text>
            <Text style={styles.subtitle}>Masukkan nomor HP Anda untuk melakukan login dengan OTP</Text>
          </View>
          <TextInput label="Nomor Handphone" mode="flat" keyboardType="phone-pad"/>
          <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('Login')}>
          KIRIM OTP
          </Button>
        </View>
      </>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20639b',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingVertical: 20,
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left'
  },
  tombol: {
    marginTop: 20,
    paddingVertical: 5,
    backgroundColor: 'purple',
  }
})

export default Welcome
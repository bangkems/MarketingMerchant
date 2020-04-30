import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
// import Header from '../components/Header'
// import OTPInputView from '@twotalltotems/react-native-otp-input'

function Login( {navigation} ) {
    return (
      <>
        {/* <Header titleText='Add a new note' /> */}
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Masukkan Kode OTP Anda</Text>
            <Text style={styles.subtitle}>Kode OTP telah dikirimkan ke nomor anda melalui SMS</Text>
          </View>
          <TextInput label="Kode OTP" mode="flat" keyboardType="numeric"/>
          {/* <OTPInputView style={styles.otp} pinCount={4} onCodeFilled={() => navigation.navigate('Validasi')}/> */}
          <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('Validasi')}>
          MASUK DENGAN OTP
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
    paddingVertical: 70
  },
  titleContainer: {
    justifyContent: 'flex-start',
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
    backgroundColor: 'purple',
  },
  otp: {
      paddingHorizontal: 30
  }
})

export default Login
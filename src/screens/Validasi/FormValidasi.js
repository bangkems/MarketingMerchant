import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Avatar, Paragraph, TextInput, Button} from 'react-native-paper'
import HeaderBack from '../../components/HeaderBack'


function FormValidasi({ navigation }) {
  return (
    <>
    <HeaderBack titleText="Form Validasi" backButton={ () => navigation.goBack() }></HeaderBack>
    <View style={styles.container}>
    <View style={styles.iconContainer}>
    <Avatar.Icon style={styles.iconForm} size={100} icon="account-check" />
    </View>
    <Paragraph style={styles.deskripsi}>Masukkan Nomor Handphone serta Kode voucher untuk melakukan validasi</Paragraph>
    <TextInput
        style={styles.input}
        theme={{ colors: { primary: '#2980b9',underlineColor:'transparent',}}}
        keyboardType="phone-pad"
        label="Nomor Handphone"
        mode="outlined"
    />
    <TextInput
        style={styles.input}
        theme={{ colors: { primary: '#2980b9',underlineColor:'transparent',}}}
        label="Kode Voucher"
        mode="outlined"
    />
          <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('KonfirmasiVoucher')}>
          CEK VOUCHER
          </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  deskripsi: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center'
  },
  input: {
    paddingTop: 2,
    paddingBottom: 10,
    height: 45,
  },
  iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10
  },
  iconForm: {
      backgroundColor: "black"
  },
  tombol: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: '#2980b9',
  }
})

export default FormValidasi
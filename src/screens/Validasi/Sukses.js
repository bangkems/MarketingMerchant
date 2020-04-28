import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Avatar, Paragraph, Text, Title} from 'react-native-paper'


function Sukses({ navigation }) {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.iconContainer}>
    <Avatar.Icon style={styles.iconForm} size={100} icon="check"/>
    </View>
    <Title style={styles.titleSukses}>Validasi Sukses</Title>
    <Paragraph style={styles.deskripsiSukses}>Voucher berhasil di validasi</Paragraph>
    <Text style={styles.tombolLink} onPress={() => navigation.navigate('Validasi')}>Kembali ke Menu Validasi</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008c23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  titleSukses: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white'
  },
  deskripsiSukses: {
    fontSize: 18,
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white'
  },
  iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10
  },
  iconForm: {
      backgroundColor: "white"
  },
  tombol: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: '#2980b9',
  },
  tombolLink: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'white',
    paddingTop: 30
}
})

export default Sukses
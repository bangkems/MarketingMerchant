import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Title, Divider } from 'react-native-paper'
import NavigationService from "../../navigation/NavigationService";

export default class index extends Component {
  render() {
    const namaMerchant = 'Merchantku'
    const namaPemilik = 'Zain Muhammad'
    const alamatMerchant = 'Jalan Sudimoro No. 45 Surabaya'
    const alamatEmail = 'zain@gmail.com'
    const noTelepon = '083323458967'
    return (
      <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title style={styles.title}>Berikut merupakan profil merchant kamu</Title>
            <Text style={styles.subtitle}>Silahkan update profil kamu jika terdapat ketidaksesuaian informasi.</Text>
          </View>

          <Divider style={styles.divider}/>

            <Text style={styles.fieldTitle}>Nama Merchant</Text>
            <Text style={styles.fieldDesc}>{namaMerchant}</Text>

            <Text style={styles.fieldTitle}>Nama Pemilik</Text>
            <Text style={styles.fieldDesc}>{namaPemilik}</Text>

            <Text style={styles.fieldTitle}>Alamat Merchant</Text>
            <Text style={styles.fieldDesc}>{alamatMerchant}</Text>

            <Text style={styles.fieldTitle}>Alamat Email</Text>
            <Text style={styles.fieldDesc}>{alamatEmail}</Text>

            <Text style={styles.fieldTitle}>Nomor Telepon</Text>
            <Text style={styles.fieldDesc}>{noTelepon}</Text>

          <Button style={styles.button} mode="contained" onPress={() => NavigationService.navigate("UpdateProfileMerchant")}>Ubah Profil</Button>

        </View>
      </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  divider: {
      margin: 20
  },
  titleContainer: {
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
  },
  title: {
      fontSize: 18,
      textAlign: 'left',
      alignSelf: 'stretch'
  },
  subtitle: {
      fontSize: 14,
      marginRight: 20
  },
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  fieldDesc: {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
  textInput: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    margin: 20,
  //   backgroundColor: '#0055a5'
  }
})

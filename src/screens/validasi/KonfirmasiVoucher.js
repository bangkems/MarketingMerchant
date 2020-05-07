import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Avatar, Paragraph, Text, Title, Button} from 'react-native-paper'
import HeaderBack from '../../components/HeaderBack'


function KonfirmasiVoucher({ navigation }) {
  return (
    <>
    <HeaderBack titleText="Konfirmasi Voucher" backButton={ () => navigation.goBack() }></HeaderBack>
    <View style={styles.containerKonfirmasi}>
          <Title style={styles.title}>Voucher Ditemukan!</Title>
          <Paragraph style={styles.subtitle}>Berikut ini informasi yang terdaftar pada sistem berkaitan dengan voucher tersebut</Paragraph>
    </View>
    <View style={styles.container}>
          <ScrollView>
            <Paragraph style={styles.judulInformasi}>Nama Pelanggan</Paragraph>
            <Text style={styles.isiInformasi}>Habibie Mulyana</Text>
            <Paragraph style={styles.judulInformasi}>Nomor Handphone</Paragraph>
            <Text style={styles.isiInformasi}>01923019312</Text>
            <Paragraph style={styles.judulInformasi}>Tanggal Perolehan Voucher</Paragraph>
            <Text style={styles.isiInformasi}>12 Maret 2020</Text>
            <Paragraph style={styles.judulInformasi}>Direkomendasikan (Referred) Oleh</Paragraph>
            <Text style={styles.isiInformasi}>Baihaqi Luqman</Text>
            <Paragraph style={styles.judulInformasi}>Promo Voucher</Paragraph>
            <Text style={styles.isiInformasi}>Diskon 30% Potong Rambut</Text>
            <Paragraph style={styles.judulInformasi}>Rewards</Paragraph>
            <Text style={styles.isiInformasi}>Potongan 30% dari Biaya Transaksi</Text>
            <Paragraph style={styles.judulInformasi}>Status Voucher</Paragraph>
            <Text style={styles.isiInformasiValidasi}>VALID</Text>
          </ScrollView>
          <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('Sukses')}>
          VALIDASI
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
  containerKonfirmasi: {
    backgroundColor: '#34495e',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    textAlign: 'center',
    color: 'white'
  },
  judulInformasi: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    color: 'grey'
  },
  isiInformasi: {
    fontSize: 18,
    textAlign: 'center'
  },
  isiInformasiValidasi: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold'
  },
  tombol: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
    backgroundColor: '#2980b9',
  }
})

export default KonfirmasiVoucher
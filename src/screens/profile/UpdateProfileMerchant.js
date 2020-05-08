import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import { Text, Button, TextInput, Snackbar, HelperText} from 'react-native-paper'

import Header from "../../components/Header";


export default class App extends Component {
  state = {
    visible: false,
    namaMerchant: 'Merchantku',
    namaPemilik: 'Zain Muhammad',
    alamatMerchant: 'Jalan Sudimoro No. 45 Surabaya',
    alamatEmail: 'zain@gmail.com',
    noTelepon: '083323458967',

  };

  _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));

  _onDismissSnackBar = () => this.setState({ visible: false });

  _hasErrors = () => {
    return !this.state.alamatEmail.includes('@');
  }

  render() {
    const { visible } = this.state;

    return (
        <>
        <Header titleText="Ubah Profil Merchant" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <Text style={styles.fieldTitle}>Nama Merchant</Text>
            <TextInput
              value={this.state.namaMerchant}
              onChangeText={namaMerchant => this.setState({ namaMerchant })}
              style={styles.textInput}
            />

            <Text style={styles.fieldTitle}>Nama Pemilik</Text>
            <TextInput
              value={this.state.namaPemilik}
              onChangeText={namaPemilik => this.setState({ namaPemilik })}
              style={styles.textInput}
            />

            <Text style={styles.fieldTitle}>Alamat Merchant</Text>
            <TextInput
              value={this.state.alamatMerchant}
              onChangeText={alamatMerchant => this.setState({ alamatMerchant })}
              style={styles.textInput}
            />

            <Text style={styles.fieldTitle}>Alamat Email</Text>
            <TextInput
              value={this.state.alamatEmail}
              onChangeText={alamatEmail => this.setState({ alamatEmail })}
              style={styles.textInput}
              keyboardType='email-address'
            />
            <HelperText
              style={{marginLeft:10}}
              type="error"
              visible={this._hasErrors()}
            >
              Masukkan alamat email yang benar!
            </HelperText>
            
            <Text style={styles.fieldTitle}>Nomor Telepon</Text>
            <TextInput
              value={this.state.noTelepon}
              onChangeText={noTelepon => this.setState({ noTelepon })}
              style={styles.textInput}
              keyboardType='phone-pad'
            />

          
          <Button style={styles.button} mode="contained" onPress={this._onToggleSnackBar}>Ubah Profil</Button>

          <Snackbar
            style={styles.snackbar}
            visible={visible}
            onDismiss={this._onDismissSnackBar}
            action={{
              label: 'OK',
              onPress: () => {
                // Do something
              },
            }}
          >
            Profil merchant kamu berhasil diperbarui!
          </Snackbar>


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
    fieldTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      margin: 20,
      marginBottom: 0,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    textInput: {
      margin: 20,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    button: {
      margin: 20,
      // backgroundColor: '#0055a5'
    },
    buttonTanggal: {
      margin: 20,
      width: Dimensions.get('window').width / 2
      // backgroundColor: '#0055a5'
    },
    snackbar: {
      marginLeft: 25,
      backgroundColor: '#57B258'
    },
    radioButton: {
      marginLeft: 5,
      marginTop: -5
    }
  })
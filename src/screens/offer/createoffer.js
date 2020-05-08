import React from 'react'
// import { ImagePicker } from 'expo';
import * as ImagePicker from 'expo-image-picker'
// expo install expo-image-picker
import { Formik } from 'formik';
// yarn add formik
import { Button, TextInput, Appbar, Text , Paragraph} from 'react-native-paper';
import { Alert, Keyboard, Image, View, StyleSheet, ScrollView } from 'react-native';

// import Header from "../../components/Header";

const initialValues = {
  // title: '',
  image: '',
}

function CreateOffer({ navigation }) {
  return (
    <>
      <Appbar.Header>
          <Appbar.BackAction
            onPress={() => navigation.navigate('OfferScreen')}
          />
          <Appbar.Content
            title="Buat Penawaran (1/5)"
            subtitle="Nama, deskripsi, dan gambar penawaran"
          />
      </Appbar.Header>
      <MyComponent />
      <View style={{backgroundColor: 'white'}}>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('BenefitPelanggan')}>Lanjutkan: Benefit Pelanggan</Button>
      </View>
    </>
  );
}

class MyComponent extends React.Component {

  onSubmit(values) {
    //List of form values
    console.log(values);
    Alert.alert(JSON.stringify(values));
    Keyboard.dismiss();
  }

  async _pickImage (handleChange) {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
    console.log(result)
    if (!result.cancelled) {
      handleChange(result.uri)
    }
  }

  state = {
    judulPenawaran: '',
    deskripsiPenawaran: ''
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.fieldTitle}>Judul Penawaran</Text>
          <Paragraph style={styles.paragraph}>Contoh: Penawaran Buy 1 Get 1 Free</Paragraph>
          <TextInput
            value={this.state.judulPenawaran}
            onChangeText={judulPenawaran => this.setState({ judulPenawaran })}
            style={styles.textInput}
            mode= 'outlined'
            placeholder="Masukkan judul penawaranmu"
          />

          <Text style={styles.fieldTitle}>Deskripsi Penawaran</Text>
          <Paragraph style={styles.paragraph}>Contoh: Penawaran ini berlaku untuk minimal belanja sebuah produk seharga Rp. 30000</Paragraph>
          <TextInput
            value={this.state.deskripsiPenawaran}
            onChangeText={deskripsiPenawaran => this.setState({ deskripsiPenawaran })}
            style={styles.textInput}
            numberOfLines={10}
            multiline={true}
            mode= 'outlined'
            placeholder="Masukkan deskripsi penawaranmu"
          />

          <Formik 
            initialValues={initialValues} 
            onSubmit={this.onSubmit.bind(this)}>
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <Text style={styles.fieldTitle}>Gambar Penawaran</Text>
                <Paragraph style={styles.paragraph}>Gambar ini yang akan menjadi cover penawaranmu ketika dibagikan</Paragraph>

                {/* <TextInput
                  onChangeText={handleChange('title')}
                  value={values.title}
                  label="Nama Gambar"
                  placeholder="Contoh: Penawaran Ramadhan"
                  style={styles.textInput}
                /> */}

                {values.image && values.image.length > 0 ?
                <Image source={{ uri: values.image }} style={{ width: 200, height: 200, margin:20 }} /> : null}
                
                <View style={styles.buttonFlex}>
                  <Button
                    icon="plus" mode="outlined" style={styles.buttonGambar}
                    onPress={() => {this._pickImage(handleChange('image'))}}
                  >Tambah Gambar</Button>
                  
                  {/* <Button icon="upload" mode="outlined" onPress={handleSubmit} style={styles.buttonGambar}>Unggah</Button> */}
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
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
    fontSize: 18,
    margin: 20,
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    fontStyle: 'italic'
  },
  textInput: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    margin: 30,
    // backgroundColor: '#0055a5'
  },
  buttonGambar: {
    margin: 20
  },
  buttonFlex: {
    flex: 1,
    // margin: 20,
    flexDirection: 'row'
  },
})

export default CreateOffer

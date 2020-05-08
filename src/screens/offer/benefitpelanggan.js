import * as React from 'react';
import { Button, TextInput, Appbar, Text , Paragraph} from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';

// import radio button: npm i react-native-radio-buttons-group --save
import RadioGroup from 'react-native-radio-buttons-group';
// yarn add react-native-radio-buttons-group

function BenefitPelanggan({ navigation }) {
  return (
    <>
      <Appbar.Header>
          <Appbar.BackAction
            onPress={() => navigation.navigate('OfferCreate')}
          />
          <Appbar.Content
            title="Buat Penawaran (2/5)"
            subtitle="Benefit Bagi Pelanggan"
          />
      </Appbar.Header>
      <MyComponent />
      <View style={{backgroundColor: 'white'}}>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('BenefitFans')}>Lanjutkan: Benefit Fans</Button>
      </View>
    </>
  );
}

class MyComponent extends React.Component {

  constructor(){

    super();

    this.state ={
      potonganHarga: '',
      checkedsyarat1: false,
      checkedsyarat2: false,

      data: [
        {
            label: 'Potongan Harga',
            color: '#6200EE',
        },
        {
            label: 'Tanpa Reward',
            color: '#6200EE',
        },
    ],

    }
  }

  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.fieldTitle}>Opsi Benefit Bagi Pelanggan</Text>
          <Paragraph style={styles.paragraph}>Silahkan pilih salah satu opsi benefit bagi pelanggan</Paragraph>

                <View style={styles.containerRadioButton}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                </View>

                <Text style={styles.valueText}>
                    Terpilih: {selectedButton}
                </Text>

                {
                selectedButton == "Potongan Harga"?
                <Paragraph style={styles.paragraph}>Silahkan masukan jumlah potongan harga yang akan kamu berikan kepada fans dalam Rupiah</Paragraph>
                : null
                }

                {
                selectedButton == "Potongan Harga"?
                <TextInput
                    value={this.state.potonganHarga}
                    onChangeText={potonganHarga => this.setState({ potonganHarga })}
                    style={styles.textInput}
                    mode= 'outlined'
                    placeholder="Contoh: 20000"
                    keyboardType={'numeric'}
                /> 
                : null 
                }

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
  containerRadioButton: {
    paddingRight: 180,
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
    marginBottom: 20
  },
  valueText: {
    margin:20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
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
  buttonFlex: {
    flex: 1,
    // margin: 20,
    flexDirection: 'row'
  },
  radioButton: {
    marginRight: -5,
    marginLeft: 5
  },
  divider: {
    margin: 20
  }
})

export default BenefitPelanggan

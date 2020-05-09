import React, {useState} from 'react'
import { Button, TextInput, Appbar, Text , Paragraph, Divider, Checkbox, IconButton} from 'react-native-paper';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

// import radio button: npm i react-native-radio-buttons-group --save
import RadioGroup from 'react-native-radio-buttons-group';

// yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker
import DateTimePickerModal from "react-native-modal-datetime-picker"
// yarn add moment
import moment from 'moment'
import 'moment/locale/id'

import Header from "../../components/Header";


function Kalendar() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const [chosenDate, setChosenDate] = useState('');
  
    const handleConfirm = (datetime) => {
      hideDatePicker(); //must be first
      console.log("A date has been picked: ", datetime);
      // setChosenDate(moment(datetime).format('dddd Do MMMM YYYY'))
      setChosenDate(moment(datetime).format('DD-MMMM-YYYY'));
    };
  
    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };
  
    return (
      <>
        <View style={styles.calendarSection}>
          <IconButton style={styles.calendarIcon}
            icon="calendar"
            color="#6F00F9"
            size={40}
            onPress={showDatePicker}
          />
  
          <TextInput style={styles.inputCalendar} value={chosenDate} placeholder="Silahkan Pilih Tanggal"/>
  
          {/* <Text style={styles.fieldDesc}>{chosenDate}</Text> */}
                  
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display="default"
          />
        </View>
      </>
    );
  }

function BenefitFans({ navigation }) {
  return (
    <>
        <Header titleText="Buat Penawaran (3/5)" subtitleText="Benefit Bagi Fans"/>

      <MyComponent />
      <View style={{backgroundColor: 'white'}}>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Masa Berlaku')}>Lanjutkan: Masa Berlaku</Button>
      </View>
    </>
  );
}

class MyComponent extends React.Component {

  constructor(){

    super();

    this.state ={
        checkedsyarat1: false,
        checkedsyarat2: false,
        checkedsyarat3: false,
        hadiahundian: '',
        hadiahlangsung: '',
        presentasekomisi: '',
        // date:"30-04-2020",

        data: [
            {
                // value: "I'm not same as label",
                // Default value is same as label
                label: 'Hadiah Undian',
                color: '#6200EE',
            },
            {
                label: 'Hadiah Langsung',
                color: '#6200EE',
                // size: 32,
                // disabled: true,
                // label: 'Disabled',
            },
            {
                label: 'Presentase Komisi',
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

    const { checkedsyarat1 } = this.state;
    const { checkedsyarat2 } = this.state;
    const { checkedsyarat3 } = this.state;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.fieldTitle}>Opsi Benefit Bagi Fans</Text>
          <Paragraph style={styles.paragraph}>Silahkan pilih salah satu opsi benefit bagi fans</Paragraph>

                <View style={styles.containerRadioButton}>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                </View>

                <Text style={styles.valueText}>
                    Terpilih: {selectedButton}
                </Text>

                {
                selectedButton == "Hadiah Undian"?
                <Paragraph style={styles.paragraph}>Silahkan masukan hadiah apa yang akan berikan kepada fans</Paragraph>
                : null
                }

                {
                selectedButton == "Hadiah Undian"?
                <TextInput
                    value={this.state.hadiahundian}
                    onChangeText={hadiahundian => this.setState({ hadiahundian })}
                    style={styles.textInput}
                    mode= 'outlined'
                    placeholder="Contoh: 20000"
                    keyboardType={'numeric'}
                /> 
                : null 
                }

                {
                selectedButton == "Hadiah Undian"?
                <Paragraph style={styles.paragraph}>Silahkan pilih tanggal undian</Paragraph>
                : null
                }
                {
                selectedButton == "Hadiah Undian"?
                <Kalendar
                />
                : null 
                }

                {
                selectedButton == "Hadiah Langsung"?
                <Paragraph style={styles.paragraph}>Silahkan masukan hadiah apa yang akan berikan kepada fans</Paragraph>
                : null
                }

                {
                selectedButton == "Hadiah Langsung"?
                <TextInput
                    value={this.state.hadiahlangsung}
                    onChangeText={hadiahlangsung => this.setState({ hadiahlangsung })}
                    style={styles.textInput}
                    mode= 'outlined'
                    placeholder="Contoh: 1 Dus Indomie Goreng"
                    keyboardType={'default'}
                /> 
                : null 
                }

                {
                selectedButton == "Presentase Komisi"?
                <Paragraph style={styles.paragraph}>Silahkan masukan presentase komisi yang akan kamu berikan kepada fans</Paragraph>
                : null
                }

                {
                selectedButton == "Presentase Komisi"?
                <TextInput
                    value={this.state.presentasekomisi}
                    onChangeText={presentasekomisi => this.setState({ presentasekomisi })}
                    style={styles.textInput}
                    mode= 'outlined'
                    placeholder="Contoh: 12%"
                    keyboardType={'decimal-pad'}
                /> 
                : null 
                }

            <Divider style={styles.divider}/>

            <Text style={styles.fieldTitle}>Syarat Reward untuk Fans</Text>
            <Paragraph style={styles.paragraph}>Silahkan pilih satu atau lebih syarat untuk hadiah yang akan kamu berikan kepada fans</Paragraph>

            

            <View style={styles.checkboxContainer}>
                <Checkbox
                style={styles.checkbox}
                status={checkedsyarat1 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checkedsyarat1: !checkedsyarat1 }); }}
                />
                <Text style={styles.label}>Syarat dan ketentuan 1</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                style={styles.checkbox}
                status={checkedsyarat2 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checkedsyarat2: !checkedsyarat2 }); }}
                />
                <Text style={styles.label}>Syarat dan ketentuan 2</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                style={styles.checkbox}
                status={checkedsyarat3 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checkedsyarat3: !checkedsyarat3 }); }}
                />
                <Text style={styles.label}>Syarat dan ketentuan 3</Text>
            </View>

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
    paddingRight: 160,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  valueText: {
    margin:20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 30
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
    margin: 30
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  buttonTanggal: {
    margin: 20,
    width: Dimensions.get('window').width / 3
    // backgroundColor: '#0055a5'
  },
  calendarSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    margin: 5,
  },
  inputCalendar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
})

export default BenefitFans

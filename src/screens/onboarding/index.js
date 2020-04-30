import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

// https://www.npmjs.com/package/react-native-onboarding-screens
import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import { createStackNavigator, createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

const Simple = ({ navigation }) => (
  <View style={styles.container}>
  <Onboarding
    onDone={() => navigation.navigate('Welcome')}
    onSkip={() => navigation.navigate('Welcome')}
    pages={[
      {
        backgroundColor: '#7CC0C0',
        image: <Image style={styles.tinyLogo} source={{uri: 'https://i.dlpng.com/static/png/6841011_preview.png',}}/>,
        title: 'Meningkatkan Produksi dan Konsumsi Lokal',
        subtitle: 'Dengan meningkatknya konsumsi lokal maka kita bisa lebih mandiri secara global karena kita produksi dan konsumsi dalam negeri tanpa biaya import dari luar',
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image style={styles.tinyLogo} source={{uri: 'https://pngimage.net/wp-content/uploads/2018/06/help-logo-png-2.png',}}/>,
        title: 'Membantu UMKM',
        subtitle: 'Dengan menggunakan aplikasi ini kamu dapat membantu UMKM memasarkan produk mereka secara lebih luas',
      },
      {
        backgroundColor: '#F8B1BC',
        image: <Image style={styles.tinyLogo} source={{uri: 'https://www.emasmini.co.id/wp-content/uploads/2017/10/logo-rupiah-300x300.png',}}/>,
        title: 'Memperoleh Komisi',
        subtitle: "Dengan melakukan pemasaran produk UMKM melalui aplikasi, kamu dapat memperoleh komisi lho. Menarik bukan?",
      },
    ]}
  />
  </View>
);

export default class App extends React.Component {
    render() {
      return (
        <Simple navigation={this.props.navigation}/>
      );
    }
  }



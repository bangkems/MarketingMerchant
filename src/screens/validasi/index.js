import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Avatar, FAB, Chip, Card, Title, Paragraph, IconButton } from 'react-native-paper'
import Header from '../../components/Header'
import NavigationService from "../../navigation/NavigationService";

const UserValidasi = [
  {
    id: '1',
    nama: 'Mirawan Subhi',
    nomor_hp: '098765432112',
    coupon: '0812345123459'
  }
]

const AvatarUser = props => <Avatar.Icon {...props} icon="account" style={styles.avatar} />
const TombolNext = props => <IconButton {...props} icon="check" onPress={() => {}} />

export default class index extends Component {
  render() {
    return (
      <>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Chip style={styles.chipTanggal} mode='outlined'>18 April 2020</Chip>
        <Card style={styles.cardValidasi}>
          <Card.Title 
            title="Mirawan Subhi" 
            subtitle="0812345123459"
            left={AvatarUser}
            right={TombolNext}
            subtitleStyle={styles.subtitle} />
          <Card.Content>
            <Paragraph>Promo: Diskon 30% Potong Rambut</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.cardValidasi}>
          <Card.Title 
            title="Badruzaman" 
            subtitle="0812345123459"
            left={AvatarUser}
            right={TombolNext}
            subtitleStyle={styles.subtitle} />
          <Card.Content>
            <Paragraph>Promo: Buy 1 get 1 Pomade</Paragraph>
          </Card.Content>
        </Card>
        <Chip style={styles.chipTanggal} mode='outlined'>19 April 2020</Chip>
        <Card style={styles.cardValidasi}>
          <Card.Title 
            title="Algo Marniawan" 
            subtitle="0812345123459"
            left={AvatarUser}
            right={TombolNext}
            subtitleStyle={styles.subtitle} />
          <Card.Content>
            <Paragraph>Promo: Diskon 30% Potong Rambut</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.cardValidasi}>
          <Card.Title 
            title="Algo Marniawan" 
            subtitle="0812345123459"
            left={AvatarUser}
            right={TombolNext}
            subtitleStyle={styles.subtitle} />
          <Card.Content>
            <Paragraph>Promo: Diskon 30% Potong Rambut</Paragraph>
          </Card.Content>
        </Card>
        </View>
        <View style={styles.spaceBetween}></View>
        </ScrollView>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => NavigationService.navigate('Validasi_Form')}
        />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  scrollView: {
    paddingBottom: 30
  },
  spaceBetween: {
    marginBottom: 10,
    backgroundColor: '#fafafa'
  },
  chipTanggal: {
    marginTop: 20,
    marginRight: 125,
    marginLeft: 120
  },
  cardValidasi: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.30,
    shadowRadius: 0.65,
    elevation: 3,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  },
  subtitle:{
    marginTop: -3
  },
  avatar: {
    backgroundColor: "black"
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 20,
    bottom: 20,
    backgroundColor: "black"
  },
  title: {
    fontSize: 20
  }
})


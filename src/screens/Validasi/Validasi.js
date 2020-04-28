import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Avatar, FAB, Chip, Card, Title, Paragraph, IconButton } from 'react-native-paper'
import Header from '../../components/Header'

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

function Validasi({ navigation }) {
  return (
    <>
    <Header titleText="Validasi Voucher"></Header>
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
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        label="tambah validasi"
        onPress={() => navigation.navigate('FormValidasi')}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
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
    margin: 60,
    right: -40,
    bottom: 0,
    backgroundColor: "#2980b9"
  },
  title: {
    fontSize: 20
  }
})

export default Validasi
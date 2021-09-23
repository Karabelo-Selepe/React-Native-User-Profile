import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = (props) => {

    const { name, picture, phone, occupation, email, address } = props.route.params;

    const openDial = () => {
        if(Platform.OS === 'android') {
            Linking.openURL('tel:0712345678')
        } else {
            Linking.openURL('telprompt:0712345678')
        }
    }

    return (
        <View style={styles.root}>
            <LinearGradient
                colors={['#1692ff', '#16ffd8']}
                style={{height: '20%'}}
            />
            <View style={{alignItems: 'center'}}>
                <Image 
                    style={styles.img}
                    source={{uri: picture}}
                />
            </View>
            <View style={{alignItems: 'center', margin: 15}}>
                <Title>{name}</Title>
                <Text style={{fontSize: 18}}>{occupation}</Text>
            </View>

            <Card style={styles.mycard} 
                onPress={() => Linking.openURL('mailto:johndoe@email.com')}
            >
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>

            <Card style={styles.mycard} onPress={() => openDial()}>
                <View style={styles.cardContent} 
                >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <Entypo name="location-pin" size={24} color="#006aff" />
                    <Text style={styles.mytext}>{address}</Text>
                </View>
            </Card>
            <View style={styles.container}>
                <Button icon="account-edit" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Edit profile
                </Button>
                <Button icon="delete" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Delete profile
                </Button>
            </View>
        </View>
    );
}

const theme = {
    colors: {
        primary: '#006aff',
    }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 140/2,
    marginTop: -50,
  },
  mycard: {
    margin: 3,

  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
   
  },
  mytext: {
    fontSize: 18,
    marginTop: 3,
     marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Profile;
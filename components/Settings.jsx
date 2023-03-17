import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Button,
  Card,
  Input,
  Avatar,
  Text
} from '@rneui/base';

const logo = require('./../assets/images/logo-UT-1.png');


function Settings({navigation}) {
  return (
    <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Avatar source={logo} size="xlarge" />
        </View>
        <View>
          <Text style={styles.titleText}>Administración mobiliario</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.titleText, { fontWeight: "bold" }]}>UTA</Text>
        </View>
      </View>

      <Card>
        <Input placeholder='Nombre' label="Nombre" defaultValue='Abdiel Hernandex Salgado' />
        <Input placeholder='Número telefónico' label="Número telefónico" defaultValue='+15039689871' />
        <Input placeholder='Correo electrónico' label='Correo electrónico' defaultValue='abdielhs@example.com' />
        <Input placeholder='Nombre de usario' label='Nombre de usario' defaultValue='abdielhs26' />
        <Input placeholder='******' label='Contraseña' />
        <Button title="GUARDAR" buttonStyle={{ backgroundColor: '#2aa7cd' }} onPress={() => navigation.navigate("Home")} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#302c72',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: "center",
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Settings;
import React from 'react';
import { StyleSheet, FlatList, BackHandler, Alert } from 'react-native';
import { Avatar, Text, Divider } from '@rneui/base';

const dataList = [
    {
        title: "Perfil",
        icon: "user-o",
        bgIcon: "#2aa7cd",
        route: "profile"
    },
    {
        title: "Registrar mobiliario",
        icon: "building-o",
        bgIcon: "#23965f",
        route: "registerForniture"
    },
    {
        title: "Listado de mobiliario",
        icon: "list",
        bgIcon: "#23965f",
        route: "viewForniture"
    },
    {
        title: "Configuración",
        icon: "cogs",
        bgIcon: "#2aa7cd",
        route: "settings"
    },
    {
        title: "Salir",
        icon: "sign-out",
        bgIcon: "#23965f",
        route: "signout"
    },
];

const Home = ({navigation}) => {

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backPressed);
    },[])

    React.useEffect(() => {
        BackHandler.removeEventListener('hardwareBackPress', backPressed);
    },[])

    const backPressed = () => {
        Alert.alert(
          'Salir de la App',
          '¿Quieres salir de la app?',
          [
            {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Si', onPress: () => BackHandler.exitApp()},
          ],
          { cancelable: false });
          return true;
      }

    return (
        <FlatList
            ListHeaderComponent={
                () => <>
                    <Text h1 style={{color: "#302c72", opacity: 0.7}}>Administraci&oacute;n</Text>
                    <Divider />
                </>
            }
            data={dataList}
            renderItem={({ item }) => (
                <Avatar
                    size="xlarge"
                    rounded
                    title={item.title}
                    titleStyle={{
                        color: "lightgray",
                        fontSize: 20,
                    }}
                    containerStyle={{ backgroundColor: "#302c72", elevation: 20, margin: 10 }}
                    onPress={() => {
                        if (item.route === "signout") {
                            backPressed()
                        } else {
                            navigation.navigate(item.route)
                        }
                    }}
                >
                    <Avatar
                        size="medium"
                        rounded
                        icon={{ name: item.icon, type: 'font-awesome' }}
                        containerStyle={{ backgroundColor: item.bgIcon, position: "absolute" }}
                    />
                </Avatar>
            )}
            numColumns={5}
            keyExtractor={(item, idx) => idx}
            contentContainerStyle={styles.container}
            columnWrapperStyle={{ justifyContent: "space-around", flexWrap: "wrap" }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    }
})

export default Home;
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import { Input, Button } from '@rneui/base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const logo = require('./../assets/images/logo-UT-1.png');

const inputsArr = [{
    placeholder: "Nombre",
    name: "name",
},
{
    placeholder: "Categoría",
    name: "category",
},
{
    placeholder: "Modelo",
    name: "model",
},
{
    placeholder: "Marca",
    name: "brand",
},
{
    placeholder: "Área",
    name: "area",
},
{
    placeholder: "Status",
    name: "status",
},
{
    placeholder: "Número de serie",
    name: "serialNumber",
}]

const Register = ({ navigation }) => {
    const [input, setInput] = React.useState([{
        name: ""
    }]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                {
                    inputsArr.map(({ name, placeholder }, i) => {
                        return <Input
                            key={i}
                            value={input[name]}
                            keyboardAppearance="light"
                            autoFocus={false}
                            autoCorrect={false}
                            returnKeyType="next"
                            inputStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, padding: 10, color: "#fff" }}
                            placeholder={placeholder}
                            containerStyle={{
                                borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                            }}
                            inputContainerStyle={{ borderBottomColor: "transparent" }}
                            onChangeText={(text) => setInput([{
                                name: text
                            }])}
                        />
                    })
                }
                <Button
                    buttonStyle={styles.loginButton}
                    activeOpacity={0.8}
                    title="GUARDAR"
                    titleStyle={styles.loginTextButton}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 35,
        paddingBottom: 75
    },
    loginTextButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#2aa7cd',
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    titleContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 20
    },
    formContainer: {
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    helpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register;

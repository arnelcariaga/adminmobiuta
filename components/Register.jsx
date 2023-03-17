import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import { Input, Button, Icon, Avatar } from '@rneui/base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const logo = require('./../assets/images/logo-UT-1.png');

const Register = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [username, setUsernem] = React.useState('');
    const [password, setPassword] = React.useState('');
    const usernameInput = React.useRef(null);
    const emailInput = React.useRef(null);
    const passwordInput = React.useRef(null);

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
                <View style={styles.formContainer}>
                    <Text style={{ marginBottom: 50, fontSize: 23, fontWeight: "bold", color: "#2aa7cd" }}>Registro</Text>
                    <Input
                        leftIcon={
                            <Icon
                                name="user-o"
                                type="font-awesome"
                                color="#302c72"
                                size={25}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        }
                        value={username}
                        keyboardAppearance="light"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        inputStyle={{ marginLeft: 10, color: '#302c72' }}
                        placeholder="Nombre"
                        containerStyle={{
                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                        }}
                        inputContainerStyle={{ borderBottomColor: "#302c72" }}
                        ref={usernameInput}
                        onSubmitEditing={() => passwordInput.current.focus()}
                        onChangeText={(text) => setUsernem(text)}
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name="envelope-o"
                                type="font-awesome"
                                color="#302c72"
                                size={25}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        }
                        value={email}
                        keyboardAppearance="light"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        inputStyle={{ marginLeft: 10, color: '#302c72' }}
                        placeholder="Correo"
                        containerStyle={{
                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                        }}
                        inputContainerStyle={{ borderBottomColor: "#302c72" }}
                        ref={emailInput}
                        onSubmitEditing={() => passwordInput.current.focus()}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name="lock"
                                type="simple-line-icon"
                                color="#302c72"
                                size={25}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        }
                        value={password}
                        keyboardAppearance="light"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        returnKeyType="done"
                        blurOnSubmit={true}
                        containerStyle={{
                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                        }}
                        inputContainerStyle={{ borderBottomColor: "#302c72" }}
                        inputStyle={{ marginLeft: 10, color: '#302c72' }}
                        placeholder="Contrase&ntilde;a"
                        ref={passwordInput}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button
                        buttonStyle={styles.loginButton}
                        activeOpacity={0.8}
                        title="REGISTRARSE"
                        titleStyle={styles.loginTextButton}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>

                <View style={styles.helpContainer}>
                    <Text style={[styles.loginTextButton, { marginBottom: 15, marginTop: 10 }]}>Ya tienes una cuenta?</Text>
                    <Button
                        title="INGRESAR"
                        buttonStyle={[styles.loginButton, { backgroundColor: "#23965f" }]}
                        activeOpacity={0.8}
                        titleStyle={styles.loginTextButton}
                        onPress={() => navigation.navigate('Login')}
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
        backgroundColor: "#302c72",
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
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
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

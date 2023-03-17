import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import { Input, Button, Icon, Avatar } from '@rneui/base';
import Constants from "expo-status-bar";

const SCREEN_WIDTH = Dimensions.get('window').width;
const logo = require('./../assets/images/logo-UT-1.png');

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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
                <Text style={{ marginBottom: 50, fontSize: 23, fontWeight: "bold", color: "#2aa7cd" }}>Iniciar sesi&oacute;n</Text>
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
                    placeholder="Usuario"
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
                        marginTop: 16,
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
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    activeOpacity={0.8}
                    title="INGRESAR"
                    titleStyle={styles.loginTextButton}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.helpContainer}>
                <Text style={[styles.loginTextButton, { marginBottom: 15 }]}>¿No tienes cuenta?</Text>
                <Button
                    title="REG&Iacute;STRATE"
                    buttonStyle={[styles.loginButton, { backgroundColor: "#23965f" }]}
                    activeOpacity={0.8}
                    titleStyle={styles.loginTextButton}
                    onPress={() => navigation.navigate('Register')}
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
        paddingTop: 25,
        paddingBottom: 40
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
    },
    formContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 32,
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

export default Login;

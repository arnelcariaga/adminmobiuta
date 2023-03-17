import { View, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Text, Card, Button } from "@rneui/base";

function Profile() {
    return (
        <View style={styles.container}>

            <ImageBackground source={require("./../assets/images/bg_screen2.jpg")} style={styles.photoContainer}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={require("./../assets/images/user-hp.png")}
                />
                <Text style={styles.usernameTxt}>Abdiel Hernandex Salgado</Text>
            </ImageBackground>

            <Card containerStyle={{ backgroundColor: "transparent", borderColor: "gray", borderWidth: 0.5 }}>
                <View>
                    <Text style={styles.userTypeTitle}>Tipo de usuario</Text>
                    <Text style={styles.userTypeDescription}>Administrador</Text>
                </View>

                <View style={{ marginTop: 35 }}>
                    <Text style={styles.userTypeTitle}>Puesto</Text>
                    <Text style={styles.userTypeDescription}>Gerente</Text>
                </View>
            </Card>

            <Card containerStyle={{ backgroundColor: "transparent", borderWidth: 0, elevation: 0, marginTop: 50 }}>
                <Button title="Ver tu informaci&oacute;n"  />
            </Card>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#302c72",
    },
    photoContainer: {
        alignItems: "center",
        paddingVertical: 40,
    },
    usernameTxt: {
        color: "#fff",
        fontSize: 21,
        fontWeight: "700",
        marginTop: 10
    },
    userTypeTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#fff"
    },
    userTypeDescription: {
        color: "gray"
    }
})
export default Profile
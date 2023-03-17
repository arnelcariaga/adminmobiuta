import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import RegisterForniture from "./RegisterForniture"
import ViewForniture from "./ViewForniture"
import Settings from "./Settings"

const Stack = createNativeStackNavigator();

function Screens() {
    return (
        <Stack.Navigator initialRouteName="Register" screenOptions={{
            statusBarColor: "#302c72"
        }}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Inicio",
                    headerStyle: {
                        backgroundColor: "#302c72",
                    },
                    headerTitleStyle: {
                        color: "lightgray",
                    },
                    headerTintColor: "lightgray",
                }}
            />
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                    title: "Perfil",
                    headerStyle: {
                        backgroundColor: "#302c72",
                    },
                    headerTitleStyle: {
                        color: "lightgray",
                    },
                    headerTintColor: "lightgray",
                }}
            />
            <Stack.Screen
                name="registerForniture"
                component={RegisterForniture}
                options={{
                    title: "Registrar mobiliario",
                    headerStyle: {
                        backgroundColor: "#302c72",
                    },
                    headerTitleStyle: {
                        color: "lightgray",
                    },
                    headerTintColor: "lightgray",
                }}
            />
            <Stack.Screen
                name="viewForniture"
                component={ViewForniture}
                options={{
                    title: "Lista de mobiliarios",
                    headerStyle: {
                        backgroundColor: "#302c72",
                    },
                    headerTitleStyle: {
                        color: "lightgray",
                    },
                    headerTintColor: "lightgray",
                }}
            />
            <Stack.Screen
                name="settings"
                component={Settings}
                options={{
                    title: "Configuración general",
                    headerStyle: {
                        backgroundColor: "#302c72",
                    },
                    headerTitleStyle: {
                        color: "lightgray",
                    },
                    headerTintColor: "lightgray",
                }}
            />
        </Stack.Navigator>
    );
}

export default Screens
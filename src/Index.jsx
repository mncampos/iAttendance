import React from 'react';
// import { View } from 'react-native';git 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen} from './navigations/navigations.loginScreen';
import { ReportsScreen } from './navigations/navigations.reportsScreen';
import { CheckInScreen } from './navigations/navigations.checkInScreen';
import { SettingsScreen} from './navigations/navigations.settingsScreen';
import { QRScreen } from './navigations/navigations.readQRscreen';
import { ClassDetails } from './components/moléculas/classDetails'

//Índice da aplicação, aqui estão localizadas as rotas

const Stack = createNativeStackNavigator();

export default function Index() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions = {{ 
                headerStyle: {
                    backgroundColor:'#6461FF'
                },
                headerTintColor: 'white',
            }}>
                <Stack.Screen 
                    name="LoginScreen"
                    component={LoginScreen} 
                    options={{ title: 'Login' }}
                />
                <Stack.Screen 
                    name="ReportsScreen" 
                    component={ReportsScreen} 
                    options={{ title: 'Relatórios' }}
                />
                <Stack.Screen 
                    name="SettingsScreen" 
                    component={SettingsScreen}
                />
                <Stack.Screen 
                    name="CheckInScreen" 
                    component={CheckInScreen} 
                    options={{title: 'CheckIn'}}
                />
                <Stack.Screen 
                    name="QRScreen" 
                    component={QRScreen} 
                    options={{title: 'Leitura do QRCode'}}
                />
                <Stack.Screen 
                    name="ClassDetails" 
                    component={ClassDetails} 
                    options={{title: 'Class Details'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
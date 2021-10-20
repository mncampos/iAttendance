import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen} from './navigations/navigations.loginScreen';
import { ReportsScreen } from './navigations/navigations.reportsScreen';
import { CheckInScreen } from './navigations/navigations.checkInScreen';
import { SettingsScreen} from './navigations/navigations.settingsScreen';
import { QRScreen } from './navigations/navigations.readQRscreen';
import { CodeScreen } from './navigations/navigations.generateCodeScreen';
import { NewCheckInScreen } from './navigations/navigations.newCheckInScreen';
import { EditScreen } from './navigations/navigations.editScreen';
//Índice da aplicação, aqui estão localizadas as rotas

const Stack = createNativeStackNavigator();


export default function Index()
{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions = {{ 
                headerStyle: {
                    backgroundColor:'#6461FF'
                },
                headerTintColor: 'white',

            }}>

                <Stack.Screen name="LoginScreen"  component={LoginScreen}   options={{ title: 'Login' }}/>
                <Stack.Screen name="ReportsScreen" component={ReportsScreen} options={{ title: 'Relatórios' }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configurações'}}/>
                <Stack.Screen name="CheckInScreen" component={CheckInScreen} options={{title: 'Check In'}}/>
                <Stack.Screen name="QRScreen" component={QRScreen} options={{title: 'Leitura do QRCode', headerShown: false}}/>
                <Stack.Screen name="CodeScreen" component={CodeScreen} options={{title: 'Compartilhar'}}/>
                <Stack.Screen name="EditScreen" component={EditScreen} options={{title: 'Editar'}}/>
                <Stack.Screen name="NewCheckInScreen" component={NewCheckInScreen} options={{title: 'Novo Check In'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}
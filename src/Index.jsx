import React from 'react';
<<<<<<< HEAD
// import { View } from 'react-native';
=======
>>>>>>> main
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen} from './navigations/navigations.loginScreen';
import { ReportsScreen } from './navigations/navigations.reportsScreen';
import { CheckInScreen } from './navigations/navigations.checkInScreen';
import { SettingsScreen} from './navigations/navigations.settingsScreen';
import { QRScreen } from './navigations/navigations.readQRscreen';
<<<<<<< HEAD
import { ClassDetails } from './components/moléculas/classDetails'

=======
import { CodeScreen } from './navigations/navigations.generateCodeScreen';
import { NewCheckInScreen } from './navigations/navigations.newCheckInScreen';
import { EditScreen } from './navigations/navigations.editScreen';
import { ProfessorMainScreen } from './navigations/navigations.professorMainScreen';
>>>>>>> main
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
<<<<<<< HEAD
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
=======
                <Stack.Screen name="LoginScreen"  component={LoginScreen}   options={{ title: 'Login' }}/>
                <Stack.Screen name="ReportsScreen" component={ReportsScreen} options={{ title: 'Relatórios' }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configurações'}}/>
                <Stack.Screen name="CheckInScreen" component={CheckInScreen} options={{headerShown: false}}/>
                <Stack.Screen name="QRScreen" component={QRScreen} options={{title: 'Leitura do QRCode', headerShown: false}}/>
                <Stack.Screen name="CodeScreen" component={CodeScreen} options={{title: 'Compartilhar'}}/>
                <Stack.Screen name="EditScreen" component={EditScreen} options={{title: 'Editar'}}/>
                <Stack.Screen name="ProfessorMainScreen" component={ProfessorMainScreen} options={{headerShown: false}}/>
                <Stack.Screen name="NewCheckInScreen" component={NewCheckInScreen} options={{title: 'Novo Check In'}}/>
>>>>>>> main
            </Stack.Navigator>
        </NavigationContainer>
    );

}
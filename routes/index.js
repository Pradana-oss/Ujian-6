import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {listData, tambahData, DetailData } from '../pages'

const Stack = createStackNavigator();

const Routes = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen name="Tambah Data" component={tambahData}></Stack.Screen>
           <Stack.Screen name="List Data" component={listData}></Stack.Screen>
           <Stack.Screen name="Detail Data" component={DetailData}></Stack.Screen>
    
           {/* <Stack.Screen name="Upload Data" component={UploadData}></Stack.Screen> */}
       </Stack.Navigator>
    );
}

export default Routes;
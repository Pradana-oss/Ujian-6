import React, {useState, PureComponent} from 'react';
import {View, Text, TextInput, TouchableHighlight,Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import axios from 'axios'

const { response } = require("express");
const { set } = require("mongoose");



const tambahData = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const GoTo = () => {
        navigation.navigation("List Data");
    }
    
    const Simpan = () => {
        const data = new FormData();
            data.append('username', username);
            data.append('email', email);
            data.append('phone', phone);
            data.append('address', address);
            axios.post("http://192.168.100.6:3000/regis", data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }   
            })
                .then(function(reponse){
                    alert(JSON.stringify(response))
                    setUsername("");
                    setEmail("");
                    setPhone("");
                    setAddress("");
                    
                })
                .catch(function (error) {
                    alert(error)
                    console.log(error);
                });
    }
    return (
        <View>
                <Text style={{textAlign: 'center', margin: 10}}> Form Input Mahasiswa</Text>
                <TextInput placeholder="Masukkan Username" style={{borderWidth: 1, marginBottom: 5}} value={username} onChangeText={(value) => setUsername(value)}></TextInput>
                <TextInput placeholder="Masukkan Email" style={{borderWidth: 1, marginBottom: 5}}value={email} onChangeText={(value) => setEmail(value)}></TextInput>
                <TextInput placeholder="Masukkan Phone" style={{borderWidth: 1, marginBottom: 5}}value={phone} onChangeText={(value) => setPhone(value)}></TextInput>
                <TextInput placeholder="Masukkan Address" style={{borderWidth: 1, marginBottom: 5}}value={address} onChangeText={(value) => setAddress(value)}></TextInput>
                
                <TouchableHighlight onPress={Simpan} style={styles.btnSimpan}>
                <Text style={styles.textBtn} >Simpan</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={GoTo} style={styles.btnSimpan}>
                <Text style={styles.textBtn} >Lihat Data</Text>
                </TouchableHighlight>

        </View>
    )
}

export default tambahData;

const styles = StyleSheet.create({
    btnSimpan:{
        backgroundColor: 'lightblue',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
      },
      textBtn : {
        fontSize :20,
        color : 'white'
      },
      delete : {
          fontSize: 20,
          fontWeight : 'bold',
          color : 'red',
          marginRight:10
      },
      itemContainer : {
          flexDirection:'row',
          marginBottom:20
      },
      desc : {
          marginLeft:18,
          flex:1
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
})
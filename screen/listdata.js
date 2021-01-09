import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert, StyleSheet, Image, TouchableOpacity} from 'react-native';
import axios from 'axios'
import CardView from 'react-native-cardview'

const listData = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    useEffect(() => {
        getData();
    },[]);

    const gotoDetail = (item) => {
        setSelectedUser(item);
       navigation.navigate("Detail Data",  {
           itemUsername : item.username,
           itemEmail: item.email,
           itemPhone : item.phone,
           itemAddress : item.address
         });
   }

   const getData = () => {
    axios.get("http://192.168.100.6:3000/regis")
    .then(res => {
        const mahasiswa= res.data.data;
        console.log("tes : "+JSON.stringify(res.data.data));
        setUsers(mahasiswa);
    })
    .catch(function(error) {
        alert(error)
        console.log(error);
    });

    return (
        <ScrollView>
             {users.map((mahasiswa, i) => {
                return (
                        <CardView
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}
                            margin={10}>
                            <View style={styles.itemContainer}>
                            
                            <View style={styles.desc}>
                            <TouchableOpacity onPress={() => gotoDetail(mahasiswa)}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Username : {mahasiswa.username}</Text>
                            </TouchableOpacity>
                                <Text>Email : {mahasiswa.email}</Text>
                                <Text>Phone : {mahasiswa.phone}</Text>
                                <Text>Address : {mahasiswa.address}</Text>
                            </View>
                            </View>
                            {/* <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={()=> goToEdit(mahasiswa)}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 150}}>UBAH </Text>
                                    </TouchableOpacity>
                                <TouchableOpacity onPress={() => Alert.alert('Peringatan', 'Apakah anda ingin menghapus data ini?',
                                [
                                    {
                                        text: "Tidak", onPress: () => console.log("Button Tidak")
                                    },
                                    {
                                        text: "Ya", onPress: () => deleteItem(mahasiswa)
                                    },
                                ])}>
                                    <Text style={styles.delete}> HAPUS</Text>

                                </TouchableOpacity>                    
                            </View> */}
                        
                    </CardView>
                       )
                })}
                </ScrollView>
          )
}
}

export default listData;

const styles = StyleSheet.create({
    btnSimpan:{
        backgroundColor: 'lightblue',
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
      }
})
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";


const DetailData = ({ route, navigation }) => {
    const { itemUsername, itemEmail, itemPhone, itemAddress } = route.params;
  
  const [username, setUsername] = useState(itemUsername);
  const [email, setEmail] = useState(itemEmail);
  const [phone, setPhone] = useState(itemPhone);
  const [address, setAddress] = useState(itemAddress);
  const [users, setUsers] = useState([]);

  return (
    <View>
      <Text style={{ textAlign: "center", margin: 10 }}>  
        Detail Mahasiswa
      </Text>
  
                <Text style={{ textAlign: "left", margin: 10 }}> Username : {username}</Text>
                <Text style={{ textAlign: "left", margin: 10 }}> Email : {email}</Text>
                <Text style={{ textAlign: "left", margin: 10 }}> Phone : {phone}</Text>
                <Text style={{ textAlign: "left", margin: 10 }}> Address : {address}</Text>
                <View style={{flexDirection: 'row'}}>
                {/* <Text style={{ textAlign: "left", margin: 10 }}>Foto </Text> */}
                {/* <Image
                style={{margin:10, width: 100, height: 100, marginLeft: 20, marginTop:10}}
                source={{uri: imagePicture}} /> */}
                {/* <Image
                    source={{ uri: image.uri }}
                    style={{ width: 300, height: 300 }}
                  /> */}

                </View>
     
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
  btnSimpan: {
    backgroundColor: "lightblue",
    padding: 10,
    alignItems: "center"
  },
  textBtn: {
    fontSize: 20,
    color: "white"
  },
  delete: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginRight: 10
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  desc: {
    marginLeft: 18,
    flex: 1
  }
});
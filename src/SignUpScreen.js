import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


const SignUp = ({ navigation })=>  {
  
        return (
          <View style={styles.container}>
       <Image
                source={{
                  uri: 'https://static.wixstatic.com/media/abbd71_63f0b674c9b948848056262f1b4432ec~mv2.png/v1/fill/w_254,h_159,al_c,usm_0.66_1.00_0.01/collab1.png',
                }}
                style={{ width: 100, height: 100, padding: 17, margin: 5 }}
              />
            <Text>Sign Up:</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 10,
                padding: 5,
              }}
              defaultValue="First Name"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 10,
                padding: 5,
              }}
              defaultValue="Last Name"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 10,
                padding: 5,
              }}
              defaultValue="Email Address"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 10,
                padding: 5,
              }}
              defaultValue="Username"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 5,
                margin: 10,
              }}
              defaultValue="Password"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 5,
                margin: 10,
              }}
              defaultValue="Phone Number (optional)"
            />
            <StatusBar style="auto" />
            <Button
              onPress={() => console.log("User submits data")} title="Submit" />
          </View>
        
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

export default SignUp; 

// horizontal
// showsHorizontalScrollIndicator={false}
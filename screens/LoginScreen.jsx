import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email.trim(), password.trim()).then((userCredentials) => {
            const user = userCredentials.user
            console.log("Registered with",user.email)
        }).catch((error) => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email.trim(), password.trim()).then((userCredentials) => {
            const user = userCredentials.user
            console.log("Logged in with", user.email)
        }).catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Text style={styles.header}>ReadingList</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Email" 
            value={email} 
            onChangeText={text => setEmail(text)} 
            style={styles.input}
            />
            <TextInput 
            placeholder="Password" 
            value={password} 
            onChangeText={text => setPassword(text)} 
            style={styles.input}
            secureTextEntry
            />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={handleLogin}
                style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        justifyContent:'center',
        alignItems:'center',
        fontSize:50,
        paddingBottom:100,
        color:'#DDA0DD',
        fontWeight:"bold"
    },
    container: {
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'},

inputContainer:{
        width:'80%'
    },
input:{
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5
},
buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
},
button:{
    backgroundColor: '#DDA0DD',
    width:'100%',
    paddingVertical:15,
    borderRadius:10,
    alignItems:'center'
},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'purple',
    borderWidth:2
},
buttonOutlineText:{
    color:'#DDA0DD',
    fontWeight:'700',
    fontSize:16
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
}
})

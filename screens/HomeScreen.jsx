import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{navigation.replace("Login")})
        .catch((error) => {alert(error.message)})
    }
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity 
            onPress={handleSignOut}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        flex:1,
        alignItems:"center"
    },
    button:{
        backgroundColor: '#DDA0DD',
        width:'60%',
        paddingVertical:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    }
})

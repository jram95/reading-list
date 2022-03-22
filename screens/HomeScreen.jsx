import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
    const [menuStatus, setMenuStatus] = useState(false)

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{navigation.replace("Login")})
        .catch((error) => {alert(error.message)})
    }

    const handleMenu = () => {
        if (menuStatus){
            setMenuStatus(false)
        } else {
            setMenuStatus(true)
        }
    }

    return (
        <>
        {menuStatus ? <><View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleMenu}
                    ><Ionicons name="menu-outline" size={32} color="purple" />
                    </TouchableOpacity>
                    <Text style={styles.title}>ReadingList</Text>
                </View>
                    <View style={styles.container}>
                        <Text>Email: {auth.currentUser?.email}</Text>
                        <TouchableOpacity
                            onPress={handleSignOut}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Sign Out</Text>
                        </TouchableOpacity>
                    </View></> : 
                    <><View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleMenu}
                    ><Ionicons name="menu-outline" size={32} color="purple" />
                    </TouchableOpacity>
                    <Text style={styles.title}>ReadingList</Text>
                </View>
                <View style={styles.navPane}><FlatList
                style={styles.menuList}
                data={[
          {key: 'Home'},
          {key: 'My Books'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      /></View>
                    <View style={styles.container}>
                        <Text>Email: {auth.currentUser?.email}</Text>
                        <TouchableOpacity
                            onPress={handleSignOut}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Sign Out</Text>
                        </TouchableOpacity>
                    </View></>}
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    navPane:{
        backgroundColor:"white",
        paddingTop:20,
        paddingBottom:200,
        width:'25%',
        borderWidth:1,
    },
    title:{
        backgroundColor:"#DDA0DD",
        color:"purple",
        fontSize:20,
    },
    header:{
        backgroundColor:"#DDA0DD",
        color:"purple",
        padding:15,
        fontSize:20,
    },
    menuList:{
        color:"purple",
        fontSize:20,
        paddingLeft:12,
    },
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const FormMain = () => {

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
            <AntDesign name="arrowleft" size={40} color="black" />
            <Text style={styles.text}>Aply Job</Text>
            </View>

            <View style={styles.body}>
            <Text style={styles.textinput}>Full Name</Text>
            <Text style={styles.textinput}>Email</Text>
            <Text>Upload CV/Resume</Text>
            <Text>Motivation Letter(Optional)</Text>
            </View>

            <View style={styles.foot}>


            </View>

        </View>
    )
}

export default FormMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#ffff',
    },
    header: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'flex-end'   
    },
    body: {
        flex: 10,
        backgroundColor: '#C09553',
    },
    foot: {
        flex: 1,
       
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#8AB4F8',


    }, text:{
        fontSize: 34,
        fontStyle: 'normal',
        paddingLeft:'10%',
        fontWeight:'bold'
    },
    textinput:{
        fontSize: 16,
    }
});


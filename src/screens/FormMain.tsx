import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FormText from '../components/FormText';

const FormMain = () => {

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <AntDesign name="arrowleft" size={28} color="black" />
                <Text style={styles.text}>Aply Job</Text>
            </View>

            <View style={styles.body}>

                <FormText texto='Full Name' />
                <TextInput style={styles.input1} ></TextInput>
                <FormText texto='Email' />
                <TextInput style={styles.input1}></TextInput>
                <FormText texto='Upload CV/Resume' />
                <TextInput style={styles.input2}></TextInput>
                <FormText texto='Motivation Letter(Optional)' />
                <TextInput style={styles.input3}></TextInput>

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
        alignItems: 'flex-end'
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


    }, text: {
        fontSize: 28,
        fontStyle: 'normal',
        paddingLeft: '10%',
        fontWeight: 'bold'
    },
    input1: {
        backgroundColor: '#FAFAFA',
        borderRadius: 40,
        padding: 14,
        textAlign: 'left',
        fontSize: 22,
        color: '#004445',
        width:'90%',
        marginTop:10,
        
    },
    input2: {
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 40,
        textAlign: 'left',
        fontSize: 22,
        color: '#004445',
        width:'90%',
        marginTop:10
    },
    input3: {
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 80,
        textAlign: 'left',
        fontSize: 22,
        color: '#004445',
        width:'90%',
        marginTop:10
    }

});


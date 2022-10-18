import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FormText from '../components/FormText';
import { FontAwesome5 } from '@expo/vector-icons';

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
                <TextInput style={styles.input1} placeholder={'Full Name'} ></TextInput>
                <FormText texto='Email' />
                <TextInput style={styles.input1} placeholder={'Email'}></TextInput>
                <FormText texto='Upload CV/Resume' />
                <TextInput style={styles.input2}><FontAwesome5 name="file-upload" size={40} color="#3174FE" /></TextInput>
                <FormText texto='Motivation Letter(Optional)' />
                <TextInput style={styles.input3} placeholder={'Motivation Letter...'}></TextInput>

            </View>

            <View style={styles.foot}>

                <TouchableOpacity

                    style={styles.botonSubmit}
                >
                    <Text style={styles.textbotonSubmit}>Submit</Text>

                </TouchableOpacity>
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
        justifyContent: 'flex-start',
        textAlign: 'left',

    },
    foot: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    }, text: {
        fontSize: 28,
        fontStyle: 'normal',
        paddingLeft: '10%',
        fontWeight: 'bold',

    },
    input1: {
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 14,
        textAlign: 'left',
        fontSize: 18,
        color: '#004445',
        width: '90%',
        marginTop: 10,
        marginLeft: 20

    },
    input2: {
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 40,
        fontSize: 18,
        color: '#004445',
        width: '90%',
        marginTop: 10,
        marginLeft: 20,
        alignItems: 'flex-end',

    },
    input3: {
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 80,
        textAlign: 'right',
        fontSize: 18,
        color: '#004445',
        width: '90%',
        marginTop: 10,
        marginLeft: 20
    },
    botonSubmit: {
        backgroundColor: '#3062C8',
        borderRadius: 37,
        width: '100%',
        paddingVertical: 7,
        marginTop: 2,
        height:'80%'
    },
    textbotonSubmit: {
        color: '#ffff',
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        fontStyle:'normal'
    },

});


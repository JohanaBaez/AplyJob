import { StyleSheet, Text, View } from 'react-native';
import User from '../components/FormText';

interface Props{
    texto: string;
}
const FormText = ({texto}:Props)=>{

    return(
        <View>
           <Text style={styles.textinput}>{texto}</Text>
        </View>
    )
}

export default FormText;

const styles = StyleSheet.create({

    textinput:{
        fontSize: 16,
        marginTop:10,
    }
});


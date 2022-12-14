import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    Logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonOff : {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
    },

    ButtonOn : {
        marginTop: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
    },

    
    ButtonText : {
        color: '#fff',
        fontSize: 25,
        textTransform: 'uppercase',
    },
})

export default styles;
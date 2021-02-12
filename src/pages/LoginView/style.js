import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    main: {
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: '90%',
        backgroundColor: '#fff',
        
        marginTop: Constants.statusBarHeight + 5 ,
        borderRadius: 10
        
    },

    btnLogar: {
        backgroundColor: 'black',
        
        width: 180,
        height: 45,
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
        
        height: 10,
        },
        elevation: 10
    }, 
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 4,
          height: 10,
        },
        elevation: 10
      },
    submitText: {
        color: 'white',
        
        fontSize: 18
    },
    containerLogo: {
        justifyContent: 'center',
        marginBottom: '45%'
      },
    btnSubmit: {
        backgroundColor: '#2e2590',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 4,
          height: 10,
        },
        elevation: 10
      },

    logo: {
        width: 225,
        height: 125
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '20%',
        marginTop: '-10%'
      },

})

export default styles;
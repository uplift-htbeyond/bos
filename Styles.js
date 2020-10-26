import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        flex: 1,
        borderColor: '#AA0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24
    }
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//  },
//  welcome: {fontSize: 20, textAlign: 'center', margin: 10, color: '#FFFFFF'},
//  touchable: {borderRadius: 100},
//  button: {
//    backgroundColor: '#ff0000',
//    borderRadius: 100,
//    height: 200,
//    width: 200,
//    justifyContent: 'center'
//  },
//  accentText: {
//      fontWeight: 'bold',
//      fontSize: 18,
//      color: 'blue'
//  }
});


export default styles;
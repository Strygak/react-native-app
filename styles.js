import { StyleSheet } from 'react-native'; 

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    margin: 4, 
    width: 76, 
    height: 76, 
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  operationButton: {
    backgroundColor: '#009999'
  },
  deleteButton: {
    width: 160, 
    height: 60
  },
  default: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  text: {
    padding: 10, 
    fontSize: 42, 
    textAlign: 'right'
  },
  keyboard: {
    flex: 2, 
    backgroundColor: 'skyblue',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapper: {
    justifyContent: 'center', 
    flex: 1
  }
});

export default Styles;
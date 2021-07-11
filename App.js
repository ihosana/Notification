import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {notificationManager} from './src/Notification'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './src/pages/Index.js'
import Detalhes from './src/pages/Detalhes.js'

const Stack = createStackNavigator()
const notificador = notificationManager;

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.localNotify = notificationManager
    this.localNotify.configure()
    this.localNotify.criarcanal()
    this.localNotify.agendarNotificacao()
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "Cupons",
      "Vamos!!! já se há cupom disponível",
      {}, // data
      {} // options
    )
  }
  
  render() {
    
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{title: 'ifood'}} styles={{backgroundColor:'red'}}>
            {({navigation}) => {notificador.setNavigador(navigation); return(<Index navegador={navigation} enviarNotificacao={this.onPressSendNotification} />)}}
          </Stack.Screen>
          <Stack.Screen name="Detalhes" options={{title: 'Detalhes'}}>
            {({navigation}) => {return(<Detalhes navegador={navigation} />)}}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    width: 200,
    marginTop: 10
  }
});
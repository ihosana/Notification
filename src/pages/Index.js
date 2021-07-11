import React,{Component} from 'react'
import {View, Button, Text, TouchableHighlight, TouchableOpacity, Image} from 'react-native'

export default function Index(props)
{ 
    
let ifood = require ('../png/logo.png');
    return(
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
          {/*  <Button title="Testar notificação" onPress={ () => props.enviarNotificacao()}></Button>*/}
          
          {/*  <TouchableOpacity style={{backgroundColor:"white", padding:10, width:130, borderRadius:10}} onPress={ () => props.enviarNotificacao()}>
                <Text style={{padding: 5, marginLeft:15, fontSize:20}}>Testar</Text>
            </TouchableOpacity>*/}
            <Image style={{width:300, height:200}} source={ifood} />
           </View>
    )
}

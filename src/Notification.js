
import PushNotification from "react-native-push-notification"
let navegador;
class Notification {

    setNavigador(novoConteudo){
    navegador= novoConteudo
    }
    criarcanal=()=>{
        PushNotification.createChannel(
            {
              channelId: "channel-id", // (required)
              channelName: "My channel", // (required)
              channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
              playSound: false, // (optional) default: true
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );
        
    }
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
              },
            onNotification: function (notification) {
            console.log("[NotificationManager] onNotification:", notification);
            navegador.navigate('Detalhes')
           
           //notification.finish(PushNotificationIOS.FetchResult.NoData);

            },
            onAction: function(notification){
                console.log('ACTION', notification.action)
            }
        })
    }

    // É aqui que nossa notificação para o Android é construida
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            channelId:"channel-id",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data            
        }
    }

    // Fução que exibe a notificação
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Propriedades do Android */
            ...this.buildAndroidNotification(id, title, message, data, options),

            /* Propriedades do Android e iOS */
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    // Função que cancela todas notiificações e limpa as que estão no centro de notificações
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }
    agendarNotificacao(){
        PushNotification.localNotificationSchedule({
            id:2,
            title:"Novo cupom",
            channelId:'channel-id',
            message: "Vamos lá!!! já tem cupons disponíveis ",
            date: new Date(Date.now() + 5 * 1000),
            allowWhileIdle: false,
            repeatTime: 5 * 1000,
            repeatTime: 'time'
        });
        PushNotification.localNotificationSchedule({
            id:3,
            title:"Frase humorística😂",
            channelId:'channel-id',
            message: "Te dei o sol de deu o mar pra ganhar teu macarrão, vc é raio da salshicha meteoro da linquíça ",
            date: new Date(Date.now() + 10* 1000),
            allowWhileIdle: false,
            repeatTime: 10 * 1000,
            repeatTime: 'time'
        });
        PushNotification.localNotificationSchedule({
            id:4,
            title:"Disconto😲",
            channelId:'channel-id',
            message: "Um disconto imperdível no prato principal por 10,00$ por duas pessoas. Não perca! ",
            date: new Date(Date.now() + 15* 1000),
            allowWhileIdle: false,
            repeatTime: 15 * 1000,
            repeatTime: 'time'
        });
    }
}

export const notificationManager = new Notification();
            
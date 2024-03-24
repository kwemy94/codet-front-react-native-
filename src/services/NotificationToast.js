import Toast from "react-native-toast-message"

export const toastNotif = (type = 'success', message = 'Enregistré ! 👍') =>{
    Toast.show({
        type: `${type}`,
        text1: `${message}`
        // text2: 'Hello',
    });
}
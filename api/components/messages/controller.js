const store = require("./store");

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if (!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            id: store.list().length + 1,
            user,
            message,
            date: new Date()
          };
        console.log(fullMessage);
        resolve(fullMessage);
    });

}

/* function getMessages()
{
    return new Promise((resolve, reject)=>{
        resolve (store.list());
    })
} */
const getMessages = () => {
    return new Promise((resolve, reject) => {
        if(storage.list()){
            resolve(storage.list())
        }else {
            reject('No messages saved')
        }
    })
}

module.exports = {
    addMessage,
    getMessages,

};

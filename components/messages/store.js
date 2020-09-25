//const list =[];

const db = require('mongoose');
const Model = require('./model');
require('mongodb').MongoClient;

const user ='db_user_heriberto';
const pass = '1234';
const host = 'myCluster.mongodb.net';
const database = 'backendnode1';

const uri = 'mongodb+srv://db_user_heriberto:1234@cluster0.rhg1a.mongodb.net/backendnode1?retryWrites=true&w=majority';

db.Promise = global.Promise;
const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('[db connection] Database connected')
	})
	.catch( error => {
		console.error('[db connection] Connection failed', error.message) 
	});

    function addMessage(message) {
        const myMessage = new Model(message);
        myMessage.save();
    }

async function getMessages(){
    //return list;
   const messages = await Model.find();
     return messages;
}

module.exports={
    add : addMessage,
    list :getMessages,

}
const{MongoClient}=require('mongodb');
const uri='mongodb://localhost.27017';
const clie t =new MongoClient(url);
async function connnectToMongodB(){
    try{
        await client.connect();
        console.log("connected to mongoDB");
    }catch(err){
        console.log(err);
    }

}
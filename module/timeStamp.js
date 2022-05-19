const fs = require("fs");

module.exports.getTimeStamp = async (req,res,next) => {
    try{
        const timeResponse = await fs.createWriteStream('./timeStamp/current date-time.txt')
        timeResponse.write(`Current date and time: ${new Date()}`)
        res.send(timeResponse);
    }
    catch(err){
        console.log(err)
    }
}

module.exports.getTextFiles = async (req,res) => {
    try{
        const textFileResponse = await fs.readdir('./timeStamp',"utf8",(err,data) =>{
            console.log(data)})

        res.send(textFileResponse);
    }
    catch(err){
        console.log(err)
    }
}
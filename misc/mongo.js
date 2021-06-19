const mongoose = require('mongoose')

module.exports = async () => {
mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() =>{
    console.log('Connection to Project_nekoBot established.')
}).catch((err) =>{
    console.log(err)
});

return mongoose;
}
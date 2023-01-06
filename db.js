const mongoose = require('mongoose')

const url = `mongodb+srv://NitishLonka:Mongodb%40123@cluster0.1fxowiz.mongodb.net/TampaStores`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

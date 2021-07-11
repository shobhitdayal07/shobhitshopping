const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Shobhit:QlroIFYqQ5D6KmiT@cluster0.5j8si.mongodb.net/nodejspoc?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection with database successful")
}).catch((err) => {
    console.log("No connection with database")
})
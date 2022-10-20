const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/records", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Established connection with the db!")
    })
    .catch(err => {
        console.log("Something went wrong with connection to the db", err)
    });

const express = require('express');
require('dotenv').config();
const casteRouter = require('./src/routes/casteRoute');
const ethnicityRouter = require('./src/routes/ethnicityRoute');
const schoolRouter = require('./src/routes/school');
const connectDB = require('./src/utils/database');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/castes', casteRouter);
app.use('/ethnicities', ethnicityRouter);
app.use('/schools', schoolRouter);

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log("Your main service is ready")
        // console.log(process.env.MONGO_URL)
    });
}).catch((err)=>{
    console.log(err);
});

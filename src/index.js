const express = require('express');
const casteRouter = require('./routes/casteRoute');
const ethnicityRouter = require('./routes/ethnicityRoute');
const schoolRouter = require('./routes/school');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/castes', casteRouter);
app.use('/ethnicities', ethnicityRouter);
app.use('/schools', schoolRouter);


app.listen(port, ()=>{
    console.log("Your main service is ready")
});
import express, { response } from 'express'
import logger from './loggerWM.js'
import morgan from 'morgan';


const app = express();

const port = 3000;

// Morgan Start
// Format
const morganFormat = ':method :url :status :response-time ms';

// Small middleware //Keep in mind use it after app creation
// After creating an App you can enject the middleware.

app.use(morgan(morganFormat, {
    stream:{
        write:(message) => {
            const logObject = {
                method:message.split(' ')[0],
                url:message.split(' ')[1],
                status:message.split(' ')[2],
                responseTime:message.split(' ')[3]
            };
            logger.info(JSON.stringify(logObject))
        }
    }
}));
// Morgan End

// Accepting data from the fontend

app.use(express.json())

let teaData = []
let nextId = 1

// Add new tea
app.post('/teas', (req, res) => {
    logger.warn("A POST request")
    // req.body.name
    // req.body.price
    // Destructuring the on the go, classic JavaScript
    console.log("POST");
    const {name, price} = req.body;

    // Creating a object, so that it can be saved in the db
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea);
    res.status(201).send(newTea);
})

// Get all teas
app.get('/teas', (req, res) => {
    res.status(200).send(teaData);
})

// Get a tea with ID
// parseInt: Anything comes from the params is string
app.get('/teas/:id', (req,res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id));
    if(!tea){
        return res.status(404).send('Tea not found');
    }
    res.status(200).send(tea);
})

// Update tea
app.put('/teas/:id', (req,res) => {
    const teaId = req.params.id;
    const tea = teaData.find(t => t.id === parseInt(req.params.id));
    
    if(!tea){
        return res.status(404).send('Tea not found');
    }

    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)
})

// Delete tea
app.delete('/teas/:id', (req,res) =>{
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send('tea not found')
    }
    teaData.splice(index, 1)
    return res.status(204).send('Deleted')
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}...`)
})


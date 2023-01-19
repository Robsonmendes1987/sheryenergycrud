import express from 'express'
import mongoose from 'mongoose'
import routers from './Routes/route';
import cors = require('cors')



// import express from 'express';
// import ErrorHandler from './Middlewares/ErrorHandler';
// import routes from './Routes/Routes';

// const App = express();
// App.use(express.json());
// App.use(cors());
// App.use(routers);
// // app.use(ErrorHandler.handle);

// export default App;



mongoose.connect('mongodb://localhost:27017')
.then(() => {
    const App = express();
    App.use(express.json());
    App.use(cors());
    App.use(routers)
    App.get('/', (req, res) => res.status(200).send('OK'))
    App.listen(3001, () => {console.log('rodando na porta 3001')})
 })
.catch(() => console.log('falha ao conectar no banco'))



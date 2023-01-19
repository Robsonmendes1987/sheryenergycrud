// src/server.ts

// import 'dotenv/config';
// import app from './app';
// import connectToDatabase from './model/Connection';

// const PORT = process.env.PORT || 3001;
// connectToDatabase()
// .then(() => {
//     app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
//     console.log('Connection with database generated an error:\r\n');
//     console.log('\r\nServer initialization cancelled');
//     process.exit(0);



    // mongoose.connect('mongodb://localhost:27017')
// .then(() => {
//     const App = express();
//     App.use(express.json());
//     App.use(routers)
//     // App.get('/', (req, res) => res.status(200).send('OK'))
//     App.listen(3001, () => {console.log('rodando na porta 3001')})
//  })
// .catch(() => console.log('falha ao conectar no banco'))
const express = require('express');

// Express Boilerplate
const server = express();
const router = express.Router();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// Routes
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Mounting Routes
server.use('/', router);

// Server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


const express = require('express');

// Express Boilerplate
const server = express();
const router = express.Router();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// Routes
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello ACMEats!' })
});

router.get('/orders', (req, res) => {
    const orders = [
        {
            id: 1,
            name: 'Pizza',
            restaurant: 'NY Pizza Suprema',
            location: '8th Ave & 31st St'
        },
        {
            id: 2,
            name: 'Pork Bun',
            restaurant: 'Mei Lai Wah',
            location: '64 Bayard St'
        },
    ]
    res.status(200).json({ orders });
});


server.use('/', router);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


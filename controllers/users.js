import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// GET /users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) throw err;
        res.json(users);
    });
    }
);

// POST /users
router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) throw err;
        res.json(user);
    });
}
);

// GET /users/:id
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
}
);
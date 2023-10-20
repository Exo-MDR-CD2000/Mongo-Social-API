const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    //updateThoughtById,
    //deleteThoughtById,
    //addReaction,
    //deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts

router.route('/')
    .get(getThoughts)
    .post(createThought);


// /api/thoughts/:id

router.route('/:id')
    .get(getThoughtById)
    //.put(updateThoughtById)
    //.delete(deleteThoughtById);


module.exports = router;
const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    deleteReactionById

} = require('../../controllers/thoughtController');


// /api/thoughts

router.route('/')
    .get(getThoughts)
    .post(createThought);


// /api/thoughts/:id

router.route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);


// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReactionById);


module.exports = router;


// so the full patch for thoughts is:

// http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
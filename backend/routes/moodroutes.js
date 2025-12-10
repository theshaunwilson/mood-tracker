const router = require('express').Router();
const moodController = require('../controllers/moodController');

router.get('/', moodController.getMoods);
router.post('/', moodController.createMood);
router.delete('/:id', moodController.deleteMood);

module.exports = router;

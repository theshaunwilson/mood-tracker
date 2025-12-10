const router = require('express').Router();
const moodController = require('../controllers/moodController');

router.get('/', moodController.getMoods);
router.get('/:id', moodController.getMoodById);
router.post('/', moodController.createMood);
router.put('/:id', moodController.updateMood);
router.delete('/:id', moodController.deleteMood);

module.exports = router;

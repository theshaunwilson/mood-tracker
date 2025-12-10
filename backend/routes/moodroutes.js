const router = require('express').Router();

router.get('/', moodController.getMoods);
router.post('/', moodController.createMood);
router.delete('/:id', moodController.deleteMood);

module.exports = router;

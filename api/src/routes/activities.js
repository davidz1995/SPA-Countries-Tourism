const {Router} = require('express');
const router = Router();
const {turisticActivityController} = require('../controllers/activities')

router.get('/', turisticActivityController.getAll),
router.post('/', turisticActivityController.add),
router.get('/:name', turisticActivityController.getByName),
//router.put('/:id', turisticActivityController.update),
router.delete('/:id', turisticActivityController.delete)

module.exports = router;
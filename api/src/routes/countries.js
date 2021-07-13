const {Router} = require('express');
const router = Router();
const {countryController} = require('../controllers/countries')

router.get('/', countryController.getAll),
router.get('/showAll', countryController.showAll)
router.get('/:id', countryController.getById),
//router.post('/', countryController.add),
//router.put('/:id', countryController.update),
router.delete('/:id',countryController.delete)

module.exports = router;
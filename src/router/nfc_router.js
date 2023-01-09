const express = require("express");
const card = require('../controllers/nfc_card_controllers');

const router = express();

router.post('/', card.AddCard);
router.get('/:id', card.getCardByUserId);
router.put('/update/:id', card.UpdateCard);
router.delete('/delete/:id', card.DeleteCard)


module.exports = router;


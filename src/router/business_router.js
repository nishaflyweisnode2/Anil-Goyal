const express = require('express');
const businesControllers  = require('../controllers/busniess_controller');



const router = express();


router.post('/business', businesControllers.addBusniessDetails);
router.get('/business/:id', businesControllers.getBusniessDetails);
router.put('/business/:id', businesControllers.updateBusniessDetails);
router.delete('/business/:id', businesControllers.DeleteBusinessDetails);
router.get('/business', businesControllers.getBusniessDetailsAll)





module.exports =  router;











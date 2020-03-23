const express = require('express');

const router = express.Router();

router.use('/',(req, res, next)=>{
    res.status(200).send('From details route. <br> Request hit time '+req.time+' <br> <Br> <a href="/"> back to index page</a>');
});

module.exports = router;
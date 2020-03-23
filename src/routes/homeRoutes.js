const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
    res.status(200).send('From home route. <br> Request hit time '+req.time+' <br> <Br> <a href="/"> back to index page</a>');
})

module.exports = router;
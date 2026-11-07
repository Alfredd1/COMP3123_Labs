const express = require('express');
const router = express.Router();
router.route("/")
    .get((request, response) => {
        response.send("Used GET method  - /books")
    })

module.exports = router
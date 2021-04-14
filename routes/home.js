express = require('express')
router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')


homeControler = require("../controllers/home")

router.get("/", ensureGuest, homeControler.renderHome )

router.get("/info", (req, res) => {

  res.end("Hello from /info")
})

module.exports = router

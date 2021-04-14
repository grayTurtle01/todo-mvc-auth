express = require('express')
passport = require('passport')
router = express.Router()

// @desc   Auth with Google
// @route  GET /auth/google
router.get("/google", passport.authenticate('google', {scope: ['profile']}))

// @desc   Google Callback
// @route  GET /auth/google/callback
router.get(
  "/google/callback",
  
  passport.authenticate('google', {failureRedirect: "/"}),
  
  (req, res) => {
    res.redirect("/todos")
  }
)

// @des   Logout user
// @route GET /auth/logout
router.get('/logout', (req,res) =>{
  req.logout()
  res.redirect('/')
})


module.exports = router

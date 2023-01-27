const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/github', (req, res) => {
    res.redirect('https://github.com/LavenderFoxxo')
})

router.get('/harmony', (req, res) => {
    res.redirect('https://weareharmony.net')
})

router.get('/twitter', (req, res) => {
    res.redirect('https://twitter.com/LavenderFolf')
})

module.exports = router;
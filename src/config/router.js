const user = require('../user/routes')

function router(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.use(
        user
    )

}

module.exports = router
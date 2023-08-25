const { findBy } = require('../users/user-model')

const checkLoginInputs = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        next({ status: 400, message: 'username and password required' })
    } else next()
}

const checkUsernameExists = async (req, res, next) => {
    const { username } = req.body
    try {
       const existingUser = await findBy({ username });
       if (existingUser) {
        next({ status: 400, message: 'username taken' })
       } else next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkLoginInputs,
    checkUsernameExists,
}
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.join = async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { email }});
        if (exUser) {
            return res.redirext('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch(error) {
        console.error(error);
        return next(error);
    };
}

// POST auth/login
exports.login = (req, res, next) => {};

exports.logout = (req, res) => {};
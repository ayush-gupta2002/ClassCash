import User from "../models/user.js";

export const registerUser = async (req, res, next) => {
    try {
        const { studentId = null, teacherId = null, email, password } = req.body;
        const user = new User({ email, studentId, teacherId });
        const newUser = await User.register(user, password);
        req.login(newUser, err => {
            if (err) {
                console.log('ERROR');
                return next(err);
            }
            // res.redirect('/');
            // res.send('User registered successfully');
            res.status(200).json(newUser);
        })
    }
    catch (e) {
        res.status(404).send(e);
    }
}

export const loginUser = async (req, res, next) => {
    // const redirectUrl = req.session.returnTo || '/home';
    // delete req.session.returnTo;
    res.status(201).send('User found');
}
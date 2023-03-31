const authDB = require("../Model/authModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register User
exports.registerUser = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await authDB.create(req.body);

        //success
        res.status(201).json({
            success: true,
            message: 'Register is successfully Done!',
            user
        })

    } catch (error) {
        res.status(400).json({
            message: 'Register fail please try aggain',
            error: error.message
        })
    }
}

// Get All users 
exports.getAllUsers = async (req, res, next) => {
    try {
        const user = await authDB.find();

        //success
        res.status(200).json({
            success: true,
            message: 'get all users',
            user
        })

    } catch (error) {
        res.status(400).json({
            message: 'users not found!',
            error: error.message
        })
    }
}

//Login user
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await authDB.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message2: 'you have no an account!'
            })
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(404).json({
                message2: "password doesn't match!"
            })
        }

        const token = jwt.sign({ email: user?.email, id: user?._id }, process.env.LOGIN_TOKEN_KEY, {
            expiresIn: '1h'
        })

        //success 
        res.status(200).json({
            success: true,
            message: 'Login successfully done!',
            user,
            token
        })

    } catch (error) {
        res.status(400).json({
            message: 'Login fail please try aggain!',
            error: error.message
        })
    }
}

//Update profile 
exports.updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = await authDB.findById(id);

        if (!userId) {
            return res.status(404).json({
                message: 'Id not found'
            })
        }
        const updateUser = await authDB.findByIdAndUpdate(id, req.body, {
            new: true
        })
        //success 
        res.status(201).json({
            success: true,
            message: "Profile update successfully Done!",
            updateUser
        })


    } catch (error) {
        res.status(400).json({
            message: 'Update fail please try aggain',
            error: error.message
        })
    }
}



//Active users 
exports.activeUser = (req, res) => {
    res.send(req.user)
}


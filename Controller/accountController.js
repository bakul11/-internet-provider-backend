const accountDB = require("../Model/accountModel");

//Post Account
exports.postAccount = async (req, res, next) => {
    try {
        const cost = await accountDB.create(req.body);

        //success
        res.status(201).json({
            success: true,
            message: 'Cost added successfully done!',
            cost
        })
    } catch (error) {
        res.status(400).json({
            message: 'Cost added fail please try aggain',
            error: error.message
        })
    }
}

//Get All Cost
exports.getAllAccount = async (req, res, next) => {
    try {
        const cost = await accountDB.find();
        //success
        res.status(201).send(cost);
    } catch (error) {
        res.status(400).json({
            messsage: 'Reseler not found!',
            error: error.message
        })
    }
}


//Delete Single Cost 
exports.removeAccount = async (req, res, next) => {
    try {
        const id = req.params.id
        const findIdRemove = await accountDB.findById(id);
        if (!findIdRemove) {
            return res.status(404).json({
                message: 'Cost Id not found!'
            })
        }

        const removeId = await accountDB.findByIdAndDelete(id);
        //success 
        res.status(200).json({
            success: true,
            message: 'Cost Remove is successfully done!',
            removeId
        })

    } catch (error) {
        res.status(400).json({
            messsage: 'Cost Remove fail please try aggain',
            error: error.message
        })
    }
}
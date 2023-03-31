const staffDB = require("../Model/staffModel");


//Post staff
exports.postStaff = async (req, res, next) => {
    try {
        const staff = await staffDB.create(req.body);

        //success
        res.status(201).json({
            success: true,
            message: 'Staff added successfully done!',
            staff
        })
    } catch (error) {
        res.status(400).json({
            message: 'Staff added fail please try aggain',
            error: error.message
        })
    }
}

//Get All Staff
exports.getAllStaff = async (req, res, next) => {
    try {
        const staff = await staffDB.find();
        //success
        res.status(201).send(staff);
    } catch (error) {
        res.status(400).json({
            messsage: 'Staff not found!',
            error: error.message
        })
    }
}


//Delete Single Staff 
exports.removeStaff = async (req, res, next) => {
    try {
        const id = req.params.id
        const findIdRemove = await staffDB.findById(id);
        if (!findIdRemove) {
            return res.status(404).json({
                message: 'Remove Id not found!'
            })
        }

        const removeId = await staffDB.findByIdAndDelete(id);
        //success 
        res.status(200).json({
            success: true,
            message: 'Staff Remove is successfully done!',
            removeId
        })

    } catch (error) {
        res.status(400).json({
            messsage: 'Staff Remove fail please try aggain',
            error: error.message
        })
    }
}
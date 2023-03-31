const areaDB = require("../Model/areaModel");

//Post Area
exports.postArea = async (req, res, next) => {
    try {
        const area = await areaDB.create(req.body);

        //success
        res.status(201).json({
            success: true,
            message: 'Area added successfully done!',
            area
        })
    } catch (error) {
        res.status(400).json({
            message: 'Area added fail please try aggain',
            error: error.message
        })
    }
}

//Get All Area
exports.getAllArea = async (req, res, next) => {
    try {
        const area = await areaDB.find();
        //success
        res.status(201).send(area);
    } catch (error) {
        res.status(400).json({
            messsage: 'Area not found!',
            error: error.message
        })
    }
}


//Delete Single Area 
exports.removeArea = async (req, res, next) => {
    try {
        const id = req.params.id
        const findIdRemove = await areaDB.findById(id);
        if (!findIdRemove) {
            return res.status(404).json({
                message: 'Remove Id not found!'
            })
        }

        const removeId = await areaDB.findByIdAndDelete(id);
        //success 
        res.status(200).json({
            success: true,
            message: 'Area Remove is successfully done!',
            removeId
        })

    } catch (error) {
        res.status(400).json({
            messsage: 'Area Remove fail please try aggain',
            error: error.message
        })
    }
}
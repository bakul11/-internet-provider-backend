const reselerDB = require("../Model/reselerModel");


//Post Reseler
exports.postReseler = async (req, res, next) => {
    try {
        const reseler = await reselerDB.create(req.body);

        //success
        res.status(201).json({
            success: true,
            message: 'Reseler added successfully done!',
            reseler
        })
    } catch (error) {
        res.status(400).json({
            message: 'Reseler added fail please try aggain',
            error: error.message
        })
    }
}

//Get All Reseler
exports.getAllReseler = async (req, res, next) => {
    try {
        const reseler = await reselerDB.find();
        //success
        res.status(201).send(reseler);
    } catch (error) {
        res.status(400).json({
            messsage: 'Reseler not found!',
            error: error.message
        })
    }
}


//Delete Single Reseler 
exports.removeReseler = async (req, res, next) => {
    try {
        const id = req.params.id
        const findIdRemove = await reselerDB.findById(id);
        if (!findIdRemove) {
            return res.status(404).json({
                message: 'Remove Id not found!'
            })
        }

        const removeId = await reselerDB.findByIdAndDelete(id);
        //success 
        res.status(200).json({
            success: true,
            message: 'Reseler Remove is successfully done!',
            removeId
        })

    } catch (error) {
        res.status(400).json({
            messsage: 'Reseler Remove fail please try aggain',
            error: error.message
        })
    }
}
const { User } = require('../models/user.model')

module.exports ={
    _getUser: async(req,res,next)=>{
        try {
            const { username, password } = req.body;
            const user = await User.find({username: username, password: password})
                .then(
                    res.status(200).json({ data: user })
                )
                .catch(err=>{
                    return res.status(400).json({data: "Could not find user"})
                })
            res.status(200).json({data: 'Get user route'})
        } catch (error) {
            res.status(400).json({data: "User not found"})
        }

    },

    _getServices: async(req,res,next)=>{
       try {
        res.status(200).json({data: 'Returning available Services'})
       } catch (error) {
            res.status(400).json({data: "Error in returning services"})
       }
    }
}
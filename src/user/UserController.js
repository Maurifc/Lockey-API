const User = require('./User')

class UserController {
    static listAll = async(req, res) => {
        const users = await User.find()
        
        res.send(users)
    }

    static getById = (req, res) => {
        User.findOne({ _id: req.params.id }, (error, user) => {
            if(!user)
                return res.status(404).send()
            
            res.send(user)
        })
    }

    static create = async (req, res) => {
        try {
            const user = new User(req.body)
            await user.save()

            res.status(201).send()
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static update = async(req, res) => {
        try {
            const user = await User.updateOne({ _id: req.params.id }, req.body)

            res.status(204).send()            
        } catch (error) {
            res.status(400).send({ message: error.message })            
        }
    }

    static delete = async(req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id })            
            
            res.sendStatus(204)
        } catch (error) {
            res.status(400).send({ message: error.message })               
        }

    }
}

module.exports = UserController
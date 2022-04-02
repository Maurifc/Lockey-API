const User = require('./User')
const tokenManager = require('./token')
const UserNotFound = require('../errors/UserNotFound')

class UserController {
    static listAll = async(req, res) => {
        const users = await User.find()
        
        res.send(users)
    }

    static getById = async(req, res, next) => {
        try {
            const user = await User.findOne({ _id: req.params.id })
            res.send(user)
            } catch (error) {
            next(error)    
        }
    }

    static create = async (req, res, next) => {
        try {
            //TODO: check input
            const user = new User(req.body)
            await user.save()

            res.status(201).send()
        } catch (error) {
            next(error)
        }
    }

    static update = async(req, res, next) => {
        try {
            //TODO: check input
            const user = await User.updateOne({ _id: req.params.id }, req.body)

            res.status(204).send()            
        } catch (error) {
            next(error)  
        }
    }

    static delete = async(req, res, next) => {
        try {
            await User.deleteOne({ _id: req.params.id })            
            
            res.sendStatus(204)
        } catch (error) {
            next(error)               
        }
    }

    static login = async(req, res) => {
        try {
            const token = tokenManager.create(req.user.id) // generates jwt token from user id
    
            res.set('Authorization', token)
    
            res.sendStatus(204)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
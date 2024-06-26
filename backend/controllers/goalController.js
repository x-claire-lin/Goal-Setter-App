const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@desc     Get all goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({user: req.user._id})
    res.status(200).json(goals)
})

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a goal')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user._id
    })

    res.status(200).json(goal)
})

//@desc     Update goal
//@route    PUT /api/goal/:id
//@access   Private
const updateGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== req.user._id.toString()){
        res.status(401)
        throw new Error('You are not authorized to update this goal')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateGoal)
})

//@desc     Delete goal
//@route    DELETE /api/goal/:id
//@access   Private
const deleteGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== req.user._id.toString()){
        res.status(401)
        throw new Error('You are not authorized to delete this goal')
    }

    await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
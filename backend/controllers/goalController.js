const asyncHandler = require('express-async-handler')

//@desc     Get all goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get all goals'})
})

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a goal')
    }

    res.status(200).json({message: 'Create a goal'})
})

//@desc     Update goal
//@route    PUT /api/goal/:id
//@access   Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal with id ${req.params.id}`})
})

//@desc     Delete goal
//@route    DELETE /api/goal/:id
//@access   Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goal with id ${req.params.id}`})
})

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
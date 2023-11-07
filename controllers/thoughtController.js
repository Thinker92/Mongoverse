const Thought = require('../models/Thought');
const User = require('../models/User');

// Get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get a single thought by id
const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Add a new thought
const addThought = async (req, res) => {
    
};

// Update a thought by id
const updateThought = async (req, res) => {
    
};

// Remove a thought by id
const removeThought = async (req, res) => {
    
};

// Add a reaction to a thought
const addReaction = async (req, res) => {

};

// Remove a reaction from a thought
const removeReaction = async (req, res) => {

};

module.exports = {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
};
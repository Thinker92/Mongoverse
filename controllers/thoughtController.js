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
    try {
        const newThought = await Thought.create(req.body);
        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: newThought._id } },
            { new: true }
        );
        res.status(200).json(newThought);
    } catch (error) {
        res.status(500).json(error);
    }

};

// Update a thought by id
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Remove a thought by id
const removeThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndRemove(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        await User.findOneAndUpdate(
            { thoughts: req.params.id },
            { $pull: { thoughts: req.params.id } },
            { new: true }
        );
        res.status(200).json({ message: 'Thought successfully deleted!' });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Add a reaction to a thought
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Remove a reaction from a thought
const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
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
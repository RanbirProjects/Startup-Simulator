const express = require('express');
const router = express.Router();
const Startup = require('../models/Startup');
const auth = require('../middleware/auth');

// @route   GET api/startups
// @desc    Get all startups for a user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const startups = await Startup.find({ owner: req.user.id });
        res.json(startups);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/startups
// @desc    Create a new startup
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const { name, goal } = req.body;

        const newStartup = new Startup({
            name,
            goal,
            owner: req.user.id,
            team: [
                {
                    role: 'Founder',
                    skill: 'Leadership',
                    salary: 0,
                    productivity: 0.8
                }
            ],
            development: {
                progress: 0,
                features: [
                    {
                        name: 'Initial Setup',
                        status: 'in-progress',
                        completion: 0
                    }
                ]
            }
        });

        const startup = await newStartup.save();
        res.json(startup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/startups/:id
// @desc    Get startup by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const startup = await Startup.findById(req.params.id);
        
        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        // Check if user owns the startup
        if (startup.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        res.json(startup);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Startup not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/startups/:id
// @desc    Delete a startup
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const startup = await Startup.findById(req.params.id);
        
        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        // Check if user owns the startup
        if (startup.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await startup.remove();
        res.json({ msg: 'Startup removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Startup not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router; 
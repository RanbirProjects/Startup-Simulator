const express = require('express');
const router = express.Router();
const SimulationEngine = require('../utils/simulationEngine');
const Startup = require('../models/Startup');
const auth = require('../middleware/auth');

// @route   POST api/simulation/step/:startupId
// @desc    Simulate one step for a startup
// @access  Private
router.post('/step/:startupId', auth, async (req, res) => {
    try {
        const startup = await Startup.findById(req.params.startupId);
        
        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        // Check if user owns the startup
        if (startup.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        const simulationEngine = new SimulationEngine(startup);
        const updatedStartup = await simulationEngine.simulateStep();
        
        // Save the updated startup
        await Startup.findByIdAndUpdate(
            req.params.startupId,
            { $set: updatedStartup },
            { new: true }
        );

        res.json(updatedStartup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/simulation/status/:startupId
// @desc    Get current simulation status
// @access  Private
router.get('/status/:startupId', auth, async (req, res) => {
    try {
        const startup = await Startup.findById(req.params.startupId);
        
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
        res.status(500).send('Server Error');
    }
});

module.exports = router; 
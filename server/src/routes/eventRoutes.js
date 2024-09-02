const express = require('express');
const Event = require('../models/Event');
const EventParticipant = require('../models/EventParticipant');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event management endpoints
 */

/**
 * @swagger
 * /events/list:
 *   get:
 *     summary: Get list of events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   event_id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   transport_mode:
 *                     type: string
 *       500:
 *         description: Error fetching events
 */
router.get('/list', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching events' });
    }
});

/**
 * @swagger
 * /events/{eventId}/participate:
 *   post:
 *     summary: Register user for event participation
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Registered for event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Registered for event
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error registering for event
 */
router.post('/:eventId/participate', async (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Unauthorized' });

    const { eventId } = req.params;

    try {
        await EventParticipant.create({ event_id: eventId, user_id: req.session.user.user_id });
        res.json({ message: 'Registered for event' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering for event' });
    }
});

module.exports = router;

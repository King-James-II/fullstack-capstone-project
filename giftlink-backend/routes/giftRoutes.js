/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Get all gifts
router.get('/', async (req, res, next) => {
    logger.info('/ called');
    try {
        logger.info('/ trying to connect');
        const db = await connectToDatabase();
        logger.info('/ connection successfull');
        const collection = db.collection("gifts");
        logger.info(collection);
        const gifts = await collection.find({}).toArray();
        logger.info(gifts);
        res.json(gifts);
    } catch (e) {
        logger.error('Error getting gifts:', e);
        next(e);
    }
});

// Get a single gift by ID
router.get('/:id', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const id = req.params.id;
        const gift = await collection.findOne({ id: id });
        if (!gift) {
            return res.status(404).send("Gift not found");
        }
        res.json(gift);
    } catch (e) {
        logger.error('Error getting gift by ID:', e);
        next(e);
    }
});

// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);
        res.status(201).json(gift.ops[0]);
    } catch (e) {
        logger.error('Error adding new gift:', e);
        next(e);
    }
});

module.exports = router;
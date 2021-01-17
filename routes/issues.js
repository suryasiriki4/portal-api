const express = require("express");
const router = express.Router();
const Issue = require('../models/Issue');
const Comment = require('../models/Comment');

// @desc Process add form
//@route POST /stories

router.post('/', async (req, res) => {
    try {
        await Issue.create(req.body);
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.redirect('/error/500');
    }
});


// @desc show all stories
//@route GET /stories

router.get('/', async (req, res) => {
    try {
        const issues = await Issue.find()
            .sort({createdAt: 'desc'})
            .lean();
        res.json(issues);
    } catch (err) {
        console.error(err);
        res.redirect('/error/500');
    }
});


// // @desc Process add comment for single issue
// //@route POST /issues/id

// router.post('/:id', async (req, res) => {
//     try {
//         await Issue.create(req.body);
//         res.redirect('/dashboard');
//     } catch (err) {
//         console.error(err);
//         res.redirect('/error/500');
//     }
// });


// // @desc show all stories
// //@route GET /stories

// router.get('/:id', async (req, res) => {
//     try {
//         const issues = await Issue.findOne({_id: req.params.id})
//             .sort({createdAt: 'desc'})
//             .lean();
//         res.json(issues);
//     } catch (err) {
//         console.error(err);
//         res.redirect('/error/500');
//     }
// });


module.exports = router;
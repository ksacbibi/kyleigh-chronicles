const express = require('express')
const router = express.Router()
const {Posts} = require('../models/schemas')

router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (post) {
          res.json(post);
        } else {
          res.status(404).json({ error: 'Post not found' });
        }
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
        console.log(err)
      }
})

module.exports = router
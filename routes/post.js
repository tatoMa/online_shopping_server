const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/user')
require('../models/post')
const Post = mongoose.model('post')
const User = mongoose.model('user')
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth')

// posts Index
router.get('/', (req, res) => {
  Post.find({ status: 'public' })
    .populate('user')
    .sort({ date: 'desc' })
    .then(posts => {
      res.send(posts)
    })
})

// Process Add post
router.post('/', (req, res) => {
  let allowComments

  if (req.body.allowComments) {
    allowComments = true
  } else {
    allowComments = false
  }

  const newPost = {
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments: allowComments,
    // user: req.user.id
    user: req.body.user
  }

  // Create post
  new Post(newPost).save().then(post => {
    res.redirect(`/posts/show/${post.id}`)
  })
})

// // Show Single post
// router.get('/show/:id', (req, res) => {
//   Post.findOne({
//     _id: req.params.id
//   })
//     .populate('user')
//     .populate('comments.commentUser')
//     .then(post => {
//       if (post.status == 'public') {
//         res.send(posts)
//       } else {
//         if (req.user) {
//           if (req.user.id == post.user._id) {
//             res.send(posts)
//           } else {
//             res.redirect('/posts')
//           }
//         } else {
//           res.redirect('/posts')
//         }
//       }
//     })
// })

// // List posts from a user
// router.get('/user/:userId', (req, res) => {
//   Post.find({ user: req.params.userId, status: 'public' })
//     .populate('user')
//     .then(posts => {
//       res.send(posts)
//     })
// })

// // Logged in users posts
// router.get('/my', ensureAuthenticated, (req, res) => {
//   Post.find({ user: req.user.id })
//     .populate('user')
//     .then(posts => {
//       res.send(posts)
//     })
// })

// // Add post Form
// router.get('/add', ensureAuthenticated, (req, res) => {
//   res.render('posts/add')
// })

// // Edit post Form
// router.get('/edit/:id', ensureAuthenticated, (req, res) => {
//   Post.findOne({
//     _id: req.params.id
//   }).then(post => {
//     if (post.user != req.user.id) {
//       res.redirect('/posts')
//     } else {
//       res.send(posts)
//     }
//   })
// })

// // Edit Form Process
// router.put('/:id', (req, res) => {
//   Post.findOne({
//     _id: req.params.id
//   }).then(post => {
//     let allowComments

//     if (req.body.allowComments) {
//       allowComments = true
//     } else {
//       allowComments = false
//     }

//     // New values
//     post.title = req.body.title
//     post.body = req.body.body
//     post.status = req.body.status
//     post.allowComments = allowComments

//     post.save().then(post => {
//       res.redirect('/dashboard')
//     })
//   })
// })

// // Delete post
// router.delete('/:id', (req, res) => {
//   post.remove({ _id: req.params.id }).then(() => {
//     res.redirect('/dashboard')
//   })
// })

// // Add Comment
// router.post('/comment/:id', (req, res) => {
//   Post.findOne({
//     _id: req.params.id
//   }).then(post => {
//     const newComment = {
//       commentBody: req.body.commentBody,
//       commentUser: req.user.id
//     }

//     // Add to comments array
//     post.comments.unshift(newComment)

//     post.save().then(post => {
//       res.redirect(`/posts/show/${post.id}`)
//     })
//   })
// })

module.exports = router

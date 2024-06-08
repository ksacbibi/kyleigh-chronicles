const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {type:String},
    date: {type:Date, default: Date.now},
    subtitle: {type:String},
    description: {type:String},
    content: {type:Array}
})

const Posts = mongoose.model('Posts', postSchema, 'posts')
const mySchemas = {'Posts':Posts}

module.exports = mySchemas
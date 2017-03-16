var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var Comment = require("./Comment");

var ArticleSchema = new Schema();

ArticleSchema.add({
    title: String,
    slug: String,
    content: String,
    author: String,
    comments: [Comment]
})
mongoose.model('Article', ArticleSchema);
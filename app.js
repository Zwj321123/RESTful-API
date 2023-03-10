//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//TODO
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});
//mongoose schema
const ArticleSchema = {
    title: String,
    content: String
};
//define articles collection
const Article = mongoose.model("Article", ArticleSchema);

//Expresss chained route handlers
app.route("/articles").get(function(req, res){
    //GET all articles
    Article.find(function(err, foundArticles){
        if (!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
    })
    //POST a new article
    .post(function(req, res){
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function(err){
            if (!err){
                res.send("Successfully added a new article!");
            } else {
                res.send(err);
            }
    });
    })
    //DELETE all articles
    .delete(function(req, res){
        Article.deleteMany(function(err){
            if (!err){
                res.send("Successfully deleted all articles!");
            } else {
                res.send(err);
            }
        });
});


app.route("/articles/:articleTitle")
    .get(function(req, res){
    //GET a specific article
        Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
            if (foundArticle){
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title was found.");
            }
        });
    })
    .put(function(req, res){
        //PUT a specific article
        Article.updateOne(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            function(err){
                if (!err){
                    res.send("Successfully updated article.");
                } else {
                    res.send(err);
                }
            }
        );
    })
    .patch(function(req, res){
        //PATCH a specific article
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body},
        function(err){
                    if (!err){
                        res.send("Successfully updated article.");
                    } else {
                        res.send(err);
                    }
               }
            );
    })
    .delete(function(req, res){
        //DELETE a specific article
        Article.deleteOne(
            {title: req.params.articleTitle},
            function(err){
                if (!err){
                    res.send("Successfully deleted article.");
                } else {
                    res.send(err);
                }
            }
        );
    });



app.listen(3000, function() {
    console.log("Server started on port 3000");
});
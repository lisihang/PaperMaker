var models = require('../models');
var User = models.user;
var Question = models.question;
var Paper = models.paper;

var fs = require("fs");

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var gulp = require("gulp");
var markdown = require('gulp-markdown');
var mdpdf = require('gulp-markdown-pdf');
var watch = require("gulp-watch");

var root = "C:/"

gulp.task("compileMDToPdf", function () {
    gulp.src(root + "cache/md/*.md")
        .pipe(mdpdf())
        .pipe(gulp.dest(root + "cache/pdf"))
    console.log("hhh");
})

gulp.task("watch", function() {
    console.log("hhh");
    watch(root + "cache/md/*.md", gulp.series('compileMDToPdf'));
    //watch(root + "cache/md/*.md", ['compileMDToPdf'])
})

gulp.task("default", gulp.series('watch'))

var paper = 
{
    makePaper: function(ids, userid, res)
    {
        Question.findAll(
        {
            where:
            {
                id: {[Op.in]: ids}
            },
            order: ['type']
        }).then(function(questions)
        {
            var s = "";
            for (var i in ids)
                s += ids[i].toString() + " ";
            Paper.create(
            {
                user: userid,
                question: s
            }).then(function(result)
            {
                var paperid = result.dataValues.id;
                var timestamp = (new Date()).getTime();
                var filename = userid.toString() + "_" + timestamp.toString() + "paper";
                var mdname = root + "cache/md/" + filename + ".md";
                var pdfname = root + "cache/pdf/" + filename + ".pdf";
                fs.exists(pdfname, function(exists)
                {
                    if (exists)
                        return pdfname;
                    var writeData = "";
                    writeData += "### " + title + "\n\n";
                    writeData += "##### Made by PaperMaker\n\n";
                    writeData += "------\n\n";
                    for (var i in questions)
                    {
                        if (i == 0 || questions[i].type != questions[i - 1].type)
                            writeData += "\n##### " + questions[i].type + "\n\n";
                        writeData += (i + 1).toString() + ". " + questions[i].content + "\n\n";
                    }
                    fs.writeFile(mdname, writeData, {flag: 'a'}, function(err)
                    {
                        if (err == null)
                            res.download(mdname, "paper.md");
                    });
                });
            });
        });
    },
    makeAnswer: function(questions)
    {

    }
}

module.exports = paper;
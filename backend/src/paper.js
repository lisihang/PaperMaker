var models = require('../models');
var User = models.user;
var Question = models.question;
var Paper = models.paper;

var fs = require("fs");
var markdownpdf = require("markdown-pdf")

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var root = "C:/"

var paper = 
{
    makePaper: function(title, ids, userid, res)
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
            for (var i in questions)
                questions[i].increment('hot');
            var s = "";
            for (var i in ids)
                s += ids[i].toString() + " ";
            Paper.create(
            {
                user: userid,
                title: title,
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
                    writeData += "# " + title + "\n\n";
                    writeData += "------\n\n";
                    for (var i in questions)
                    {
                        if (i == 0 || questions[i].type != questions[i - 1].type)
                            writeData += "\n### " + questions[i].type + "\n\n";
                        writeData += (i + 1).toString() + ". " + questions[i].content + "\n\n";
                    }
                    fs.writeFile(mdname, writeData, {flag: 'a'}, function(err)
                    {
                        if (err == null)
                        {
                            markdownpdf({'cssPath': 'github-markdown.css'}).from(mdname).to(pdfname, function()
                            {
                                res.download(pdfname, "paper.pdf");
                            });
                        }
                    });
                });
            });
        });
    },
    makeAnswer: function(title, ids, userid, res)
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

            var paperid = result.dataValues.id;
            var timestamp = (new Date()).getTime();
            var filename = userid.toString() + "_" + timestamp.toString() + "answer";
            var mdname = root + "cache/md/" + filename + ".md";
            var pdfname = root + "cache/pdf/" + filename + ".pdf";
            fs.exists(pdfname, function(exists)
            {
                if (exists)
                    return pdfname;
                var writeData = "";
                writeData += "# " + title + " 参考答案\n\n";
                writeData += "------\n\n";
                for (var i in questions)
                {
                    if (i == 0 || questions[i].type != questions[i - 1].type)
                        writeData += "\n### " + questions[i].type + "\n\n";
                    writeData += (i + 1).toString() + ". " + questions[i].answer + "\n\n";
                }
                fs.writeFile(mdname, writeData, {flag: 'a'}, function(err)
                {
                    if (err == null)
                    {
                        markdownpdf({'cssPath': 'github-markdown.css'}).from(mdname).to(pdfname, function()
                        {
                            res.download(pdfname, "answer.pdf");
                        });
                    }
                });
            });
        });
    },
}

module.exports = paper;
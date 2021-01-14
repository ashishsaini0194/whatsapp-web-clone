var express = require("express");
var app = express({ caseSensitive: true });
// var http = require("http");
// var server = http.createServer(app);
// var io = require("socket.io");
var Mg = require("mongodb").MongoClient;
var cp = require("cookie-parser")
var cors = require("cors");
const formidable = require('formidable');
var fs = require("fs");



app.use(cors())
app.use(cp());
// app.set("case sensitive routing", true)
// var privateNum1;
// var privateNum2;
var auth0 = null;



const url = "mongodb+srv://ashish:ashish@cluster0-lpaw9.mongodb.net/numbers?retryWrites=true&w=majority"; //online wala
// const url = "mongodb://localhost:27017/numbers";
Mg.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    console.log(db);
    var dbo = db.db("numbers")
    console.log(dbo);

    app.get("/", (req, res) => {
        var cook = req.cookies.users;
        // console.log(cook);

        try {
            // console.log(cook);
            var c1 = cook.number;
            var c2 = cook.password;
            if (c1.length != 0) {
                dbo.collection("nums").find({}).toArray((error, result) => {
                    // console.log(result);
                    for (var bb = 0; bb < result.length; bb++) {
                        if (result[bb].number == c1 && result[bb].pin == c2) {
                            var fn = result[bb].firstName;
                            var ln = result[bb].LastName;
                            console.log("you are logged in.");
                            res.render("index", din = { a: fn, b: ln, ind: 1 });
                            // console.log(res[bb].number,res[bb].pin);
                            // console.log(c1,c2);
                            // dbo.collection("nums").insertOne({ firstName: fn, LastName: ln });
                        }
                    }
                })
            }
            else {
                console.log("cookies are empty");
                res.render("a", dodo = { a: 0 })
            }
        } catch {
            console.log("cookies are empty");
            res.render("a", dodo = { a: 0 })
        }
        // try {

        // }
        // catch{
        //     // console.log("catch block");

        //     res.render("a", dodo = { a: 0 })
        // }
    })

    // app.get("/redirect",(req,res)=>{    
    //     console.log("hisadfsdf");
    //     res.render("a", dodo = { a: "" });
    //     // res.redirect("http://localhost:3000")
    // })
    app.get("/signup", (req, res) => {


        var a1 = req.query.number;
        var a2 = req.query.pin;
        // var a3 = req.query.pin2;
        console.log(a1);//number

        // if (a1 != a3) {
        //     res.render("a",  dodo = { a: 1.5 } )
        // } else {
        dbo.collection("nums").find({}, { projection: { _id: 0 } }).toArray((err, result) => {
            console.log(result);

            if (result.length == 0) {
                if (a1.length > 1 && a2.length > 1) {
                    dbo.collection("nums").insertOne({ number: a1, pin: a2 }, () => {
                        console.log("uploaded as database is empty");
                        res.render("a", dodo = { a: 1.1 });
                    })
                } else {
                    res.render("a", dodo = { a: 1.3 });
                }
            }
            for (var loop = 0; loop < result.length; loop++) {
                if (a1 == result[loop].number) {
                    res.render("a", dodo = { a: 1 });
                    break;
                }
                // console.log(loop + "and" + result.length - 1);

                if (loop == result.length - 1) {
                    if (a1 != result[loop].number) {
                        if (a1.length > 1 && a2.length > 1) {
                            dbo.collection("nums").insertOne({ number: a1, pin: a2 }, () => {
                                console.log("uploaded");
                                res.render("a", dodo = { a: 1.1 });
                            })
                        } else {
                            res.render("a", dodo = { a: 1.3 });
                        }
                    }

                }
            }
        })

        // dbo.collection("nums").deleteMany({ number: /^[0-9]/ }, (err,res) => {
        //     console.log(res);
        //     // db.close()
        // })

    })

    app.post("/savethis", (req, res) => { //just after login
        var cook = req.cookies.users;
        console.log(cook);
        var c1 = cook.number;
        var c2 = cook.password;
        // var v1 = 
        console.log(req.body);
        var fn = req.body.Fn // firstname
        var ln = req.body.Ln //lastname
        dbo.collection("nums").find({}).toArray((err, res) => {
            if (err) throw err;
            console.log(res);
            var q = { number: c1, pin: c2 }
            var u = { $set: { firstName: fn, LastName: ln } }
            dbo.collection("nums").updateOne(q, u, (err, res) => {
                console.log(res);
            })
            // for(var bb = 0; bb < res.length; bb++){
            //     if(res[bb].number == c1 && res[bb].pin == c2){
            //         console.log(res[bb].number,res[bb].pin);
            //         console.log(c1,c2);
            //         dbo.collection("nums").insertOne({ firstName: fn, LastName: ln });
            //     }
            // }
        })
        // res.redirect("http://localhost:3000")
        console.log(fn);
        res.render("index", din = { a: fn, b: ln, ind: 1 })
    })
    app.get("/getcontacts", (req, res) => {
        console.log(req.signedCookies);

        // if (privateNum1 == null) {
        //     var cook = req.cookies.users;
        //     privateNum1 = cook.number;
        //     console.log(privateNum1);
        // }

        var cook = req.cookies
        // console.log(cook);

        dbo.collection(cook.users.number).find({}).toArray((err, result) => {
            if (err) throw err;
            // console.log(result);
            res.send(result);
        })
    })
    app.post("/savecontacts", (req, res) => {


        // if (privateNum1 == null) {
        //     var cook = req.cookies.users;
        //     privateNum1 = cook.number;
        //     console.log(privateNum1);
        // }

        var cook = req.cookies;

        var col = dbo.collection(cook.users.number);
        col.find({}).toArray((err, body) => {
            console.log(body);

            if (body.length == 0) { //when collection is empty
                console.log(1);

                col.insertOne({ name: req.body.un1, number: req.body.un2 });
                // res.json({ ans: 1 })
                col.find({}).toArray((err, body) => {
                    res.json({ ans: 1, n1: req.body.un1, n2: req.body.un2, wholeBody: body })
                })
            }
            else {
                for (var a = 0; a < body.length; a++) {
                    if (body[a].number == req.body.un2) { // when contact alerdy exists
                        console.log(2.0);
                        res.json({ ans: 0.1 })
                        break;
                    }
                    if (body[a].name == req.body.un1) { // when names can't be same 
                        console.log(2);
                        res.json({ ans: 0 })
                        break;
                    }
                    if (a == body.length - 1) {
                        if (body[a].number != req.body.un2 && body[a].name != req.body.un1) {
                            console.log(3);
                            col.insertOne({ name: req.body.un1, number: req.body.un2 });
                            col.find({}).toArray((err, body) => {
                                res.json({ ans: 1, n1: req.body.un1, n2: req.body.un2, wholeBody: body })
                            })


                        }
                    }
                }
            }
        })

    })

    app.get("/logout", (req, res) => {
        res.clearCookie("users");
        auth0 = null;
        console.log(auth0);

        // privateNum1 = "";
        // privateNum2 = "";

        res.render("a", dodo = { a: 2.8 });
    })
    // app.post("/boom", (req, res) => {
    //     // console.log(req.body);
    //     auth0 = req.body.a;
    //     console.log(auth0);
    //     res.end()
    // })

    app.get("/login", (req, res) => {
        // console.log(req.body);

        var a1 = req.query.number;
        var a2 = req.query.pin;
        var a3 = req.query.check;
        // privateNum1 = a1;
        // privateNum2 = a2;

        // console.log(a1, a2);//number


        dbo.collection("nums").find({}, { projection: { _id: 0 } }).toArray((err, result) => {
            // console.log(result);

            if (result.length == 0) {
                console.log("Account not exsist");
                res.render("a", dodo = { a: 2 });
            }
            for (var loop1 = 0; loop1 < result.length; loop1++) {
                if (a1 == result[loop1].number) {
                    if (a2 == result[loop1].pin) {

                        if (a3 == 'on') { // saving cookies
                            var expiryDate = Number(new Date()) + 3.1536e+10; //expire after one year 
                            var expiryDate = new Date(expiryDate)
                            console.log(expiryDate);

                            let users = {
                                number: a1,
                                password: a2,
                                idn: "adhfkjk"
                            }
                            res.cookie("users", users, { expires: expiryDate })
                            // res.redirect("http://localhost:3000")
                        }
                        else {
                            var expiryDate = Number(new Date()) + 3.6e+6; //expire after one hour
                            var expiryDate = new Date(expiryDate)
                            console.log(expiryDate);

                            let users = {
                                number: a1,
                                password: a2,
                                idn: "boom"
                            }
                            res.cookie("users", users, { expires: expiryDate })
                        }
                        try {

                            if (result[loop1].firstName) {
                                res.redirect("http://localhost:3000")
                                console.log("try");
                                // res.render("index", din = { a: result[loop1].firstName, b: "", ind: 1 })
                            }
                            else {
                                console.log("try else");
                                res.render("index", din = { a: "", b: "", ind: 0 })
                            }
                        } catch {
                            console.log("catch");

                            // res.redirect("http://localhost:3000")
                            res.render("index", din = { a: "", b: "", ind: 0 })
                        }
                    }
                    else {
                        console.log("wrong login details");
                        res.render("a", dodo = { a: 2.2 });
                    }
                }
                if (loop1 == result.length - 1) {
                    // console.log("ye chla");
                    if (a1 != result[loop1].number || a2 != result[loop1].pin) {
                        // console.log(a1, a2);
                        // console.log(result[loop1].a, result[loop1].b);
                        // console.log("ye chla2");

                        console.log("Account not exsist");
                        res.render("a", dodo = { a: 2 });
                    }
                }
            }

        })

        // dbo.collection("nums").deleteMany({ a: /^[0-9]/ }, () => {
        //     console.log("deleted");
        //     // db.close()
        // })

    })




    // io.on("connection", (socket) => {
    //     console.log("hehehogya");

    //     socket.on("Outrage", (data) => {
    //         console.log("message is :" + data);
    //     })
    //     socket.on("ass", (data) => {
    //         console.log(data.a);

    //     })
    //     // socket.emit(clNum, { mess: message })
    // })

    app.post("/uploadIT", (req, _res) => {
        var string;
        // console.log(req.body);
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            console.log(fields);
            console.log(files.takeIt);
            var rs = fs.readFileSync(files.takeIt.path);
            console.log(rs);


            var cook = req.cookies;
            console.log(cook.users.number);

            // dbo.collection("images").deleteMany({ user: /^[0-9]/ }, (err, res) => { //to delete whole data
            //     console.log(res.deletedCount);
            // }) 

            dbo.collection("images").find({}, { projection: { userImg: 0 } }).toArray((err, res) => {
                // console.log(res);
                for (var a = 0; a < res.length; a++) {
                    console.log(res[a].user);

                    if (res[a].user == cook.users.number) { // when database is not empty
                        console.log("when database is not empty");

                        dbo.collection("images").updateOne({ user: cook.users.number }, { $set: { userImg: rs } }, (err, data) => { // to insert data
                            if (err) throw err;
                            console.log("document updated : " + data);
                        })
                        string = rs.toString('base64'); //Buffer to base64
                        break;
                    }
                    else {
                        if (a == res.length - 1) {
                            dbo.collection("images").insertOne({ userImg: rs, user: cook.users.number }, (err, data) => { // to insert data
                                if (err) throw err;
                                console.log("document inserted: " + data.insertedCount);
                            })
                            string = rs.toString('base64'); //Buffer to base64
                            break;
                        }
                    }
                }

                if (res.length == 0) { // when database is empty
                    console.log("when database is empty");

                    dbo.collection("images").insertOne({ userImg: rs, user: cook.users.number }, (err, data) => { // to insert data
                        if (err) throw err;
                        console.log("document inserted : " + data.insertedCount);
                    })
                    string = rs.toString('base64'); //Buffer to base64
                }
                _res.json({ a: string })
            })


            // dbo.collection("images").find({}).toArray((err, _res) => { //to retrive
            //     console.log(_res[0].userImg.buffer);

            // })




            // var buf = Buffer.from(string,"base64"); //base64 to buffer
            // console.log(buf);

        })


    })

    app.post("/downloadImg", (req, _res) => {
        var cook = req.cookies.users.number;
        console.log("cookies are: " + cook);
        var imagesData = [];
        var dtoSend = [];
        var string;

        dbo.collection("images").find({}).toArray((err, data) => { //for owner Image
            if (err) throw err;
            imagesData = data;
            for (var a = 0; a < data.length; a++) {
                if (data[a].user == cook) {
                    string = data[a].userImg.toString("base64")
                }
            }

            dbo.collection(cook).find({}).toArray((err, data) => { //for client images
                if (err) throw err;
                // console.log(data);
                // console.log(imagesData);

                for (var a = 0; a < data.length; a++) {
                    for (var b = 0; b < imagesData.length; b++) {
                        if (data[a].number == imagesData[b].user) {
                            dtoSend.push(imagesData[b])
                            break;
                        }
                    }
                }
                for (var t = 0; t < dtoSend.length; t++) {
                    dtoSend[t].userImg.buffer = dtoSend[t].userImg.buffer.toString("base64");
                }
                _res.json({ a: string, b: dtoSend })
            })
        })



    })

    app.post("/deleteThis", (req, res) => {
        var cook = req.cookies.users.number;
        console.log("cookies are: " + cook);
        dbo.collection("images").deleteOne({ user: cook }, (err, res) => {
            if (err) throw err;
            console.log(res.deletedCount);
        })
        console.log("deleted");
        res.send()
    })

    app.post("/test1", (req, _res) => {
        // var form = new formidable.IncomingForm()
        // form.parse(req, (err, fields, files) => {
        //     console.log(files.a);
        // })
        console.log(req.body.a);
        _res.end()
    })
})





module.exports = app;
// module.exports = router;
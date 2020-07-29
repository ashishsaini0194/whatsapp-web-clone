var myNum = localStorage.getItem("mynum")
if (myNum == null) {
    alert("logOut and Login Again")
}
console.log(myNum);

var socket = io();
socket.on("connection", () => {
    console.log("this is me");

})




socket.on(myNum, (data) => { //message is recieved
    if (data.idn == 11) {
        console.log(myNum);
        console.log(data.mess);
        console.log(data.sender);
        console.log(data.senderName);
        // function to show data to the user
        for (var a = 0; a < everything.length; a++) {
            if (data.sender == everything[a].number) {
                console.log("ho gyaaaaaaaaaaaaaaaaaaaa");

                var a1 = document.createElement("div");
                a1.setAttribute("id", "rM")

                var a2 = document.createElement("div");
                a2.setAttribute("id", `rMa${rMaIdn}`)
                ++rMaIdn;
                var b1 = document.createElement("p");
                b1.innerText = data.mess;

                var idn;
                a2.appendChild(b1)

                a1.appendChild(a2);
                idn = document.getElementById(`messagesSent${everything[a].number}`);
                idn.appendChild(a1);
                document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";

                var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                console.log(clName);
                console.log(data.senderName);


                if (clName == data.senderName) {
                    console.log("gya");
                    idn.style.display = "block";
                    document.getElementById(`contts${a}`).getElementsByTagName("p")[1] = "";
                }
                else {
                    // document.getElementById(`messagesSent${everything[a].number}`).style.display = "none";
                    var idn = document.getElementById(`contts${a}`).getElementsByTagName("p")[1];
                    if (data.mess.length > 25) {
                        idn.innerText = data.mess.slice(0, 23) + "...";
                    } else {
                        idn.innerText = data.mess;
                    }
                }

                setTimeout(() => { //to scroll after messages displayed
                    var scrollkiheight = idn.scrollHeight;
                    console.log(scrollkiheight);
                    idn.scrollTop = scrollkiheight;
                }, 100)
                break;
            }
        }
    }
})


var entireNum = [];
var everything;
console.log(everything);
var ss1 = sessionStorage.getItem("foo")
console.log(ss1);

if (ss1 != "bar") {
    var cc1 = document.cookie.split(";");
    console.log(cc1[0]);
    var cc = document.cookie
    // var cc = decodeURIComponent(cc);
    // console.log(cc);
    if (cc.includes('boom')) {
        document.cookie = cc1 + "=;expires=" + new Date(0).toUTCString();
        window.location.replace("http://localhost:3000");
    }
    //fetch here 
    // fetch("/redirect", { method: "GET" });
}

var mainIdn = null;
function impBut() {
    setTimeout(() => {
        mainIdn = 1;
        alert(":hskujhdf")
        window.location.replace("http://localhost:3000")
        console.log(mainIdn);
    }, 0)
}

if (mainIdn != null) {
    alert("You are logged out")
    window.location.replace("http://localhost:3000")
}


window.onload = async () => {
    document.getElementById("itMain").style.display = "none";
    document.getElementById("myImage44").style.display = "none";

    var allChats = document.getElementById("allChats")
    await fetch("http://localhost:3000/getcontacts", { //to get all the contacts
        headers: {
            method: "GET",
        }
    }).then((res) => {
        res.json().then((data) => {
            everything = data;
            console.log(everything);
            // console.log(data[3]);
            for (var a = 0; a < data.length; a++) {
                // allChats.appendChild("div") append(`<div  class='contts'><p> ${data[a].name} </p></div>`);
                // console.log("done");
                var di = document.createElement("div")
                var p = document.createElement("p");
                var indP = document.createElement("p");
                var imgBox = document.createElement("div")
                var img = document.createElement("img");
                var textDiv = document.createElement("div");
                textDiv.setAttribute("id", `textDiv${a}`);
                imgBox.setAttribute("id", `imgBox${a}`);
                img.setAttribute("id", "img1")
                img.setAttribute("src", "/images/prof1 (2).png");
                imgBox.appendChild(img);
                var dit = document.createTextNode(`${data[a].name}`);
                entireNum.push(data[a].number) //pushing data for numbers
                p.appendChild(dit);
                di.appendChild(imgBox);
                textDiv.appendChild(p);
                textDiv.appendChild(indP);
                di.appendChild(textDiv);
                // var br = document.createElement("br");
                // textDiv.insertBefore(br, indP);
                di.setAttribute("id", `contts${a}`)
                allChats.appendChild(di);
            }
        })
    })

    // document.getElementById("yourSelf").style.display = "none";
    document.getElementById("yourSelfChild").style.display = "none";
    document.getElementById("wind2").style.display = "none";
    document.getElementById("sideProfile").style.display = "none";
    // var div1 = document.getElementById("div1");
    // var div2 = document.getElementById("div2");

    // To make placeholder invisible on click and visible on blur;
    var up1 = document.getElementById("toTake");
    var up2 = document.getElementById("info2");
    var t1 = up1.getElementsByTagName("input")[0]
    t1.onfocus = () => {
        t1.setAttribute("placeholder", "");
    }
    t1.onblur = () => {
        t1.setAttribute("placeholder", "Search a contact");
    }
    // --------------
    // var info21 = up2.getElementsByTagName("input")[0]
    // info21.onfocus = () => {
    //     info21.setAttribute("placeholder", "");
    // }
    // info21.onblur = () => {
    //     info21.setAttribute("placeholder", "Name");
    // }
    // // --------------
    // var info22 = up2.getElementsByTagName("input")[1]
    // info22.onfocus = () => {
    //     info22.setAttribute("placeholder", "");
    // }
    // info22.onblur = () => {
    //     info22.setAttribute("placeholder", "Number");
    // }

    // function clickWala() {
    //     imgB.onclick = () => {
    //         if (sP.style.width != "25%") {
    //             mess.style.width = "45%";
    //             sP.style.width = "25%";
    //         } else {
    //             mess.style.width = "70%";
    //             sP.style.width = "0%";
    //         }
    //     }
    // }


    setTimeout(() => { // to make div of messagesSent
        console.log(everything);
        for (var loop = 0; loop < everything.length; loop++) {
            var messagesSent = document.createElement("div")
            messagesSent.setAttribute("id", `messagesSent${everything[loop].number}`)
            document.getElementById("messages").appendChild(messagesSent)
        }
    }, 1000)

    var options44 = document.getElementById("options44");
    document.getElementById("myImage44").onmouseover = () => { options44.style.display = "block" }
    document.getElementById("myImage44").onmouseout = () => { options44.style.display = "none" }


    options44.getElementsByTagName("p")[2].onclick = () => {
        document.getElementById("fileSel").click();
    }

}


function yourSelf(a) {
    var contts = document.getElementById(a);
    var name = contts.getElementsByTagName("p")[0].innerText;
    var ds = document.getElementById("yourSelf")
    var ds1 = ds.getElementsByTagName("img")[0];
    var ds2 = ds.getElementsByTagName("p")[0];
    ds1.src = "/images/prof1 (2).png";
    ds2.innerHTML = name;
    console.log(name);
    console.log(contts);


    ds1.onclick = () => {
        var preview = document.getElementById("Previews")
        if (document.getElementById("sideProfile").style.display == "none") {
            document.getElementById("sideProfile").style.display = "block";
            setTimeout(() => {
                var mess = document.getElementById("messages");

                var sP = document.getElementById("sideProfile");
                var urImg = document.getElementById("urImg");
                mess.style.width = "45%";
                console.log(preview);
                if (preview != null) {
                    preview.style.width = "45%";
                }
                sP.style.width = "25%";
            }, 0)
            setTimeout(() => {
                urImg.style.display = "block";
            }, 100)


            var myyyt = document.getElementById("nameAndNum")
            var myp0 = myyyt.getElementsByTagName("p")[0];
            var myp1 = myyyt.getElementsByTagName("p")[1];
            myp0.innerHTML = name;
            var idn = a.charAt([a.length - 1]);
            console.log(a);
            myp1.innerHTML = entireNum[idn];

            //to apply image to sideProfile
            var dip1 = document.getElementById("yourSelf").getElementsByTagName("img")[0].src;
            // console.log(dip1);
            document.getElementById("urImg1").getElementsByTagName("img")[0].src = dip1;
        }
        else {
            urImg.style.display = "none";
            var mess = document.getElementById("messages");
            var sP = document.getElementById("sideProfile");
            mess.style.width = "70%";
            if (preview != null) {
                preview.style.width = "70%";
            }
            sP.style.width = "0%";

            setTimeout(() => {
                document.getElementById("sideProfile").style.display = "none";
            }, 100)
        }
    }


}
//Window.onload Ends here


function addOn() {
    console.log(document.getElementById("allChats"));
    $("[id^='contts']").click((e) => {
        document.getElementById("sendIt").style.display = "flex";
        document.getElementById("messages").style.backgroundColor = 'rgb(0, 150, 130)';
        var e1 = e.currentTarget.id;
        console.log(e1);
        var idn = document.getElementById(e1).getElementsByTagName("p")[1];
        idn.innerText = "";
        document.getElementById("yourSelf").style.backgroundColor = "rgb(238, 238, 238)";
        document.getElementById("yourSelfChild").style.display = "flex";
        var a1 = document.getElementById(e1).getElementsByTagName("p")[0].innerText;
        var a2 = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
        console.log(a1, a2);

        yourSelf(e1);
        if (a1 != a2) {
            // var showIt = document.getElementById(e1).document.getElementsByTagName("p")[0].innerText;
            console.log(a1);
            for (var loop = 0; loop < everything.length; loop++) {
                if (a1 == everything[loop].name) {
                    console.log(document.getElementById(`messagesSent${everything[loop].number}`));
                    document.getElementById(`messagesSent${everything[loop].number}`).style.display = "block";
                } else {
                    document.getElementById(`messagesSent${everything[loop].number}`).style.display = "none";
                }
            }


            document.getElementById("sideProfile").style.display = "none";
            var mess = document.getElementById("messages");
            var sP = document.getElementById("sideProfile");
            mess.style.width = "70%";
            sP.style.width = "0%";
        }



        var dip = e1.charAt(e1.length - 1); // to change yourSelf image
        var el1 = document.getElementById(`imgBox${dip}`).getElementsByTagName("img")[0].src;
        document.getElementById("yourSelf").getElementsByTagName("img")[0].src = el1;



    })
}
setTimeout(addOn, 1000)

function butt() {
    console.log(div1);

    var a = div1.getElementsByTagName("input")[0];
    var b = div2.getElementsByTagName("input")[0];
    console.log(a.value);
    if (a.value.length > 0 && b.value.length > 0) {
        //Save this data
        var dd33 = async () => {
            return await fetch("http://localhost:3000/savethis", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Fn: a.value, Ln: b.value })
            }).then(res)
        }

        console.log(dd33())


        document.getElementById("popup").style.display = "none";
        window.location.replace("http://localhost:3000")

    }
};

function save() {
    var up1 = document.getElementById("toTake");
    var up2 = document.getElementById("info2");
    var info21 = up2.getElementsByTagName("input")[0];
    var info22 = up2.getElementsByTagName("input")[1];
    console.log(info21.value, info22.value);


    if (info22.value.length == 10) {
        if (info21.value.length != 0) {
            console.log(info22.value.length);
            fetch("http://localhost:3000/savecontacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ un1: info21.value, un2: info22.value })
            }).then((response) => {
                info21.value = "";
                info22.value = "";
                response.json().then((data) => {
                    // console.log(data.ans);
                    // console.log(data.wholeBody);
                    // console.log(data.n1);
                    // console.log(data.n2);
                    var a = data.wholeBody.length;
                    if (data.ans == 1) {
                        console.log(data);
                        everything = data.wholeBody;
                        console.log(everything);
                        alert("Contact saved")
                        // location.reload()
                        var allChats = document.getElementById("allChats")
                        var di = document.createElement("div")
                        var p = document.createElement("p");
                        var indP = document.createElement("p");
                        var imgBox = document.createElement("div")
                        var img = document.createElement("img");
                        var textDiv = document.createElement("div");
                        textDiv.setAttribute("id", `textDiv${a}`);
                        imgBox.setAttribute("id", `imgBox${entireNum.length}`);
                        img.setAttribute("id", "img1")
                        img.setAttribute("src", "/images/prof1 (2).png");
                        imgBox.appendChild(img);
                        var dit = document.createTextNode(data.n1);
                        entireNum.push(data.n2) //pushing data for numbers
                        p.appendChild(dit);
                        di.appendChild(imgBox);
                        textDiv.appendChild(p);
                        textDiv.appendChild(indP);
                        di.setAttribute("id", `contts${entireNum.length - 1}`) //as data pushed on 252
                        allChats.appendChild(di);
                        // textDiv.insertBefore(br, indP);
                        di.appendChild(textDiv);
                        addOn();
                        console.log(document.getElementById("allChats"));
                        makeThis();
                    } else if (data.ans == 0) {
                        alert("Contact already exist")
                    }
                })
            })
        } else {
            alert("name can't be empty")
        }
    }
    else {
        alert("Wrong details")
    }
}
function saveNo() {
    document.getElementById("wind2").style.display = "flex";
    document.getElementById("info2").style.marginTop = "20%";
    document.getElementById("info2").style.width = "35%";
    document.getElementById("mainWind").style.opacity = "0.5";
    document.getElementById("background2").style.backgroundColor = "transparent";
}
function doThis() {
    // try{
    // var a = event.srcElement.id;
    // }catch{}
    var a = event.srcElement.id;
    // console.log(a); 
    if (a == "save" || a == "wind2") {
        document.getElementById("info2").style.marginTop = "0%";
        document.getElementById("info2").style.width = "0%"
        document.getElementById("mainWind").style.opacity = "1";
        document.getElementById("background2").style.backgroundColor = "rgb(0, 150, 112)";
        document.getElementById("wind2").style.display = "none"
    }
}


function funcProf() {
    var mf = document.getElementById("myProfile");
    var iM = document.getElementById("itMain");
    var iM2 = document.getElementById("myImage44");
    var con = document.getElementById("contacts");
    // console.log(1);
    if (mf.style.width != "30%") {
        iM.style.display = "block";
        iM2.style.display = "block";
        mf.style.width = "30%";
        // con.style.width = "0%";
    } else {
        mf.style.width = "0%";
        iM.style.display = "none";
        iM2.style.display = "none";
        // con.style.width = "30%";
    }
}

function makeThis() {
    // for (var loop = 0; loop < everything.length; loop++) {
    var messagesSent = document.createElement("div")
    messagesSent.setAttribute("id", `messagesSent${everything[everything.length - 1].number}`)
    document.getElementById("messages").appendChild(messagesSent)
    // }
}

function sendIt() {
    console.log(everything);

    var value = document.getElementById("sendIt").getElementsByTagName('input')[0].value;
    // console.log(value);

    var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
    // console.log(yourSelf);

    var idn;

    if (value.length != 0) {
        for (var loop = 0; loop < everything.length; loop++) {
            if (yourSelf == everything[loop].name) {
                var a1 = document.createElement("div");
                a1.setAttribute("id", "sM")

                var a2 = document.createElement("div");
                a2.setAttribute("id", `sMa${smaKaIdn}`)
                ++smaKaIdn;
                var b1 = document.createElement("p");
                b1.innerText = value;
                a2.appendChild(b1)

                a1.appendChild(a2);
                idn = document.getElementById(`messagesSent${everything[loop].number}`);
                idn.appendChild(a1);
                document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";
                idn.style.display = "block";

                setTimeout(() => { //to scroll after messages displayed
                    var scrollkiheight = idn.scrollHeight;
                    console.log(scrollkiheight);
                    idn.scrollTop = scrollkiheight;
                }, 100)

                var myName = document.getElementById("myInfo").getElementsByTagName("p")[0].innerText;
                console.log(myName);
                var myname1 = myName.split(" ")
                myName = myname1[myname1.length - 1];
                console.log(myName);

                socket.emit("Outrage", { mess: value, client: everything[loop].number, sender: myNum, senderName: myName })
                break;
            }
        }
    }

}
$(document).ready(() => {
    console.log(document.getElementById("sendIt"));
    document.getElementById("sendIt").getElementsByTagName("input")[0].addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.keyCode == 13) {
            sendIt();
        }
    })
})

function uploadIt() {
    var fd = new FormData();
    var z1 = document.getElementById('fileSel').files[0];
    fd.append("takeIt", z1)
    console.log(fd.get("takeIt"));
    // console.log(fd.get("takeIt").size);

    if (fd.get("takeIt").size <= 2e+6) {
        var h = new Headers();
        h.append("Content-Type", "application/json")

        var req = new Request("uploadIT", {
            method: "POST",
            headers: h,
            body: fd,
            mode: "no-cors"
        })

        // console.log(req);
        if (fd.get("takeIt").type == "image/png" || fd.get("takeIt").type == "image/jpeg" || fd.get("takeIt").type == "image/jpg") {
            fetch(req)
                .then((res) => {
                    res.json().then((data) => {
                        console.log(data.a);


                        document.getElementById("myImg44").getElementsByTagName("img")[0].src = `data:image/png;base64,${data.a}`
                        document.getElementById("profDiv").getElementsByTagName("img")[0].src = `data:image/png;base64,${data.a}`
                        document.getElementById("insidePop1").getElementsByTagName("img")[2].src = `data:image/png;base64,${data.a}`
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            console.log("only jpeg and png are acceptable");
        }
    }
    else {
        alert("size of image should be less than or equal to 2MB")
        document.getElementById("options44").getElementsByTagName("input")[0].value = null; // to dump the previous selected file
    }
}


function downloadImg() {

    var h = new Headers()
    h.append("Content-Type", "application/json");

    var req = new Request("downloadImg", {
        headers: h,
        method: "POST",
        body: "",
        // mode:"no-cors"
    })
    fetch(req)
        .then((res) => {
            res.json().then((data) => {
                if (data.a != undefined) {
                    console.log(data.a);
                    console.log(data.b);
                    document.getElementById("myImg44").getElementsByTagName("img")[0].src = `data:image/png;base64,${data.a}`
                    document.getElementById("profDiv").getElementsByTagName("img")[0].src = `data:image/png;base64,${data.a}`
                    document.getElementById("insidePop1").getElementsByTagName("img")[2].src = `data:image/png;base64,${data.a}`


                    //for Clients
                    setTimeout(() => {
                        console.log(everything);
                        for (var a = 0; a < everything.length; a++) {
                            for (var c = 0; c < data.b.length; c++) {
                                if (everything[a].number == data.b[c].user) {
                                    console.log(document.getElementById(`imgBox${a}`));
                                    document.getElementById(`imgBox${a}`).getElementsByTagName("img")[0].src = `data:image/png;base64,${data.b[c].userImg}`;
                                    break;
                                }
                            }
                        }
                    }, 1000)
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
downloadImg(); //for Loading Images

function showThis() {
    document.getElementById("popup1").style.display = "flex";
}
function closeThis() {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
}

function deleteThis() {

    document.getElementById("options44").getElementsByTagName("input")[0].value = null; // to dump the previous selected file
    console.log(document.getElementById("options44").getElementsByTagName("input")[0].value);

    var req = new Request("deleteThis", {
        headers: { "Accept": "application/json" },
        method: "POST",
        body: "",
        mode: "no-cors"
    })
    fetch(req)
        .then((res) => {
            document.getElementById("myImg44").getElementsByTagName("img")[0].src = "/images/prof1 (2).png";
            document.getElementById("profDiv").getElementsByTagName("img")[0].src = "/images/prof1 (2).png";
            document.getElementById("insidePop1").getElementsByTagName("img")[2].src = "/images/prof1 (2).png";
        })
        .catch((err) => { console.log(err); })
}

function sendSomething() {
    console.log(document.getElementById("yourSelfChild").getElementsByTagName("div"));

    var a = document.getElementById("sendSomeMed")
    var b = document.getElementById("send1Div").querySelectorAll("img")
    console.log(b);

    if (a.style.height != "300px") {
        document.getElementById("yourSelfChild").getElementsByTagName("img")[0].style.transform = "rotate(180deg)";
        a.style.height = "300px";
        document.getElementById("yourSelfChild").getElementsByTagName("div")[0].style.backgroundColor = "rgb(226 226 226)";
        for (var c = 0; c < b.length; c++) {
            b[c].style.height = "50px";
            b[c].style.width = "50px"
        }

    }
    else {
        document.getElementById("yourSelfChild").getElementsByTagName("img")[0].style.transform = "rotate(0deg)";
        // document.getElementById("sendSomeMed").style.display = "none"
        a.style.height = "0px";
        document.getElementById("yourSelfChild").getElementsByTagName("div")[0].style.backgroundColor = "";
        for (var c = 0; c < b.length; c++) {
            b[c].style.height = "0px";
            b[c].style.width = "0px"
        }
    }

}

function selectPV(e) {
    if (e == 'takeit1') {
        document.getElementById("input1a").setAttribute("accept", "image/png, image/jpeg, image/jpg,image/gif")  //for images and videos
    }
    else if (e == 'takeit2') {
        document.getElementById("input1a").setAttribute("accept", "text/*") // for docs
    }
    document.getElementById("input1a").click()
    var chup = document.getElementById("prevDiv2");
    var Rbuttons = document.getElementById("prev2");

    console.log(chup.childNodes);
    console.log(Rbuttons);
    a = 0;
    while (a < chup.childNodes.length) {
        chup.removeChild(chup.childNodes[0]);
        Rbuttons.removeChild(Rbuttons.childNodes[0])
    } a++

}

function closeIt() {
    hideIt()
    document.getElementById("messages").style.display = "flex";
    document.getElementById("Previews").style.display = "none";
    var a1 = document.getElementById("prevDiv2").childNodes;
    console.log(a1);
    var b = 0;
    while (b < a1.length) {
        document.getElementById("prevDiv2").removeChild(a1[0]);
    } b++;
    console.log(a1);

    var a2 = document.getElementById("prev2").childNodes;
    var b1 = 0;
    while (b1 < a2.length) {
        document.getElementById("prev2").removeChild(a2[b1]);
    } b1++;

}
function sendThisFiles() { // this is preview of the selected images
    scrolledtop = 0;
    var files = document.getElementById("input1a").files;
    if (files.length > 0) {
        hideIt()
        document.getElementById("messages").style.display = "none";
        document.getElementById("Previews").style.display = "flex";

        console.log(files);

        var parentDiv = document.getElementById("prevDiv2");
        for (var a = 0; a < files.length; a++) {
            var lazy = files[a].type;
            if (lazy == "image/png" || lazy == "image/jpeg" || lazy == "image/jpg" || lazy == "image/gif") { //images and videos
                console.log(" type is img and mp4");
                var div1 = document.createElement("div");
                div1.setAttribute("id", `prev2Child${a}`)
                var img1 = document.createElement("img");
                img1.src = URL.createObjectURL(files[a]);
                console.log(URL.createObjectURL(files[a]));
                div1.appendChild(img1)
                parentDiv.appendChild(div1);


                var parent2 = document.getElementById("prev2"); //dots
                var aLink = document.createElement("a");
                aLink.setAttribute("href", `#prev2Child${a}`)
                var radBut = document.createElement("div");
                radBut.setAttribute("id", `radio${a}`);
                aLink.appendChild(radBut);
                parent2.appendChild(aLink);



            }
            if (files[a].type == "text/plain") { //docs
                console.log(" type is text");
                var div1 = document.createElement("div");
                div1.setAttribute("id", `prev2Child${a}`)
                var img1 = document.createElement("img");
                img1.src = "/images/text1.png";
                div1.appendChild(img1)
                parentDiv.appendChild(div1);
                img1.style.maxHeight = '100px';

                var parent2 = document.getElementById("prev2"); //dots
                var aLink = document.createElement("a");
                aLink.setAttribute("href", `#prev2Child${a}`)
                var radBut = document.createElement("div");
                radBut.setAttribute("id", `radio${a}`);
                aLink.appendChild(radBut);
                parent2.appendChild(aLink);
            }

            if (a == files.length - 1) { // run at the end of this loop
                if (parentDiv.childNodes.length > 0) {
                    document.getElementById("radio0").style.backgroundColor = "rgb(0, 174, 255)";
                    document.getElementById("radio0").style.borderColor = "rgb(0, 26, 255)";
                    $('[id^="radio"]').on("click", (e) => {
                        var boom = e.currentTarget.id;
                        console.log(boom);
                        $('[id^="radio"]').css("background-color", "white");
                        $('[id^="radio"]').css("border-color", "black");
                        document.getElementById(boom).style.backgroundColor = "rgb(0, 174, 255)";
                        document.getElementById(boom).style.borderColor = "rgb(0, 26, 255)";


                        var boom1 = boom.charAt(boom.length - 1);
                        scrolledtop = parseInt(boom1);

                    })
                }
            }
        }
    }
}

var scrolledtop = 0;

function leftClick() {
    if (scrolledtop > 0) {
        console.log("scroll top was: " + scrolledtop);
        scrolledtop = scrolledtop - 1;
        console.log("scroll top now: " + scrolledtop);
        document.getElementById("prevDiv1").getElementsByTagName("a")[0].setAttribute("href", `#prev2Child${scrolledtop}`);
        document.getElementById(`radio${scrolledtop}`).click();
    }
}
function rightClick() {
    var a1 = document.getElementById("prevDiv2").childNodes;
    console.log(a1);
    console.log("length is" + a1.length);
    if (scrolledtop < a1.length - 1) {
        console.log("scroll top was: " + scrolledtop);
        scrolledtop = scrolledtop + 1;
        console.log("scroll top now: " + scrolledtop);
        document.getElementById("prevDiv3").getElementsByTagName("a")[0].setAttribute("href", `#prev2Child${scrolledtop}`);
        document.getElementById(`radio${scrolledtop}`).click();
    }
}

var smaKaIdn = 0;
function finallySend() { //finally files will be send to the other client


    var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText; //client name
    var files = document.getElementById("input1a").files;
    console.log(files);
    var idn;

    if (files.length != 0) { //showing images to client
        for (var loop = 0; loop < everything.length; loop++) {
            if (yourSelf == everything[loop].name) {
                for (var loopy = 0; loopy < files.length; loopy++) {
                    var a1 = document.createElement("div");
                    a1.setAttribute("id", "sM")

                    var a2 = document.createElement("div");
                    a2.setAttribute("id", `sMa${smaKaIdn}`)
                    smaKaIdn += 1;
                    var b1 = document.createElement("img");
                    if (files[loopy].type == "image/png" || files[loopy].type == "image/jpeg" || files[loopy].type == "image/jpg" ||
                        files[loopy].type == "image/gif") { //images and videos )
                        b1.src = URL.createObjectURL(files[loopy]);
                        a2.appendChild(b1)
                        a1.appendChild(a2);
                        idn = document.getElementById(`messagesSent${everything[loop].number}`);
                        idn.appendChild(a1);

                    }
                    else if (files[loopy].type == "text/plain") { //images and videos )
                        b1.src = "/images/text2.png";
                        b1.style.maxHeight = "80px"
                        var docDiv = document.createElement("div");
                        docDiv.setAttribute("class", "docDiv");
                        var docDivfn = document.createElement("p");

                        if (files[loopy].name > 18) { //to slice the name of file
                            docDivfn.innerText = files[loopy].name.slice(0, 16) + "...";
                        } else {
                            docDivfn.innerText = files[loopy].name;
                        }

                        var docDivfn2 = document.createElement("p");
                        docDivfn2.innerText = files[loopy].type;
                        var docDivimg = document.createElement("img");
                        docDivimg.src = "/images/download.png"
                        docDiv.appendChild(b1);
                        docDiv.appendChild(docDivfn);
                        docDiv.appendChild(docDivfn2);
                        docDiv.appendChild(docDivimg);
                        a2.appendChild(docDiv);
                        a1.appendChild(a2);
                        idn = document.getElementById(`messagesSent${everything[loop].number}`);
                        idn.appendChild(a1);
                    }

                    idn.style.display = "block";
                    document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";

                    setTimeout(() => { //to scroll after messages displayed
                        var scrollkiheight = idn.scrollHeight;
                        console.log(scrollkiheight);
                        idn.scrollTop = scrollkiheight;

                    }, 100)

                    if (loopy == files.length - 1) {
                        $("[id^='sMa']").click((e) => {
                            console.log(e.target.currentSrc);
                            if (e.target.currentSrc != undefined) {
                                document.getElementById("insidePop2").getElementsByTagName("img")[2].src = e.target.currentSrc;
                                document.getElementById("popup2").style.display = "flex";
                            }
                        })
                    }
                }
            }
        }
    }



    var doop = 0
    function justLoop() {
        console.log("doop is : " + doop);
        console.log("chla");
        var ft = files[doop].type;
        var fn = files[doop].name;
        console.log(fn);

        var reader = new FileReader();
        reader.readAsArrayBuffer(files[doop]); //data to be sent

        var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
        var myName = document.getElementById("myInfo").getElementsByTagName("p")[0].innerText;
        var myname1 = myName.split(" ")
        myName = myname1[myname1.length - 1];
        console.log(myName);

        setTimeout(() => {
            for (var loop = 0; loop < everything.length; loop++) {
                if (yourSelf == everything[loop].name) {
                    // console.log(reader.result);
                    socket.emit("tryThis", { buffData: reader.result, sender: myNum, senderName: myName, client: everything[loop].number, fileType: ft, fileName: fn });
                }
            }
            // document.getElementById("input1a").value = "";
        }, 1000)
        if (doop < files.length - 1) {
            ++doop;
            setTimeout(justLoop(), 2000)
        } else {
            closeIt();
        }
    }
    justLoop();
}

function downloadThis() {
    console.log("boom download chla");
    document.getElementById("download1").getElementsByTagName("a")[0].href = document.getElementById("insidePop2").getElementsByTagName("img")[2].src;
}
function downloadThis1() {
    console.log("boom download 1 chla");
    document.getElementById("download").getElementsByTagName("a")[0].href = document.getElementById("insidePop1").getElementsByTagName("img")[2].src;
}

var rMaIdn = 0;
socket.on(myNum, (data) => { //to recieve files from B to A (media files)
    if (data.idn = 22) {
        console.log(myNum);
        console.log(data.a);
        console.log(data.a1); //sender
        console.log(data.a2); //senderName
        console.log(data.a3); //fileType
        console.log(data.a4); //fileName
        // function to show data to the user
        for (var b = 0; b < everything.length; b++) {
            if (data.a1 == everything[b].number) {
                console.log("ho gyaaaaaaaaaaaaaaaaaaaa");

                var a1 = document.createElement("div");
                a1.setAttribute("id", "rM")

                var a2 = document.createElement("div");
                a2.setAttribute("id", `rMa${rMaIdn}`)
                ++rMaIdn;
                var b1 = document.createElement("img");
                if (data.a3 == "image/png" || data.a3 == "image/jpeg" || data.a3 == "image/jpg" ||
                    data.a3 == "image/gif") { //images and videos )
                    b1.src = `data:image/png;base64,${data.a}`;
                    // b1.src = URL.createObjectURL(data.a);
                }
                else if (data.a3 == "text/plain") {
                    b1.src = "/images/text1.png"
                    b1.style.maxHeight = "80px";
                }
                var idn;
                a2.appendChild(b1)

                a1.appendChild(a2);
                idn = document.getElementById(`messagesSent${everything[b].number}`);
                idn.appendChild(a1);
                document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";

                var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                console.log(clName);
                console.log(data.a2);


                if (clName == data.a2) { //if sender's chat is opened
                    console.log("gya");
                    idn.style.display = "block";
                    document.getElementById(`contts${b}`).getElementsByTagName("p")[1] = "";
                }
                else { //not opened
                    var idn = document.getElementById(`contts${b}`).getElementsByTagName("p")[1];
                    if (data.a4.length > 25) {
                        idn.innerText = data.a4.slice(0, 23) + "...";
                    } else {
                        idn.innerText = data.a4;
                    }
                }


                $("[id^='rMa']").click((e) => { //to put into insidePop
                    console.log(e.target.currentSrc);
                    if (e.target.currentSrc != undefined) {
                        document.getElementById("insidePop2").getElementsByTagName("img")[2].src = e.target.currentSrc;
                        document.getElementById("popup2").style.display = "flex";
                    }
                })


                setTimeout(() => { //to scroll after messages displayed
                    var scrollkiheight = idn.scrollHeight;
                    console.log(scrollkiheight);
                    idn.scrollTop = scrollkiheight;
                }, 100)
                break;
            }
        }
    }
})


function hideIt() {
    var a = document.getElementById("sendSomeMed")
    var b = document.getElementById("send1Div").querySelectorAll("img")
    document.getElementById("yourSelfChild").getElementsByTagName("img")[0].style.transform = "rotate(0deg)";
    // document.getElementById("sendSomeMed").style.display = "none"
    a.style.height = "0px";
    document.getElementById("yourSelfChild").getElementsByTagName("div")[0].style.backgroundColor = "";
    for (var c = 0; c < b.length; c++) {
        b[c].style.height = "0px";
        b[c].style.width = "0px"
    }
}





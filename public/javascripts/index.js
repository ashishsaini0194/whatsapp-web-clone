var unreadMssgs = [];
var unreadFiles = [];
var unreadImages = [];
var unreadContacts = [];

var myNum = localStorage.getItem("mynum")
if (myNum == null) {
    alert("logOut and Login Again")
}
console.log(myNum);

var socket = io();
socket.on("connection", () => {
    console.log("this is me");

})

function getTheTime() {
    var time1 = new Date(); // full date and time
    var time2 = time1.toLocaleTimeString().split(" ");
    // console.log(time2);
    var time3 = time2[0].slice(0, time2[0].length - 3) + ` ${time2[1]}`;
    console.log(time3); // converted to 12 hours format
    return time3;
}

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
    // var ContactsWaliImg;
    document.getElementById("itMain").style.display = "none";
    document.getElementById("myImage44").style.display = "none";
    var lengthOfChats = 0;
    var allChats = document.getElementById("allChats")
    await fetch("http://localhost:3000/getcontacts", { //to get all the contacts
        headers: {
            method: "GET",
        }
    }).then((res) => {
        res.json().then((data) => {
            everything = data;
            console.log(everything);
            lengthOfChats = data.length;
            // console.log(data[3]);
            // ContactsWaliImg = data.length;
            // console.log(ContactsWaliImg);
            for (var a = 0; a < data.length; a++) {
                // allChats.appendChild("div") append(`<div  class='contts'><p> ${data[a].name} </p></div>`);
                // console.log("done");
                unreadMssgs[a] = [];
                unreadFiles[a] = [];
                unreadImages[a] = [];
                unreadContacts[a] = [];
                var di = document.createElement("div")
                var p = document.createElement("p");
                var indP = document.createElement("p");
                var imgBox = document.createElement("div")
                var img = document.createElement("img");
                var textDiv = document.createElement("div");
                textDiv.setAttribute("id", `textDiv${a}`);
                imgBox.setAttribute("id", `imgBox${a}`);
                img.setAttribute("id", `img${a}`)
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
            // appendContacts()
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

const b64toBlob = (b64Data, contentType, sliceSize = 512) => {
    // base 64 to BLOB
    // steps are 
    // 1. decode base16 with atob
    // 2. turn decoded data to unicode data
    // 3. turn that unicode data to Uint8Array
    // 4. push all chucks of Uint8Array in one array
    // 5. make new Blob object from that array data by mention their content Type
    // 6. createObjectUrl(blob);

    const byteCharacters = atob(b64Data);
    // console.log(byteCharacters);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        // console.log(offset);
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        // console.log(slice);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        // console.log(byteNumbers);
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
        // console.log(byteArrays);
    }

    // console.log(byteArrays);
    const blob = new Blob(byteArrays, { type: contentType });
    // console.log(blob);
    return blob;
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
            var sideP = document.getElementById("sidePopa");
            setTimeout(() => {
                var mess = document.getElementById("messages");

                var sP = document.getElementById("sideProfile");
                

                mess.style.width = "45%";
                console.log(preview);
                if (preview != null) {
                    preview.style.width = "45%";
                }
                sP.style.width = "25%";
            }, 0)
            setTimeout(() => {
                var urImg = document.getElementById("urImg");
                urImg.style.display = "block";
                sideP.style.display = "block";
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
            document.getElementById("sidePopa").style.display = "none";
            var mess = document.getElementById("messages");
            var sP = document.getElementById("sideProfile");
            mess.style.width = "70%";
            if (preview != null) {
                preview.style.width = "70%";
            }
            sP.style.width = "0%";

            setTimeout(() => {
                document.getElementById("sideProfile").style.display = "none";
            }, 0)
        }
    }


}
//Window.onload Ends here

var contPkaIdnStartingValue = 0;
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


        // console.log(entireNum.length);
        console.log(unreadMssgs[dip].length); //for mssgs only
        if (unreadMssgs[dip].length > 0) {
            console.log(unreadMssgs[dip]);
            socket.emit("indicator1", { idNumbertoSender: unreadMssgs[dip], whoSentFIles: entireNum[dip], whoRecFiles: myNum, word: "doubleTickBlueArr", type: "mssgs" })
            unreadMssgs[dip] = [];
        }

        console.log(unreadFiles[dip].length); //for files only
        if (unreadFiles[dip].length > 0) {
            console.log(unreadFiles[dip]);
            socket.emit("indicator1", { idNumbertoSender: unreadFiles[dip], whoSentFIles: entireNum[dip], whoRecFiles: myNum, word: "doubleTickBlueArr", type: "files" })
            unreadFiles[dip] = [];
        }

        console.log(unreadImages[dip].length); //for Images only
        if (unreadImages[dip].length > 0) {
            console.log(unreadImages[dip]);
            socket.emit("indicator1", { idNumbertoSender: unreadImages[dip], whoSentFIles: entireNum[dip], whoRecFiles: myNum, word: "doubleTickBlueArr", type: "images" })
            unreadImages[dip] = [];
        }

        console.log(unreadContacts[dip].length); //for contacts only
        if (unreadContacts[dip].length > 0) {
            console.log(unreadContacts[dip]);
            socket.emit("indicator1", { idNumbertoSender: unreadContacts[dip], idNumberStarting: contPkaIdnStartingValue, whoSentFIles: entireNum[dip], whoRecFiles: myNum, word: "doubleTickBlueArr", type: "contacts" })
            unreadContacts[dip] = [];
        }


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

function save(e, a, b) {


    var up2 = document.getElementById("info2");
    var info21 = up2.getElementsByTagName("input")[0];
    var info22 = up2.getElementsByTagName("input")[1];
    if (e == 2) {
        info21.value = a;
        info22.value = b;
    }
    console.log(info21.value, info22.value);


    if (info22.value != myNum) {
        if (info22.value.length == 10) {
            if (info21.value.length != 0) {

                for (var v = 0; v < everything.length; v++) {
                    console.log(info22.value, everything[v].number);
                    if (info22.value == everything[v].number) {
                        alert("contact already exist");
                        break;
                    }
                    if (v == everything.length - 1) {

                        console.log(everything);
                        // console.log(info22.value.length);
                        fetch("http://localhost:3000/savecontacts", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ un1: info21.value, un2: info22.value })
                        }).then((response) => {
                            info21.value = "";
                            info22.value = "";
                            response.json().then((data) => {
                                console.log(data.ans);
                                console.log(data.wholeBody);
                                console.log(data.n1);
                                console.log(data.n2);
                                if (data.ans == 1) {
                                    var a = data.wholeBody.length;
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
                                    textDiv.setAttribute("id", `textDiv${a - 1}`);
                                    imgBox.setAttribute("id", `imgBox${entireNum.length}`);
                                    img.setAttribute("id", `img${a - 1}`)
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
                                    // ContactsWaliImg++;
                                    makeThis();
                                } else if (data.ans == 0) { // just for double check when res rec form server
                                    alert("name can't be same")
                                } else if (data.ans == 0.1) {
                                    alert("Contact already exist")
                                }
                                // appendContacts()
                            })
                        })
                        console.log(everything);
                    }
                }
            } else {
                alert("name can't be empty")
            }
        }
        else {
            alert("Wrong details")
        }
        messageClick();
    } else {
        alert("can't save your own number")
    }
    // To make values empty
    info21.value = "";
    info22.value = "";
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

function sendIt(el, val, yr) {
    if (el == 2) {
        var value = val;
        var yourSelf = yr;
    } else {
        var value = document.getElementById("sendIt").getElementsByTagName('input')[0].value;
        var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
    }
    console.log(everything);


    // console.log(value);


    // console.log(yourSelf);

    var idn;

    if (value.length != 0) {
        for (var loop = 0; loop < everything.length; loop++) {
            if (yourSelf == everything[loop].name) {
                var a1 = document.createElement("div");
                a1.setAttribute("class", "sM")

                var a2 = document.createElement("div");
                a2.setAttribute("id", `sMa${smaKaIdn}`)



                var mssgAndTimeSend = document.createElement("div");
                mssgAndTimeSend.id = `mssgAndTimeSend${smaKaIdn}`;
                ++smaKaIdn;

                var b1 = document.createElement("p"); //for mssg
                b1.innerText = value;

                var time1 = new Date(); // full date and time
                var time2 = time1.toLocaleTimeString().split(" ");
                // console.log(time2);
                var time3 = time2[0].slice(0, time2[0].length - 3) + ` ${time2[1]}`;
                console.log(time3); // converted to 12 hours format

                var timeOfMssg = document.createElement("p"); //for time
                timeOfMssg.innerHTML = time3;
                var imgProgressSentClock = document.createElement("img");
                imgProgressSentClock.src = "/images/clockicon.png"
                imgProgressSentClock.style.display = "block";
                var imgProgressSentTick = document.createElement("img");
                imgProgressSentTick.src = "/images/doubleCheckBlue.png"
                mssgAndTimeSend.appendChild(b1);
                mssgAndTimeSend.appendChild(timeOfMssg);
                mssgAndTimeSend.appendChild(imgProgressSentClock);
                mssgAndTimeSend.appendChild(imgProgressSentTick);
                a2.appendChild(mssgAndTimeSend);

                a1.appendChild(a2);
                idn = document.getElementById(`messagesSent${everything[loop].number}`);
                idn.appendChild(a1);
                document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";
                if (el != 2) {
                    idn.style.display = "block";
                }
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
                console.log(smaKaIdn);

                socket.emit("Outrage", { mess: value, client: everything[loop].number, sender: myNum, senderName: myName, idNumber: smaKaIdn - 1 })
                break;
            }
        }
    }
    check5it()
}
$(document).ready(() => {
    console.log(document.getElementById("sendIt"));
    document.getElementById("sendIt").getElementsByTagName("input")[0].addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.keyCode == 13) {
            sendIt(1, "none", "none");
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

                        var impOne = b64toBlob(data.a, "image/png");
                        data.a = URL.createObjectURL(impOne);
                        console.log(data.a);

                        document.getElementById("myImg44").getElementsByTagName("img")[0].src = data.a;
                        document.getElementById("profDiv").getElementsByTagName("img")[0].src = data.a;
                        document.getElementById("insidePop1").getElementsByTagName("img")[3].src = data.a;

                        //to display uploaded image to every user asynchronously
                        socket.emit("asyncUpload", { buffData: z1, sender: myNum });
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

                    var impOne = b64toBlob(data.a, "image/png");
                    data.a = URL.createObjectURL(impOne);
                    console.log(data.a);


                    document.getElementById("myImg44").getElementsByTagName("img")[0].src = data.a;
                    document.getElementById("profDiv").getElementsByTagName("img")[0].src = data.a;
                    document.getElementById("insidePop1").getElementsByTagName("img")[3].src = data.a;


                    //for Clients
                    setTimeout(() => {
                        console.log(everything);
                        for (var a = 0; a < everything.length; a++) {
                            for (var c = 0; c < data.b.length; c++) {
                                if (everything[a].number == data.b[c].user) {
                                    console.log(document.getElementById(`imgBox${a}`));

                                    var impTwo = b64toBlob(data.b[c].userImg, "image/png"); //base64 to blob
                                    data.b[c].userImg = URL.createObjectURL(impTwo);
                                    console.log(data.b[c].userImg);

                                    document.getElementById(`imgBox${a}`).getElementsByTagName("img")[0].src = data.b[c].userImg;
                                    break;
                                }
                            }
                        }
                        appendContacts()
                    }, 1500)
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
downloadImg(); //for Loading Images

function showThis() {
    zoomInOrOut(1);
    document.getElementById("popup1").getElementsByTagName("img")[3].src = document.getElementById("myImg44").getElementsByTagName("img")[0].src;
    document.getElementById("popup1").style.display = "flex";
}
function closeThis() {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("allImagesKaPapa").style.display = "flex";
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
            document.getElementById("insidePop1").getElementsByTagName("img")[3].src = "/images/prof1 (2).png";
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

function selectPV(e) { //to change the file acceptance according to icon clicked
    if (e == 'takeit1') {
        document.getElementById("input1a").setAttribute("accept", "image/png, image/jpeg, image/jpg, image/gif, video/mp4")  //for images and videos
    }
    else if (e == 'takeit2') {
        document.getElementById("input1a").setAttribute("accept", "text/*, application/*, .csv, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .css, .html, .rtf, .log, .wps") // for docs
    }
    document.getElementById("input1a").click()
    var chup = document.getElementById("prevDiv2");
    // var Rbuttons = document.getElementById("prev2");

    console.log(chup.childNodes);
    // console.log(Rbuttons);
    a = 0;
    while (a < chup.childNodes.length) {
        chup.removeChild(chup.childNodes[0]);
        // Rbuttons.removeChild(Rbuttons.childNodes[0])
    } a++

}
function repeated1() {
    document.getElementById("CntctsMrk3").style.height = "714px";
    document.getElementById("notVisible").style.height = "0px";
    document.getElementById("notVDiv").style.display = "none";
}
function sendTheContacts(a) { //to send the contacts
    array1 = [];
    if (a == 1) {
        document.getElementById("notVDiv").setAttribute("onclick", "ContSend(1)"); //as we are using same divs at 2 place
        document.getElementById("notVDiv2").getElementsByTagName("img")[0].setAttribute("onclick", "sendingConts()");
        document.getElementById("CntctsMrk1").getElementsByTagName("p")[0].innerHTML = "Send contacts";
        document.getElementById("osasA2").getElementsByTagName("p")[0].innerHTML = "Send 1 contact to 'Loba' ?";
        repeated1();
    } else if (a == 2) {// when clicked on scheduler
        document.getElementById("notVDiv").setAttribute("onclick", "ContSend(2)"); //as we are using same divs at 2 place
        document.getElementById("notVDiv2").getElementsByTagName("img")[0].setAttribute("onclick", "scheduledMssgs()");
        document.getElementById("CntctsMrk1").getElementsByTagName("p")[0].innerHTML = "schedule message for more recipients ?";
        var nameC = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerHTML;
        for (var a = 0; a < everything.length; a++) {
            var otherInfoId = document.getElementById(`otherInfoId${a}`).getElementsByTagName("p")[0].innerHTML;
            if (nameC == otherInfoId) {
                document.getElementById(`slctChkBx${a}`).click();
                break;
            }
        }
    }
    // document.getElementById("mainKaBaap").style.opacity = "0.3";
    document.getElementById("theWhole").style.display = "flex";
    document.getElementById('theWhole').style.backgroundColor = "#fbfbfbd1";
    document.getElementById("ContactMark").style.display = "block";

    sendSomething();
}
function scheduleMssg() {//to schedule messages
    if (document.getElementById("sendIt").getElementsByTagName("input")[0].value != "") {
        sendTheContacts(2)
    }
}
function check5it() {
    var a = document.getElementById("inpMsgy").value;
    if (a.length == 0) {
        document.getElementById("sendIt").getElementsByTagName("img")[0].style.opacity = 0.5;
        document.getElementById("sendIt").getElementsByTagName("img")[1].style.opacity = 0.5;
    } else {
        document.getElementById("sendIt").getElementsByTagName("img")[0].style.opacity = 1;
        document.getElementById("sendIt").getElementsByTagName("img")[1].style.opacity = 1;
    }
}
function dontSend(e) {
    document.getElementById("theWhole").style.display = "none";
    document.getElementById('theWhole').style.backgroundColor = "transparent";
    // array1 = []; //to make array empty
    $("[id^='slctChkBx']").css("background-color", "white");
    document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML = "";
    document.getElementById("notVDiv").style.display = "none";

    if (e == 1) { //for cancelling sending
        document.getElementById("ContactMark").style.display = "none";
    } else if (e == 2) { //after Sending
        document.getElementById("finCntcSend").style.display = "none";
    }

}

function DoFocus() {
    console.log(document.getElementById("CntctsMrk2").getElementsByTagName("input")[0].value.length);
    if (document.getElementById("CntctsMrk2").getElementsByTagName("input")[0].value.length != 0) {
        console.log(document.getElementById("CntctsMrk2").getElementsByTagName("img")[1]);
        document.getElementById("CntctsMrk2").getElementsByTagName("img")[1].style.display = "block";
    } else {
        document.getElementById("CntctsMrk2").children[2].getElementsByTagName("img")[0].style.display = "none";
    }
}
var array1;
function appendContacts() { // to append contacts in cntctsMrk3
    console.log(everything);
    var CntctsMrk3 = document.getElementById("CntctsMrk3");
    for (var i = 0; i < everything.length; i++) {
        var div = document.createElement("div");//main
        div.setAttribute("id", `selectConts${i}`);
        var checkBox = document.createElement("div");//checkBox
        checkBox.setAttribute("id", `slctChkBx${i}`)
        var chckTick = document.createElement("img");
        chckTick.src = "/images/Tick.png";
        checkBox.appendChild(chckTick);
        var otherInfo = document.createElement("div");//name or number and status
        otherInfo.setAttribute("class", "otherInfo");
        otherInfo.setAttribute("id", `otherInfoId${i}`);
        var imgDiv = document.createElement("img"); //img
        var thisImg = document.getElementById(`imgBox${i}`).getElementsByTagName("img")[0].src; //just a image url
        console.log(thisImg);
        imgDiv.src = thisImg;
        var nameDiv = document.createElement("p");
        nameDiv.innerText = everything[i].name;
        otherInfo.appendChild(nameDiv);
        div.appendChild(checkBox);
        div.appendChild(imgDiv);
        div.appendChild(otherInfo);



        CntctsMrk3.appendChild(div);
    }

    array1 = [];
    $("[id^='slctChkBx']").click((e) => {
        console.log(array1);
        //to make arrow div
        document.getElementById("notVDiv").style.display = "block";
        document.getElementById("notVDiv").getElementsByTagName("img")[0].src = "/images/sendWhite.png";
        document.getElementById("CntctsMrk3").style.height = "649px";
        document.getElementById("notVisible").style.height = "65px";
        // console.log(everything);
        if (e.currentTarget.id.length == 10) {
            var num = e.currentTarget.id.charAt(e.currentTarget.id.length - 1);
        } else if (e.currentTarget.id.length == 11) {
            var num = e.currentTarget.id.slice(9, 11)
        } else if (e.currentTarget.id.length == 12) {
            var num = e.currentTarget.id.slice(9, 12)
        }
        console.log(num, e.currentTarget.id);

        var itsImg = document.getElementById(`imgBox${num}`).getElementsByTagName("img")[0].src;
        var dop = { "name": everything[num].name, "number": everything[num].number, img: itsImg };
        console.log(dop);

        var lenOf = array1.length;
        var textNumber = document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML;
        // console.log(lenOf);
        if (array1.length == 0) {
            array1.push(dop);
            document.getElementById(`slctChkBx${num}`).style.backgroundColor = "#009688";
            console.log(dop.name);
            document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML = dop.name;
            console.log(textNumber);
        } else {
            for (var j = 0; j < lenOf; ++j) {
                console.log(j, lenOf);
                console.log("executed", j);

                if (everything[num].name == array1[j].name) {
                    var subString = "";
                    console.log(`${everything[num].name},`);
                    var wholeString = document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML;
                    console.log(wholeString);

                    if (wholeString.includes(`, ${everything[num].name}`)) {
                        var thingToSplit = wholeString.split(`, ${everything[num].name}`); //for middle one
                        console.log("middle One");
                    } else if (wholeString.includes(`${everything[num].name}, `)) { //for first one
                        var thingToSplit = wholeString.split(`${everything[num].name}, `);
                        console.log("first one");
                    } else if (wholeString.includes(`${everything[num].name},`)) { //for last one
                        var thingToSplit = wholeString.split(`${everything[num].name}, `);
                        console.log("last one");
                    }


                    console.log(thingToSplit);
                    if (thingToSplit == undefined) {  //unticking every checked box
                        array1 = []; //to make array empty
                        $("[id^='slctChkBx']").css("background-color", "white");
                        document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML = "";
                        repeated1();
                        console.log("undefined one");
                    } else {
                        for (var k = thingToSplit.length - 1; k >= 0; k--) {
                            console.log(thingToSplit[k]);
                            subString = thingToSplit[k] + subString;
                        }

                        console.log(subString);
                        document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML = subString;
                        // console.log("Poping ", array1[j], "for ", everything[num].name);
                        console.log("before split", array1);
                        array1.splice(j, 1); // 1 word only
                        console.log("after split", array1);
                        document.getElementById(`slctChkBx${num}`).style.backgroundColor = "white";
                        break;
                    }
                } else if (j == lenOf - 1) {
                    if (everything[num].name != array1[j].name) {
                        array1.push(dop);
                        document.getElementById(`slctChkBx${num}`).style.backgroundColor = "#009688";
                        document.getElementById("notVisible").getElementsByTagName("p")[0].innerHTML = dop.name + ", " + textNumber;
                    }
                }
            }
        }
        console.log(array1);



    })
}

function ContSend(aasdf) {
    document.getElementById("ContactMark").style.display = "none";
    document.getElementById("finCntcSend").style.display = "block";

    if (aasdf == 1) { // for contacts
        //adding para
        var reciever = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerHTML;
        console.log(reciever);
        if (array1.length < 2) {
            document.getElementById('osasA2').getElementsByTagName("p")[0].innerHTML = `Send ${array1.length} contact to '${reciever}' ?`;
        } else {
            document.getElementById('osasA2').getElementsByTagName("p")[0].innerHTML = `Send ${array1.length} contacts to '${reciever}' ?`;
        }
        document.getElementById("notVDiv2").getElementsByTagName("img")[0].src = '/images/sendWhite.png';
    } else if (aasdf == 2) { //for scheduler
        document.getElementById("osasA2").getElementsByTagName("p")[0].innerHTML = "Selected contacts";
        document.getElementById("notVDiv2").getElementsByTagName("img")[0].src = '/images/timerSend.png';
    }
    //adding divs
    var a = 0;
    while (a < array1.length) {
        var subDivA = document.createElement("div");
        subDivA.setAttribute("class", "subDivs");

        var subDivA1 = document.createElement("div");
        subDivA1.setAttribute("class", "subDivA1")
        subImg1 = document.createElement("img");
        console.log(array1[a].img);
        subImg1.src = array1[a].img;
        subPara1 = document.createElement("p");
        subPara1.innerHTML = array1[a].name;
        subPara1.id = `subParaName${a}`;
        subDivA1.appendChild(subImg1);
        subDivA1.appendChild(subPara1);


        var subDivA2 = document.createElement("div");
        subDivA2.setAttribute("class", "subDivA2");
        subA2P1 = document.createElement("p");
        subA2P1.setAttribute("class", "subA2P1")
        subA2P2 = document.createElement("p");
        subA2P2.setAttribute("class", "subA2P2")
        subA2img = document.createElement("img");
        subDivA2.appendChild(subA2P1);
        subDivA2.appendChild(subA2img);

        subA2P1.innerHTML = array1[a].number;
        subA2img.src = "/images/mssgIcon.png"
        subA2img.id = `subA2Img${a}`;
        subA2P2.innerHTML = "TEL";

        subDivA.appendChild(subDivA1);
        subDivA.appendChild(subDivA2);
        subDivA.appendChild(subA2P2);
        document.getElementById("finDiv2").appendChild(subDivA);
        a++;
    }
    jumpToChat()
}

var contPkaIdn = 0;
function showContToSender(cN) {
    // messagesSent
    contPkaIdnStartingValue = contPkaIdn;
    var idn = document.getElementById(`messagesSent${cN}`);
    console.log(idn);
    console.log(array1);
    console.log(array1.length);
    for (var i = 0; i < array1.length; i++) {
        console.log(i);
        var a1 = document.createElement("div");
        a1.setAttribute("class", "sM")

        var a2 = document.createElement("div");
        a2.setAttribute("id", `sMa${smaKaIdn}`)
        smaKaIdn += 1;



        var contPlate = document.createElement("div");
        contPlate.id = "contPlate";

        var contChild1 = document.createElement("div");
        contChild1.id = `contChildA${contPkaIdn}`;
        contChild1.className = "docDiv";
        var cont1Img = document.createElement("img");
        cont1Img.src = array1[i].img;
        var cont1Name = document.createElement("p");
        cont1Name.innerHTML = array1[i].name;
        var timeAndticks = document.createElement("div"); //div for time and ticks
        timeAndticks.id = `contPlateTAT${contPkaIdn}`;
        var tatp1 = document.createElement("p");
        tatp1.innerHTML = `${getTheTime()}`;
        var tatImg1 = document.createElement("img");
        tatImg1.src = "/images/clockiconGrey.png";
        var tatImg2 = document.createElement("img");
        tatImg2.src = "/images/doubleCheckGray.png";
        timeAndticks.appendChild(tatp1);
        timeAndticks.appendChild(tatImg1);
        timeAndticks.appendChild(tatImg2);


        contChild1.appendChild(cont1Img);
        contChild1.appendChild(cont1Name);
        contChild1.appendChild(timeAndticks);

        var contChild2 = document.createElement("div");
        contChild2.id = `contChildB${contPkaIdn}`;
        var cont2p1 = document.createElement("p");
        cont2p1.innerHTML = "Message";
        cont2p1.id = `contPara${contPkaIdn}`;
        contPkaIdn++;
        var cont2p2 = document.createElement("p");
        cont2p2.innerHTML = "Add to a group";
        contChild2.appendChild(cont2p1);
        contChild2.appendChild(cont2p2);

        a2.appendChild(contPlate);
        contPlate.appendChild(contChild1);
        contPlate.appendChild(contChild2);
        a1.appendChild(a2);
        idn.appendChild(a1);
        if (i == array1.length - 1) { //to scroll after displayed
            var scrollkiheight = idn.scrollHeight;
            console.log(scrollkiheight);
            idn.scrollTop = scrollkiheight;
        }
    }
    dontSend(2); //to back to normal after sending
    backToCntct(2);

    $("[id^='contPara']").click((e) => {// when click on messages by sender
        var id = e.currentTarget.id;
        console.log(id);
        var lastChar = id.charAt(id.length - 1);
        console.log(lastChar);
        var name = document.getElementById(`contChildA${lastChar}`).getElementsByTagName("p")[0].innerHTML;
        var allsavedConts = document.getElementById("allChats").childNodes.length;
        console.log(allsavedConts);
        for (var j = 0; j < allsavedConts; j++) {
            var everySingleCont = document.getElementById(`textDiv${j}`).getElementsByTagName("p")[0].innerHTML;
            if (name == everySingleCont) {
                console.log(everySingleCont);
                document.getElementById(`contts${j}`).click();
                break;
            }
        }
    })
}

function sendingConts() { //emiting/sending selected contacts
    console.log(array1);
    var clientName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerHTML;
    var myName = document.getElementById("myInfo").getElementsByTagName('p')[0].innerHTML;
    myName = myName.slice(8, 14);
    console.log(myName);
    console.log(clientName)
    for (var i = 0; i < everything.length; i++) {
        if (clientName == everything[i].name) {
            console.log(array1[array1.length - 1].name);
            showContToSender(everything[i].number); //to show contacts to sender
            socket.emit("contacts", { jsonData: array1, sender: myNum, senderName: myName, client: everything[i].number, fileType: "contacts", fileName: array1[array1.length - 1].name, 'idNumber': contPkaIdn, 'idNumberStarting': contPkaIdnStartingValue });
            array1 = []; //to make array empty
            break;
        }
    }
}
function scheduledMssgs() { //ask users to set date and time
    document.getElementById("finCntcSend").style.display = "none";
    document.getElementById("wholeDaT").style.display = "flex";
    var min1 = new Date().toISOString().split("T")[0];
    document.getElementById("dateTimeLoc").min = min1;//setting max date to today's date
}
function backToFin() {
    document.getElementById("finCntcSend").style.display = "flex";
    document.getElementById("wholeDaT").style.display = "none";
}
function setTimeDate() {
    console.log(array1);
    var container = [];
    container = array1;
    var dnt = document.getElementById("dateTimeLoc").value;
    var newDate = new Date().toUTCString();
    var futuretime1 = new Date(dnt).getTime();
    var time2 = new Date(newDate).getTime();
    console.log(futuretime1, time2);
    if (futuretime1 < time2) {
        alert("can't accept passed date")
    } else {
        console.log(futuretime1 - time2);
        var val = document.getElementById("sendIt").getElementsByTagName('input')[0].value;

        setTimeout(() => {
            for (var a = 0; a < container.length; a++) {
                sendIt(2, val, container[a].name)
            }

        }, futuretime1 - time2);


        //closing divs after scheduling
        document.getElementById("dateTimeLoc").value = null;
        document.getElementById("wholeDaT").style.display = "none";
        document.getElementById("theWhole").style.display = "none";
        document.getElementById("sendIt").getElementsByTagName("input")[0].value = "";
        backToCntct(1);
        dontSend(1);
    }
    console.log(dnt);
    check5it()
}
function backToCntct(e) {//removing selected divs from #FinDiv2
    var zaruri = document.getElementById("finDiv2");
    while (1) {
        if (zaruri.childNodes.length > 0) {
            console.log(zaruri.childNodes);
            zaruri.removeChild(zaruri.firstChild);
        } else {
            break;
        }
    }


    if (e == 1) {
        document.getElementById("ContactMark").style.display = "block";
    }
    document.getElementById("finCntcSend").style.display = "none";
}

function closeIt() {
    renewForLoop = 0;
    hideIt()
    document.getElementById("yourSelfChild").getElementsByTagName("div")[0].setAttribute("onClick", "sendSomething()");
    document.getElementById("messages").style.display = "flex";
    document.getElementById("Previews").style.display = "none";
    var a1 = document.getElementById("prevDiv2").childNodes;
    console.log(a1);
    var b = 0;
    while (b < a1.length) {
        document.getElementById("prevDiv2").removeChild(a1[0]);
    } b++;
    console.log(a1);

    var a2 = document.getElementById("prev3D").childNodes;
    var b1 = 0;
    while (b1 < a2.length) {
        document.getElementById("prev3D").removeChild(a2[b1]);
    } b1++;
    document.getElementById("input1a").value = "";
    AllFiles = [];
}


function ClickToScroll() {
    $("[id^='D3C']").click((e) => {
        // console.log(e);
        var thisId = e.currentTarget.id;
        console.log(thisId, thisId.length - 1);
        var idn = thisId[thisId.length - 1];
        console.log(idn);
        document.getElementById("prevDiv2").scrollTop = 825 * idn;
    })

    document.getElementById("D3Last").onclick = () => {
        document.getElementById("input1a").click()
    }
}

function VideoSmallPrev() {
    // async () => {
    var prev3D = document.getElementById("prev3D");
    document.getElementById("prevDiv2").scrollTop = 0;
    var a = 0;
    var b = 0;
    var count = 0;
    function dodopo() {
        console.log("before canva");
        // console.log(prev3D.childNodes[a]);
        var canva = prev3D.childNodes[a].getElementsByTagName("canvas")[0];
        // console.log(canva);
        if (canva) {
            prev3D.childNodes[a].removeChild(prev3D.childNodes[a].childNodes[0]);
            var can1 = document.createElement("canvas");
            prev3D.childNodes[a].appendChild(can1)
            var can2 = can1.getContext("2d");
            var video = document.getElementById(`prev2Child${a}`).getElementsByTagName("video")[0];
            // console.log(can1, video);
            setTimeout(() => {
                console.log(video.width);
                can2.drawImage(video, 0, 0);
                console.log(can1);
                b++;
                a++;
                console.log(b);
                document.getElementById("prevDiv2").scrollTop = 825 * b;
                if (a < prev3D.childNodes.length) {
                    dodopo();
                }
            }, count = count + 50);

        } else {
            b++;
            document.getElementById("prevDiv2").scrollTop = 825 * b;
            a++;
            if (a < prev3D.childNodes.length) {
                setTimeout(() => {
                    dodopo();
                }, 60);
            }
        }

    }
    dodopo();
    // }
}

var AllFiles = [];
var renewForLoop = 0;
function sendThisFiles() { // this is preview of the selected images
    scrolledtop = 0;
    var count = 0;
    var D3count = 0;
    var files = document.getElementById("input1a").files;
    var files2 = files;
    files = []; // to make it empty
    for (var rmv = 0; rmv < files2.length; rmv++) { //to remove unwanted files  
        if (files2[rmv].size <= 60000000) {
            files.push(files2[rmv])
        } else {
            count++;
        }
    }
    console.log(files);
    console.log(count + " files removed");
    console.log(renewForLoop);
    if (files.length > 0) {
        var D3Length = document.getElementById("prev3D");
        if (D3Length.childNodes.length > 0) { //to remove the last child
            D3Length.removeChild(D3Length.childNodes[D3Length.childNodes.length - 1]);
        }
        // AllFiles = files;
        document.getElementById("yourSelfChild").getElementsByTagName("div")[0].setAttribute("onClick", "");
        hideIt()
        document.getElementById("messages").style.display = "none";
        document.getElementById("Previews").style.display = "flex";

        console.log(files);

        var parentDiv = document.getElementById("prevDiv2");
        var parent3 = document.getElementById("prev3D")

        for (var a = 0; a < files.length; a++) {
            AllFiles.push(files[a]);
            var lazy = files[a].type;
            if (lazy == "image/png" || lazy == "image/jpeg" || lazy == "image/jpg" || lazy == "image/gif" || lazy == "video/mp4") { //images and videos
                if (lazy == "video/mp4") { //for video Files
                    console.log(" type is mp4");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", `prev2Child${a + renewForLoop}`)

                    var video = document.createElement("video");
                    video.setAttribute("controls", "");
                    video.setAttribute("controlslist", "nofullscreen nodownload");

                    var img1 = document.createElement("source");
                    img1.setAttribute("Type", lazy);
                    img1.src = URL.createObjectURL(files[a]);

                    console.log(URL.createObjectURL(files[a]));
                    video.appendChild(img1);
                    div1.appendChild(video);
                    parentDiv.appendChild(div1);


                    var dool = document.getElementById(`prev2Child${a + renewForLoop}`).getElementsByTagName("video")[0];
                    var D3div = document.createElement("div");//small preview as video
                    // D3div.innerHTML = "MP4";
                    var canva = document.createElement("canvas");
                    // var cntxt = canva.getContext("2d");
                    D3div.appendChild(canva);
                    D3div.setAttribute("id", `D3C${D3count + renewForLoop}`)
                    parent3.appendChild(D3div);



                    // var tap = 0;
                    // var cap = setInterval(() => {
                    //     cntxt.drawImage(dool, 0, 0, 100, 100);
                    //     ++tap;
                    //     if (tap == 2) {
                    //         // console.log(canva.toDataURL("image/png"));
                    //         document.getElementById("prevDiv2").scrollTop = 825 * 1;
                    //         clearInterval(cap);
                    //         // console.log(D3div);
                    //         // D3div.style.backgroundImage = `url(${canva.toDataURL("image/png")})`
                    //     }
                    // }, 500);


                    D3count++;
                } else {
                    console.log(" type is img");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", `prev2Child${a + renewForLoop}`)
                    var img1 = document.createElement("img");
                    img1.src = URL.createObjectURL(files[a]);
                    console.log(URL.createObjectURL(files[a]));
                    div1.appendChild(img1)
                    parentDiv.appendChild(div1);


                    var D3div = document.createElement("div"); //small preview as img
                    D3div.style.backgroundImage = `url(${img1.src})`;
                    D3div.setAttribute("id", `D3C${D3count + renewForLoop}`)
                    D3count++;
                    parent3.appendChild(D3div);

                }



            } else { //if (files[a].type == "text/plain" || files[a].type == "text/html") { //docs
                console.log(" type is text");
                var DocFileName = document.createElement("p");
                DocFileName.innerHTML = files[a].name;
                var div1 = document.createElement("div");
                div1.setAttribute("id", `prev2Child${a + renewForLoop}`)
                var img1 = document.createElement("img");
                img1.setAttribute("class", "prevImgDoc")
                img1.src = "/images/anyDoc.png";
                div1.appendChild(img1);
                div1.appendChild(DocFileName);
                parentDiv.appendChild(div1);
                img1.style.maxHeight = '100px';



                var D3div = document.createElement("div");//small preview as video
                D3div.innerHTML = "TXT";
                D3div.setAttribute("id", `D3C${D3count + renewForLoop}`)
                D3count++;
                parent3.appendChild(D3div);

            }


            if (a == files.length - 1) { // run at the end of this loop

                var D3div = document.createElement("div");//small preview as video
                var p1 = document.createElement("p");
                p1.innerHTML = "+";
                var p2 = document.createElement("p");
                p2.innerHTML = "FILE";
                D3div.appendChild(p1);
                D3div.appendChild(p2);
                D3div.setAttribute("id", "D3Last")

                parent3.appendChild(D3div);

                renewForLoop = a + 1 + renewForLoop;
                VideoSmallPrev();
                ClickToScroll();

            }

        }

    }
}

// var scrolledtop = 0;

// function leftClick() {
//     if (scrolledtop > 0) {
//         console.log("scroll top was: " + scrolledtop);
//         scrolledtop = scrolledtop - 1;
//         console.log("scroll top now: " + scrolledtop);
//         document.getElementById("prevDiv1").getElementsByTagName("a")[0].setAttribute("href", `#prev2Child${scrolledtop}`);
//         document.getElementById(`radio${scrolledtop}`).click();
//     }
// }
// function rightClick() {
//     var a1 = document.getElementById("prevDiv2").childNodes;
//     console.log(a1);
//     console.log("length is" + a1.length);
//     if (scrolledtop < a1.length - 1) {
//         console.log("scroll top was: " + scrolledtop);
//         scrolledtop = scrolledtop + 1;
//         console.log("scroll top now: " + scrolledtop);
//         document.getElementById("prevDiv3").getElementsByTagName("a")[0].setAttribute("href", `#prev2Child${scrolledtop}`);
//         document.getElementById(`radio${scrolledtop}`).click();
//     }
// }
function zoomInOrOut(a) {
    var moveX = 0;
    var moveY = 0;
    console.log(a);
    document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].onclick = () => {
        if (document.getElementById(`toBlockit${a}`).style.display != "none") {
            document.getElementById(`toBlockit${a}`).style.display = "none"
            document.getElementById("allImagesKaPapa").style.display = "none";
            // document.getElementById(`insidePop${a}`).style.display = "none"
            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.transform = "scale(2)";
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.zoom = "100";
            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.cursor = "zoom-out"
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.maxHeight = "80%";
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.maxWidth = "80%";

            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].onmousemove = (e) => {
                // console.log(e.movementX, e.movementY);
                var justMatchW = document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].width;
                var justMatchH = document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].height;
                // console.log(justMatchW, justMatchH);
                // console.log(window.innerWidth, window.innerHeight);

                if (moveX > justMatchW / 7) { //width
                    moveX = justMatchW / 7;

                } else if (moveX < -justMatchW / 7) {
                    moveX = -justMatchW / 7;
                }
                if (moveY > justMatchH / 7) { //height
                    moveY = justMatchH / 7;

                } else if (moveY < -justMatchH / 7) {
                    moveY = -justMatchH / 7;
                }
                if (window.innerWidth <= justMatchW * 1.7) {
                    // console.log(window.innerWidth, justMatchW * 1.7);
                    document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.transform = `scale(2)translate(${moveX * 1.5}px,${moveY * 1.5}px)`;
                    moveX = e.movementX + moveX;
                    console.log(moveX);
                }
                else {
                    moveX = 0;
                }
                if (window.innerHeight <= justMatchH * 1.7) {
                    document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.transform = `scale(2)translate(${moveX * 1.5}px,${moveY * 1.5}px)`;
                    moveY = e.movementY + moveY;
                    console.log(moveY);
                }
                else {
                    moveY = 0;
                }
            }
        } else {
            document.getElementById(`toBlockit${a}`).style.display = "block";
            document.getElementById("allImagesKaPapa").style.display = "flex";
            // document.getElementById("toBlockit2").style.display = "block";
            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.transform = "scale(1)";
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.zoom = "0";
            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.cursor = "zoom-in"
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.maxWidth = "80%";
            // document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].style.maxHeight = "80%";
            document.getElementById(`insidePop${a}`).getElementsByTagName("img")[3].onmousemove = (e) => {
                //do nothing
            }
        }
    }
}

var lastOne = null;
var scollFirstTime = "zooma0";
function JustForScrolling(e) {
    console.log(e); //that is clicked

    if (scollFirstTime.length == 6) {
        var a1 = parseInt(scollFirstTime.charAt(scollFirstTime.length - 1))
    }
    else {
        var randarr = scollFirstTime.split("a");
        console.log("splitted");
        var a1 = parseInt(randarr[1]);
        console.log(a1);
    }

    if (e.length == 6) {
        var a2 = parseInt(e.charAt(e.length - 1))
    } else {
        var randarr = e.split("a");
        console.log("splitted");
        var a2 = parseInt(randarr[1]);
        console.log(a2);
    }

    console.log(a1, a2);
    var boomrah;
    if (parseInt(a1) != 0) {
        boomrah = a1 * 100;
        console.log(boomrah);
    } else {
        console.log(parseInt(a1));
        boomrah = 0;
    }

    if (a1 < a2) {
        for (a1; a1 < a2; a1++) {
            boomrah += 100;
        }
        console.log(boomrah);
        document.getElementById("allImagesKaPapa").scrollLeft = boomrah;
    }
    if (a1 > a2) {
        for (a2; a2 < a1; a2++) {
            boomrah -= 100;
        }
        console.log(boomrah);
        document.getElementById("allImagesKaPapa").scrollLeft = boomrah;
    }
    document.getElementById(e).style.width = "80px"; // to make selected div smaller
    document.getElementById(e).style.height = "80px";
    document.getElementById(e).style.borderWidth = "3px";
    document.getElementById(e).style.margin = "0px 6px"
    document.getElementById(e).style.borderColor = "rgb(195 195 195)";

    if (lastOne != null) {  // to make last selected div same as before
        document.getElementById(lastOne).style.width = "95px";
        document.getElementById(lastOne).style.height = "95px";
        document.getElementById(lastOne).style.borderWidth = "4px";
        document.getElementById(e).style.margin = "0px 3px"
        document.getElementById(lastOne).style.borderColor = "";
    }


    scollFirstTime = e;
    lastOne = e;
}


function allImagesKaPapafunc(e) {
    console.log(e);
    var user = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerHTML;
    console.log(user);
    var number;

    var hh1 = document.getElementById("allImagesKaPapa"); //to remove every child elements
    hh1.innerHTML = "";
    var zoomKaIdn = 0;
    // var zoomKaIdnrMa = 0;

    for (var loop = 0; loop < everything.length; loop++) {//to add images
        if (user == everything[loop].name) {
            number = everything[loop].number;

            var dom1 = document.createElement("div");
            dom1.setAttribute("id", "random1"); //to make a random Div1
            hh1.appendChild(dom1);

            //processing
            var root = document.getElementById(`messagesSent${number}`);
            console.log(root);
            console.log(root.childNodes.length);
            var div1 = document.createElement("div")
            div1.setAttribute("id", "noNameDiv")
            for (var loop1 = 0; loop1 < root.childNodes.length; loop1++) {
                try {
                    var imgSource = document.getElementById(`sMa${loop1}`).childNodes[0];
                    if (imgSource.nodeName == "IMG") { //checking if child is 'img' or a 'p'
                        var zoom0 = document.createElement("div");
                        zoom0.setAttribute("id", `zooma${zoomKaIdn}`);
                        ++zoomKaIdn;
                        var imgIs = document.getElementById(`sMa${loop1}`).getElementsByTagName("img")[0].src;
                        zoom0.style.backgroundImage = `url(${imgIs})`;
                        div1.appendChild(zoom0);

                    }
                } catch { }
            }
            for (var loop2 = 0; loop2 < root.childNodes.length; loop2++) {
                try {
                    var imgSource = document.getElementById(`rMa${loop2}`).childNodes[0];
                    if (imgSource.nodeName == "IMG") { //checking if child is 'img' or a 'p'
                        var zoom0 = document.createElement("div");
                        zoom0.setAttribute("id", `zooma${zoomKaIdn}`);
                        ++zoomKaIdn;
                        var imgIs = document.getElementById(`rMa${loop2}`).getElementsByTagName("img")[0].src;
                        zoom0.style.backgroundImage = `url(${imgIs})`;
                        div1.appendChild(zoom0);

                    }
                } catch { }
            }

            // ------
            hh1.appendChild(div1);
            console.log("done");

            $("[id^='zooma']").click((e) => {
                // console.log(e.target.id);
                var arr1 = e.target.style.backgroundImage;
                var val1 = arr1.slice(5, arr1.length - 2); //to slice pure url
                console.log(val1);
                if (document.getElementById("insidePop2").getElementsByTagName("img")[3].src != val1) {
                    document.getElementById("insidePop2").getElementsByTagName("img")[3].src = val1;
                }
                //toScroll
                JustForScrolling(e.target.id);

            })
            var dom2 = document.createElement("div");
            dom2.setAttribute("id", "random2"); //to make a random Div1
            hh1.appendChild(dom2);
            break;
        }
    }
}

var smaKaIdn = 0;
var onlyForSentImg = 0;
function finallySend() { //finally files will be send to the other client


    var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText; //client name
    var files = AllFiles;
    console.log(files);
    var idn;

    if (files.length != 0) { //showing images to client
        for (var loop = 0; loop < everything.length; loop++) {
            if (yourSelf == everything[loop].name) {
                for (var loopy = 0; loopy < files.length; loopy++) {
                    var a1 = document.createElement("div");
                    a1.setAttribute("class", "sM");

                    var a2 = document.createElement("div");
                    a2.setAttribute("id", `sMa${smaKaIdn}`);


                    var b1 = document.createElement("img");
                    if (files[loopy].type == "image/png" || files[loopy].type == "image/jpeg" || files[loopy].type == "image/jpg" ||
                        files[loopy].type == "image/gif") { //images and videos )

                        //for tick images in image king of file
                        var lowerDivForImg = document.createElement("div");
                        lowerDivForImg.id = `lowerDivForImg${smaKaIdn}`;
                        smaKaIdn += 1;
                        var p1 = document.createElement("p");
                        p1.innerHTML = `${getTheTime()}`;
                        var img1 = document.createElement("img");
                        img1.src = "/images/clockiconWhite.png";
                        var img2 = document.createElement("img");
                        img2.src = "/images/doubleCheckGray.png";
                        lowerDivForImg.appendChild(p1);
                        lowerDivForImg.appendChild(img1);
                        lowerDivForImg.appendChild(img2);



                        b1.src = URL.createObjectURL(files[loopy]);
                        a2.appendChild(b1);
                        a2.appendChild(lowerDivForImg);
                        a1.appendChild(a2);
                        idn = document.getElementById(`messagesSent${everything[loop].number}`);
                        idn.appendChild(a1);
                        a2.setAttribute("class", `${onlyForSentImg}`);
                        onlyForSentImg += 1;
                    }
                    else { //if (files[loopy].type == "text/plain" || files[loopy].type == "text/html") { // other documents 
                        b1.src = "/images/anyDoc.png";
                        b1.style.maxHeight = "80px";
                        var docDiv = document.createElement("div");
                        docDiv.setAttribute("class", "docDiv");
                        var docDivLower = document.createElement("div");
                        docDivLower.setAttribute("class", "docDivLower");
                        var docDivLowerA = document.createElement("div");
                        docDivLowerA.setAttribute("class", "docDivLowerA");
                        var docDivLowerB = document.createElement("div");
                        docDivLowerB.setAttribute("class", "docDivLowerB");
                        var docDivLowerC = document.createElement("div");
                        docDivLowerC.setAttribute("id", `docDivLowerC${smaKaIdn}`);
                        smaKaIdn += 1;

                        var docDivfn = document.createElement("p");


                        if (files[loopy].name.length > 17) { //to slice the name of file
                            docDivfn.innerText = files[loopy].name.slice(0, 16) + "...";
                        } else {
                            docDivfn.innerText = files[loopy].name;
                        }
                        var tt1;
                        var docDivfn2 = document.createElement("p"); // file type
                        var docDivfn3 = document.createElement("p"); // size 
                        var docDivfn4 = document.createElement("p"); // size type
                        var docDivfn5 = document.createElement("p"); // Time


                        var sizeWeWant; // for file size
                        var j1 = files[loopy].size;
                        if (j1 < 1000) {
                            sizeWeWant = `${j1} B`;
                        } else {
                            if (j1 >= 1000 && j1 < 1000000) {
                                tt1 = (j1 / 1000).toFixed(1);
                                sizeWeWant = `${tt1} KB`;
                            } else if (j1 >= 1000000) {
                                tt1 = (j1 / 1000000).toFixed(1);
                                sizeWeWant = `${tt1} MB`;
                            }
                        } //

                        //.csv, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .css, .html, .rtf, .log, .wps
                        var properExtention = files[loopy].name.split(".")[1];
                        console.log(properExtention);
                        docDivfn2.innerText = `${properExtention}`;
                        docDivfn3.innerText = `.`;
                        docDivfn4.innerText = `${sizeWeWant}`;
                        docDivfn5.innerHTML = `${getTheTime()}`;

                        var imgProgressSentClock = document.createElement("img");
                        imgProgressSentClock.src = "/images/doubleCheckBlue.png";
                        // imgProgressSentClock.style.display = "block";
                        var imgProgressSentTick = document.createElement("img");
                        imgProgressSentTick.src = "/images/clockicon.png";
                        imgProgressSentTick.style.display = "block";

                        //to download text document
                        var anchor = document.createElement('a');
                        anchor.setAttribute("download", files[loopy].name);
                        anchor.setAttribute("class", "anchorT");
                        var ina = URL.createObjectURL(files[loopy]);
                        console.log(ina);
                        anchor.setAttribute("href", ina);
                        //

                        var docDivimg = document.createElement("img");
                        docDivimg.src = "/images/download.png";


                        docDiv.appendChild(b1);
                        docDiv.appendChild(docDivfn);
                        docDivLowerA.appendChild(docDivfn2);
                        docDivLowerA.appendChild(docDivfn3);
                        docDivLowerA.appendChild(docDivfn4);
                        docDivLowerB.appendChild(docDivfn5);
                        docDivLowerC.appendChild(imgProgressSentTick);
                        docDivLowerC.appendChild(imgProgressSentClock);
                        docDivLower.appendChild(docDivLowerA);
                        docDivLower.appendChild(docDivLowerB);
                        docDivLower.appendChild(docDivLowerC);
                        anchor.appendChild(docDivimg);
                        docDiv.appendChild(anchor);
                        a2.appendChild(docDiv);
                        a2.appendChild(docDivLower);
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
                        $("[id^='sMa']").click((e) => { //to view the image we have sent
                            console.log(e);
                            console.log(e.target.currentSrc);
                            if (e.target.currentSrc != "http://localhost:3000/images/doubleCheckBlue.png" && e.target.currentSrc != "http://localhost:3000/images/doubleCheckWhite.png") {
                                try {
                                    var test = document.getElementById(e.currentTarget.id).getElementsByTagName("img")[0].src;
                                    var test1 = document.getElementById(e.currentTarget.id).getElementsByTagName("img")[1].src;
                                } catch {
                                    var test = "";
                                    var test1 = "";

                                }
                                console.log(test, test1);
                                if (test != "http://localhost:3000/images/anyDoc.png" && test1 != "http://localhost:3000/images/download.png") {
                                    if (e.target.currentSrc != undefined) {
                                        document.getElementById("insidePop2").getElementsByTagName("img")[3].src = e.target.currentSrc;
                                        document.getElementById("popup2").style.display = "flex";
                                    }
                                    document.getElementById("personal").getElementsByTagName("img")[0].src = document.getElementById("profDiv").getElementsByTagName("img")[0].src;
                                    var name = document.getElementById("myInfo").getElementsByTagName("p")[0].innerText.split("Welcome ");
                                    console.log(name);

                                    document.getElementById("personal").getElementsByTagName("p")[0].innerText = name[1];

                                    allImagesKaPapafunc(e)
                                    JustForScrolling("zooma" + e.currentTarget.className)
                                }
                            }
                        })



                        document.getElementById("insidePop2").onclick = (e) => {

                            // console.log(e)
                            if (e.target.id == "insidePop2") {
                                // console.log("boom");
                                closeThis();
                            }
                        }
                        zoomInOrOut(2);
                    }
                }
            }
        }
    }


    //sending Data
    var doop = 0
    function justLoop() {
        console.log("doop is : " + doop);
        console.log("chla");
        var ft = files[doop].type;
        var fn = files[doop].name;
        var fs = files[doop].size;
        console.log(ft);

        var reader = new FileReader();
        reader.readAsArrayBuffer(files[doop]); //data to be sent

        var yourSelf = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
        var myName = document.getElementById("myInfo").getElementsByTagName("p")[0].innerText;
        var myname1 = myName.split(" ")
        myName = myname1[myname1.length - 1];
        console.log(myName);

        reader.onload = (event) => {
            console.log(event.target.result);
            for (var loop = 0; loop < everything.length; loop++) {
                if (yourSelf == everything[loop].name) {
                    // console.log(reader.result);
                    if (ft == "video/mp4") { //for Videos only 

                        var hha = event.target.result.slice(0, 1000000);
                        for (var a = 0; a < fs; a = a + 1000000) {
                            checkPoint = a + 1000000;
                            var streamData = reader.result.slice(a, checkPoint);
                            socket.emit("tryThis", { buffData: streamData, sender: myNum, senderName: myName, client: everything[loop].number, fileType: ft, fileName: fn, fileSize: fs, idNumber: smaKaIdn - 1 });
                        }
                        if (checkPoint > fs) {
                            console.log("ended");
                            socket.emit("tryThis", { buffData: "ended", sender: myNum, senderName: myName, client: everything[loop].number, fileType: ft, fileName: fn, fileSize: fs, idNumber: smaKaIdn - 1 });
                        }


                    } else { //for Image
                        socket.emit("tryThis", { buffData: event.target.result, sender: myNum, senderName: myName, client: everything[loop].number, fileType: ft, fileName: fn, fileSize: fs, idNumber: smaKaIdn - 1 });
                    }
                }
            }
            // document.getElementById("input1a").value = "";
        }
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
    document.getElementById("download1").getElementsByTagName("a")[0].href = document.getElementById("insidePop2").getElementsByTagName("img")[3].src;
}
function downloadThis1() {
    console.log("boom download 1 chla");
    document.getElementById("download").getElementsByTagName("a")[0].href = document.getElementById("insidePop1").getElementsByTagName("img")[3].src;
}

function messageClick() { //when reciever clicks on message button
    $("[id^='recContPara']").click((e) => {
        var allsavedConts = document.getElementById("allChats").childNodes;
        var filteredSavedConts = [];
        for (var j = 0; j < allsavedConts.length; j++) { //to filter from different types of child nodes we need only DIV type
            if (allsavedConts[j].nodeName == "DIV") {
                filteredSavedConts.push(allsavedConts[j])
            }
        }
        var id = e.currentTarget.id;
        var lastChar = id.charAt(id.length - 1);
        var nameToMssg = document.getElementById(`recContChildA${lastChar}`).getElementsByTagName("p")[0].innerHTML;


        console.log(document.getElementById("allChats").childNodes);
        console.log(filteredSavedConts.length);

        for (var i = 0; i < filteredSavedConts.length; i++) {
            var compName = document.getElementById(`textDiv${i}`).getElementsByTagName("p")[0].innerHTML;
            console.log(i, compName);
            if (nameToMssg == compName) {
                document.getElementById(`contts${i}`).click();
                break;
            } else if (i == filteredSavedConts.length - 1) {
                alert('contact not present')
            }
        }

    })
}
function jumpToChat() {
    $("[id^='subA2Img']").click((e) => { //when click on mssg icon at last stage of sending contacts
        console.log(e);
        var id = e.currentTarget.id;
        console.log(id);
        // subA2Img-subParaName
        if (id.length == 9) {
            var lastChar = id.slice(8, 9);
        } else if (id.length == 10) {
            var lastChar = id.slice(8, 10);
        }
        console.log(lastChar);
        var name = document.getElementById(`subParaName${lastChar}`).innerHTML;
        console.log(name);

        var allsavedConts = document.getElementById("allChats").childNodes;
        var filteredSavedConts = [];
        for (var j = 0; j < allsavedConts.length; j++) { //to filter from different types of child nodes we need only DIV type
            if (allsavedConts[j].nodeName == "DIV") {
                filteredSavedConts.push(allsavedConts[j])
            }
        }
        console.log(filteredSavedConts.length);

        for (var i = 0; i < filteredSavedConts.length; i++) {
            var compName = document.getElementById(`textDiv${i}`).getElementsByTagName("p")[0].innerHTML;
            console.log(i, compName);
            if (name == compName) {
                document.getElementById(`contts${i}`).click();
                break;
            } else if (i == filteredSavedConts.length - 1) {
                alert('some error occurred')
            }
        }
        backToCntct(1);
        dontSend(1);
    })
}


// socket.on(myNum, (data) => { //message is recieved

// })


var rMaIdn = 0;
var onlyForRecImg = 0;
var recContIdn = 0;
socket.on(myNum, (data) => { //to recieve files from B to A (media files)
    console.log(myNum);
    if (data.idn == 22) {
        console.log(data);
        console.log(data.a);  //data
        console.log(data.a1); //sender
        console.log(data.a2); //senderName
        console.log(data.a3); //fileType
        console.log(data.a4); //fileName
        console.log(data.a5); //fileSize
        console.log(data.idNo); //idNumber
        // function to show data to the user

        function forNonMssgData() {
            for (var b = 0; b < everything.length; b++) {
                if (data.a1 == everything[b].number) {

                    // console.log("ho gyaaaaaaaaaaaaaaaaaaaa");

                    var a1 = document.createElement("div");
                    a1.setAttribute("class", "rM")

                    var a2 = document.createElement("div");
                    a2.setAttribute("id", `rMa${rMaIdn}`)
                    ++rMaIdn;
                    var b1 = document.createElement("img");
                    idn = document.getElementById(`messagesSent${everything[b].number}`);
                    if (data.a3 == "image/png" || data.a3 == "image/jpeg" || data.a3 == "image/jpg" ||
                        data.a3 == "image/gif") { //images )
                        // b1.src = `data:image/png;base64,${data.a}`; //this should not be used
                        console.log("If chla");

                        const blob = b64toBlob(data.a, data.a3); //to blob
                        const blobUrl = URL.createObjectURL(blob);
                        console.log(blobUrl); //--------------------------------------------------------------

                        b1.src = blobUrl;

                        a2.setAttribute("class", onlyForRecImg);
                        a2.appendChild(b1)

                        a1.appendChild(a2);

                        idn.appendChild(a1);
                        onlyForRecImg += 1;

                        var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                        console.log(clName, data.a2, data.a1);
                        if (clName == data.a1 || clName == data.a2) { //if sender's chat is opened
                            socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlue", type: "images" })
                        }
                        else { //not opened
                            var idn = document.getElementById(`contts${b}`).getElementsByTagName("p")[1];
                            if (data.a4.length > 25) {
                                idn.innerText = data.a4.slice(0, 23) + "...";
                            } else {
                                idn.innerText = data.a4;
                            }
                            unreadImages[b].push(data.idNo); // so when reciever clicked on chat blue ticks will be appeared in sender's side
                            console.log(unreadImages[b]);
                            socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlack", type: "images" })
                        }
                    } else {
                        console.log("else chla");
                        console.log(data.startingId);
                        console.log(data.idNo);
                        if (data.a3 == "contacts") { // recieving contacts
                            console.log(data.a);
                            for (var i = 0; i < data.a.length; i++) {

                                var contPlate = document.createElement("div");
                                contPlate.id = "recContPlate";

                                var contChild1 = document.createElement("div");
                                contChild1.id = `recContChildA${recContIdn}`;
                                contChild1.className = "docDiv1";
                                var cont1Img = document.createElement("img");
                                cont1Img.src = data.a[i].img;
                                var cont1Name = document.createElement("p");
                                cont1Name.innerHTML = data.a[i].name;
                                contChild1.appendChild(cont1Img);
                                contChild1.appendChild(cont1Name);

                                var contChild2 = document.createElement("div");
                                contChild2.id = `recContChildB${recContIdn}`;
                                var cont2p1 = document.createElement("p");
                                cont2p1.innerHTML = "Message";
                                cont2p1.id = `recContPara${recContIdn}`;
                                recContIdn++;
                                var cont2p2 = document.createElement("p");
                                cont2p2.innerHTML = "Add to a group";
                                contChild2.appendChild(cont2p1);
                                contChild2.appendChild(cont2p2);

                                a2.appendChild(contPlate);
                                contPlate.appendChild(contChild1);
                                contPlate.appendChild(contChild2);
                                a1.appendChild(a2);
                                idn.appendChild(a1);

                                // if (i != data.a.length - 1) {
                                var a1 = document.createElement("div");
                                a1.setAttribute("class", "rM")

                                var a2 = document.createElement("div");
                                a2.setAttribute("id", `rMa${rMaIdn}`)
                                ++rMaIdn;
                                // }
                                console.log(data.a[i].name, data.a[i].number);
                                // save(2, data.a[i].name, data.a[i].number);



                            }
                            var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                            // console.log(clName, data.a2, data.a1);
                            if (clName == data.a1 || clName == data.a2) { //if sender's chat is opened
                                socket.emit("indicator1", { idNumbertoSender: [data.idNo], idNumberStarting: data.startingId, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlue", type: "contacts" })

                            }
                            else { //not opened
                                var idn1 = document.getElementById(`contts${b}`).getElementsByTagName("p")[1];
                                if (data.a4.length > 25) {
                                    idn1.innerText = data.a4.slice(0, 23) + "...";
                                } else {
                                    idn1.innerText = data.a4;
                                }
                                unreadContacts[b].push(data.idNo); // so when reciever clicked on chat blue ticks will be appeared in sender's side
                                console.log(unreadContacts[b]);
                                socket.emit("indicator1", { idNumbertoSender: [data.idNo], idNumberStarting: data.startingId, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlack", type: "contacts" })
                            }

                        } else { //if (data.a3 == "text/plain" || data.a3 == "text/html") {
                            console.log("for Files");
                            b1.src = "/images/anyDoc.png"
                            b1.style.maxHeight = "80px";
                            var docDiv = document.createElement("div");
                            docDiv.setAttribute("class", "docDiv1");
                            var docDivLower = document.createElement("div");
                            docDivLower.setAttribute("class", "docDivLower1");
                            var docDivLower1A = document.createElement("div");
                            docDivLower1A.setAttribute("class", "docDivLower1A");
                            var docDivLower1B = document.createElement("div");
                            docDivLower1B.setAttribute("class", "docDivLower1B");


                            var docDivfn = document.createElement("p");


                            if (data.a4.length > 17) { //to slice the name of file
                                docDivfn.innerText = data.a4.slice(0, 16) + "...";
                            } else {
                                docDivfn.innerText = data.a4;
                            }
                            var tt1;
                            var docDivfn2 = document.createElement("p");
                            var docDivfn3 = document.createElement("p");
                            var docDivfn4 = document.createElement("p");
                            var docDivfn5 = document.createElement("p");

                            // for file size
                            var sizeWeWant = data.a5;
                            console.log(data.a5);
                            var j1 = data.a5;
                            if (j1 < 1000) {
                                sizeWeWant = `${j1} B`;
                            } else {
                                if (j1 >= 1000 && j1 < 1000000) {
                                    tt1 = (j1 / 1000).toFixed(1);
                                    sizeWeWant = `${tt1} KB`;
                                } else if (j1 >= 1000000) {
                                    tt1 = (j1 / 1000000).toFixed(1);
                                    sizeWeWant = `${tt1} MB`;
                                }
                            }

                            //.csv, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .css, .html, .rtf, .log, .wps //File types
                            var properExtention = data.a4.split(".")[1];
                            console.log(properExtention); //Extention of a file
                            docDivfn2.innerText = `${properExtention}`;
                            docDivfn3.innerText = `.`;
                            docDivfn4.innerText = `${sizeWeWant}`;
                            docDivfn5.innerText = `${getTheTime()}`;


                            // if (data.a3 == "text/plain") {
                            //     docDivfn2.innerText = `TXT . ${sizeWeWant}`;
                            // }
                            // if (data.a3 == "text/html") {
                            //     docDivfn2.innerText = `HTML . ${sizeWeWant}`;
                            // }

                            // if (properExtention == "mp4") {
                            //     // const blob = b64toBlob(data.a, data.a3); //base64toblob to blob
                            //     blob = new Uint8Array(data.a);
                            //     const blobUrl = URL.createObjectURL(blob);
                            //     console.log(blobUrl);
                            //     var anchor = document.createElement('a');
                            //     anchor.setAttribute("download", data.a4);
                            //     anchor.setAttribute("class", "anchorT");
                            //     anchor.setAttribute("href", blobUrl);
                            // } else {
                            //to download text document
                            const blob = b64toBlob(data.a, data.a3); //base64toblob to blob
                            const blobUrl = URL.createObjectURL(blob);
                            console.log(blobUrl);

                            var anchor = document.createElement('a');
                            anchor.setAttribute("download", data.a4);
                            anchor.setAttribute("class", "anchorT");
                            anchor.setAttribute("href", blobUrl);
                            //
                            // }

                            var docDivimg = document.createElement("img");
                            docDivimg.src = "/images/download.png";
                            docDiv.appendChild(b1);
                            docDiv.appendChild(docDivfn);
                            // docDiv.appendChild(docDivfn2);
                            docDivLower1A.appendChild(docDivfn2);
                            docDivLower1A.appendChild(docDivfn3);
                            docDivLower1A.appendChild(docDivfn4);
                            docDivLower1B.appendChild(docDivfn5);
                            docDivLower.appendChild(docDivLower1A);
                            docDivLower.appendChild(docDivLower1B);
                            anchor.appendChild(docDivimg);
                            docDiv.appendChild(anchor);
                            a2.appendChild(docDiv);
                            a2.appendChild(docDivLower);
                            a1.appendChild(a2);
                            // idn = document.getElementById(`messagesSent${everything[b].number}`);
                            idn.appendChild(a1);



                            // idn = document.getElementById(`messagesSent${everything[b].number}`);
                            // idn.appendChild(a1);
                            document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";

                            var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                            console.log(clName, data.a2, data.a1);
                            if (clName == data.a1 || clName == data.a2) { //if sender's chat is opened
                                console.log("gya");
                                idn.style.display = "block";
                                document.getElementById(`contts${b}`).getElementsByTagName("p")[1] = "";
                                socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlue", type: "files" })
                            }
                            else { //not opened
                                var idn = document.getElementById(`contts${b}`).getElementsByTagName("p")[1];
                                if (data.a4.length > 25) {
                                    idn.innerText = data.a4.slice(0, 23) + "...";
                                } else {
                                    idn.innerText = data.a4;
                                }
                                unreadFiles[b].push(data.idNo); // so when reciever clicked on chat blue ticks will be appeared in sender's side
                                console.log(unreadFiles[b]);

                                socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.a1, whoRecFiles: myNum, word: "doubleTickBlack", type: "files" })
                            }

                        }
                    }
                    $("[id^='rMa']").click((e) => { //to put into insidePop
                        console.log(e);
                        console.log(e.target.currentSrc);
                        if (e.target.currentSrc != undefined) {
                            try {
                                var test = document.getElementById(e.currentTarget.id).getElementsByTagName("img")[0].src;
                                var test1 = document.getElementById(e.currentTarget.id).getElementsByTagName("img")[1].src;
                            } catch {
                                var test = "";
                                var test1 = "";

                            }
                            console.log(test, test1);
                            if (test != "http://localhost:3000/images/anyDoc.png" && test1 != "http://localhost:3000/images/download.png") {
                                if (e.target.currentSrc != undefined) {
                                    document.getElementById("insidePop2").getElementsByTagName("img")[3].src = e.target.currentSrc;
                                    document.getElementById("popup2").style.display = "flex";
                                }
                                document.getElementById("personal").getElementsByTagName("img")[0].src = document.getElementById("yourSelf").getElementsByTagName("img")[0].src;
                                document.getElementById("personal").getElementsByTagName("p")[0].innerText = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                                zoomInOrOut(2);
                                allImagesKaPapafunc(e);

                                JustForScrolling("zooma" + e.currentTarget.className)
                            }
                        }
                    })


                    setTimeout(() => { //to scroll after messages displayed
                        var scrollkiheight = idn.scrollHeight;
                        console.log(scrollkiheight);
                        idn.scrollTop = scrollkiheight;

                    }, 1000)
                    break;
                } else if (b == everything.length - 1) {  // else contact need to be saved first then mssg wiil be displayed
                    if (everything[b].number != data.sender) {
                        save(2, data.a1, data.a1)
                        setTimeout(() => {
                            forNonMssgData()
                        }, 2000);
                    }
                }
            }
        }
        if (everything.length == 0) { // if our contact list is 0 
            save(2, data.a1, data.a1)
            setTimeout(() => {
                forNonMssgData()
            }, 2000);
        } else {
            forNonMssgData()
        }
    } else if (data.idn == 11) {
        console.log(myNum);
        console.log(data.mess);
        console.log(data.sender);
        console.log(data.senderName);
        console.log(data.idNo);
        // function to show data to the user

        function reDoIt() {
            for (var a = 0; a < everything.length; a++) {
                if (data.sender == everything[a].number) { // if the sender is already saved in our contact list
                    // alert("known mssg recieved")
                    console.log("ho gyaaaaaaaaaaaaaaaaaaaa");

                    var a1 = document.createElement("div");
                    a1.setAttribute("class", "rM")

                    var a2 = document.createElement("div");
                    a2.setAttribute("id", `rMa${rMaIdn}`)

                    var b1 = document.createElement("p"); //for mssg recieved
                    b1.innerText = data.mess;

                    var mssgAndTimeRec = document.createElement("div");
                    mssgAndTimeRec.id = `mssgAndTimeRec${rMaIdn}`;
                    ++rMaIdn;
                    var time3 = getTheTime()

                    var timeOfMssg = document.createElement("p"); //for time
                    timeOfMssg.innerHTML = time3;
                    // var imgProgressRec = document.createElement("img");
                    // imgProgressRec.src = "/images/clockicon.png"
                    mssgAndTimeRec.appendChild(b1);
                    mssgAndTimeRec.appendChild(timeOfMssg);
                    // mssgAndTimeRec.appendChild(imgProgressRec);
                    a2.appendChild(mssgAndTimeRec);


                    var idn;
                    a1.appendChild(a2);
                    idn = document.getElementById(`messagesSent${everything[a].number}`);
                    idn.appendChild(a1);
                    document.getElementById("sendIt").getElementsByTagName('input')[0].value = "";


                    var clName = document.getElementById("yourSelf").getElementsByTagName("p")[0].innerText;
                    console.log(clName); //name or number shown above when someone chat is opened
                    console.log(data.sender);
                    if (clName == data.senderName || clName == data.sender) { //when sender's chat is opened
                        console.log("gya");
                        idn.style.display = "block";
                        document.getElementById(`contts${a}`).getElementsByTagName("p")[1] = "";
                        socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.sender, whoRecFiles: myNum, word: "doubleTickBlue", type: "mssgs" })
                    }
                    else {
                        var idn = document.getElementById(`contts${a}`).getElementsByTagName("p")[1];
                        if (data.mess.length > 25) {
                            idn.innerText = data.mess.slice(0, 23) + "...";
                        } else {
                            idn.innerText = data.mess;
                        }
                        console.log(a);
                        unreadMssgs[a].push(data.idNo); // so when reciever clicked on chat blue ticks will be appeared in sender's side
                        console.log(unreadMssgs[a]);
                        socket.emit("indicator1", { idNumbertoSender: data.idNo, whoSentFIles: data.sender, whoRecFiles: myNum, word: "doubleTickBlack", type: "mssgs" })
                    }

                    setTimeout(() => { //to scroll after messages displayed
                        var scrollkiheight = idn.scrollHeight;
                        console.log(scrollkiheight);
                        idn.scrollTop = scrollkiheight;
                    }, 100)
                    break;
                } else if (a == everything.length - 1) {  // else contact need to be saved first then mssg wiil be displayed
                    if (data.sender != everything[a].number) {
                        save(2, data.sender, data.sender)
                        setTimeout(() => {
                            reDoIt()
                        }, 2000);
                    }
                }
            }
        }
        if (everything.length == 0) { // if our contact list is 0 
            save(2, data.sender, data.sender)
            setTimeout(() => {
                reDoIt()
            }, 2000);
        } else {
            reDoIt();
        }

    } else if (data.idn == 33) { // for Ticks
        console.log(data);
        console.log(data.reciever);
        console.log(data.idNumber);
        console.log(data.word);
        console.log(data.type);
        console.log(data.startingId);

        if (data.type == "files") { // For the text Files and other files
            if (data.word == "doubleTickBlueArr") {
                console.log(data.idNumber); // array comes here
                for (var nun = 0; nun < data.idNumber.length; nun++) {
                    document.getElementById(`docDivLowerC${data.idNumber[nun]}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                    document.getElementById(`docDivLowerC${data.idNumber[nun]}`).getElementsByTagName("img")[0].style.display = "none";
                    document.getElementById(`docDivLowerC${data.idNumber[nun]}`).getElementsByTagName("img")[1].style.display = "block";
                }
            } else {
                if (data.word == "doubleTickBlue") {
                    document.getElementById(`docDivLowerC${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                } else if (data.word == "doubleTickBlack") {
                    document.getElementById(`docDivLowerC${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckGray.png";
                }

                document.getElementById(`docDivLowerC${data.idNumber}`).getElementsByTagName("img")[0].style.display = "none";
                document.getElementById(`docDivLowerC${data.idNumber}`).getElementsByTagName("img")[1].style.display = "block";
            }
        } else if (data.type == "mssgs") { // For the text mssgs
            if (data.word == "doubleTickBlueArr") {
                console.log(data.idNumber); // array comes here
                for (var nun = 0; nun < data.idNumber.length; nun++) {
                    document.getElementById(`mssgAndTimeSend${data.idNumber[nun]}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                    document.getElementById(`mssgAndTimeSend${data.idNumber[nun]}`).getElementsByTagName("img")[0].style.display = "none";
                    document.getElementById(`mssgAndTimeSend${data.idNumber[nun]}`).getElementsByTagName("img")[1].style.display = "block";
                }
            } else {
                if (data.word == "doubleTickBlue") {
                    document.getElementById(`mssgAndTimeSend${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                } else if (data.word == "doubleTickBlack") {
                    document.getElementById(`mssgAndTimeSend${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckGray.png";
                }

                document.getElementById(`mssgAndTimeSend${data.idNumber}`).getElementsByTagName("img")[0].style.display = "none";
                document.getElementById(`mssgAndTimeSend${data.idNumber}`).getElementsByTagName("img")[1].style.display = "block";
            }
        } else if (data.type == "images") { // For the text mssgs
            if (data.word == "doubleTickBlueArr") {
                console.log(data.idNumber); // array comes here
                for (var nun = 0; nun < data.idNumber.length; nun++) {
                    document.getElementById(`lowerDivForImg${data.idNumber[nun]}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                    document.getElementById(`lowerDivForImg${data.idNumber[nun]}`).getElementsByTagName("img")[0].style.display = "none";
                    document.getElementById(`lowerDivForImg${data.idNumber[nun]}`).getElementsByTagName("img")[1].style.display = "block";
                }
            } else {
                if (data.word == "doubleTickBlue") {
                    document.getElementById(`lowerDivForImg${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                } else if (data.word == "doubleTickBlack") {
                    document.getElementById(`lowerDivForImg${data.idNumber}`).getElementsByTagName("img")[1].src = "/images/doubleCheckWhite.png";
                }

                document.getElementById(`lowerDivForImg${data.idNumber}`).getElementsByTagName("img")[0].style.display = "none";
                document.getElementById(`lowerDivForImg${data.idNumber}`).getElementsByTagName("img")[1].style.display = "block";
            }
        } else if (data.type == "contacts") { // For the Contacts

            if (data.word == "doubleTickBlueArr") {
                console.log(data.idNumber); // array comes here
                for (var nun = data.startingId; nun < data.idNumber[0]; nun++) {
                    document.getElementById(`contPlateTAT${nun}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                    document.getElementById(`contPlateTAT${nun}`).getElementsByTagName("img")[0].style.display = "none";
                    document.getElementById(`contPlateTAT${nun}`).getElementsByTagName("img")[1].style.display = "block";
                }
            } else {
                if (data.word == "doubleTickBlue") {
                    for (var ak1 = data.startingId; ak1 < data.idNumber[0]; ak1++) {
                        document.getElementById(`contPlateTAT${ak1}`).getElementsByTagName("img")[1].src = "/images/doubleCheckBlue.png";
                        document.getElementById(`contPlateTAT${ak1}`).getElementsByTagName("img")[0].style.display = "none";
                        document.getElementById(`contPlateTAT${ak1}`).getElementsByTagName("img")[1].style.display = "block";
                    }
                } else if (data.word == "doubleTickBlack") {
                    for (var ak2 = data.startingId; ak2 < data.idNumber[0]; ak2++) {
                        document.getElementById(`contPlateTAT${ak2}`).getElementsByTagName("img")[1].src = "/images/doubleCheckGray.png";
                        document.getElementById(`contPlateTAT${ak2}`).getElementsByTagName("img")[0].style.display = "none";
                        document.getElementById(`contPlateTAT${ak2}`).getElementsByTagName("img")[1].style.display = "block";
                    }
                }


            }

        }
    }

})

socket.on("everyOne", (data) => { // when one change its DP everyone's data will be updated
    console.log("async working");
    console.log(everything);
    console.log(data.a1, data.a2);
    for (var i = 0; i < everything.length; i++) {
        if (data.a2 == everything[i].number) {
            console.log(data.a1);
            var t1 = b64toBlob(data.a1, "image/png");
            var url = URL.createObjectURL(t1);
            console.log(url);
            document.getElementById(`imgBox${i}`).getElementsByTagName("img")[0].src = url;
            break;
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

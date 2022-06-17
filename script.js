var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];



var m1 = parseInt(document.getElementById("money1").innerHTML);
var m2 = parseInt(document.getElementById("money2").innerHTML);
var m3 = parseInt(document.getElementById("money3").innerHTML);
var m4 = parseInt(document.getElementById("money4").innerHTML);
var m5 = parseInt(document.getElementById("money5").innerHTML);
var m6 = parseInt(document.getElementById("money6").innerHTML);
var m7 = parseInt(document.getElementById("money7").innerHTML);
var m8 = parseInt(document.getElementById("money8").innerHTML);
var m9 = parseInt(document.getElementById("money9").innerHTML);
var m10 = parseInt(document.getElementById("money10").innerHTML);




function am1() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m1 = m1 + x;
    document.getElementById("money1").innerHTML = m1;
    alert("Succefully ✅ added ✅ "+x+" rs to user1");
}

function sm1() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {
    m1 = m1 - x;
    document.getElementById("money1").innerHTML = m1;

    if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from user1");
        
    }

    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from user1");

    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from user1");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from user1");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from user1");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user1");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user1");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user1");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user1");
    }
}
}

//user2

function am2() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m2 = m2 + x;
    document.getElementById("money2").innerHTML = m2;
    alert("Succefully added ✅ "+x+" rs to user2");

}

function sm2() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {
        
    m2 = m2 - x;
    document.getElementById("money2").innerHTML = m2;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }

    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user2");
    }
}
}

//user 3

function am3() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m3 = m3 + x;
    document.getElementById("money3").innerHTML = m3;
    alert("Succefully added ✅ "+x+" rs to user3");

}

function sm3() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {

    
    m3 = m3 - x;
    document.getElementById("money3").innerHTML = m3;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }

    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user3");
    }
}
}

//user 4

function am4() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m4 = m4 + x;
    document.getElementById("money4").innerHTML = m4;
    alert("Succefully added ✅ "+x+" rs to user4");

}

function sm4() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {

    
    m4 = m4 - x;
    document.getElementById("money4").innerHTML = m4;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }

    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }


    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user4");
    }
}}



//user 5

function am5() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m5 = m5 + x;
    document.getElementById("money5").innerHTML = m5;
    alert("Succefully added ✅ "+x+" rs to user5");

}

function sm5() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))

    {

    m5 = m5 - x;
    document.getElementById("money5").innerHTML = m5;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }


    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user5");
    }
}
}



//user 6

function am6() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))

        m6 = m6 + x;
    document.getElementById("money6").innerHTML = m6;
    alert("Succefully added ✅ "+x+" rs to user6");

}

function sm6() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    {

    
    m6 = m6 - x;
    document.getElementById("money6").innerHTML = m6;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = 2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }

    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user6");
    }
}
}

//user 7

function am7() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m7 = m7 + x;
    document.getElementById("money7").innerHTML = m7;
    alert("Succefully added ✅ "+x+" rs to user7");

}

function sm7() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {

    
    m7 = m7 - x;
    document.getElementById("money7").innerHTML = m7;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }

    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user7");
    }
}
}


//user 8

function am8() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m8 = m8 + x;
    document.getElementById("money8").innerHTML = m8;
    alert("Succefully added ✅ "+x+" rs to user8");

}

function sm8() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {

        
    m8 = m8 - x;
    document.getElementById("money8").innerHTML = m8;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }

    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done ✅ \n"+ x+" rs sent to user "+send+" from  user 8");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }

    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }
    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 8");
    }
}
}


//user 9

function am9() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m9 = m9 + x;
    document.getElementById("money9").innerHTML = m9;
    alert("Succefully added ✅ "+x+" rs to user9");

}

function sm9() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
    {

    
    m9 = m9 - x;
    document.getElementById("money9").innerHTML = m9;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user  9");
    }
    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user  9");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }

    else if (send == 10 || send == "user10") {
        m10 = m10 + x;
        document.getElementById("money10").innerHTML = m10;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
}
}



//user10

function am10() {
    var x = parseInt(prompt("Enter amount"));
    if (!(isNaN(x)))
        m10 = m10 + x;
    document.getElementById("money10").innerHTML = m10;
    alert("Succefully added ✅ "+x+" rs to user10");

}

function sm10() {
    var send = prompt("Whom do you want to send money");
    var x = parseInt(prompt("Enter amount"));
    {

    
    m10 = m10 - x;
    document.getElementById("money10").innerHTML = m10;

    if (send == 1 || send == "user1") {
        m1 = m1 + x;
        document.getElementById("money1").innerHTML = m1;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 10");
    }
    else if (send == 2 || send == "user2") {
        m2 = m2 + x;
        document.getElementById("money2").innerHTML = m2;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }

    else if (send == 3 || send == "user3") {
        m3 = m3 + x;
        document.getElementById("money3").innerHTML = m3;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 4 || send == "user4") {
        m4 = m4 + x;
        document.getElementById("money4").innerHTML = m4;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }

    else if (send == 5 || send == "user5") {
        m5 = m5 + x;
        document.getElementById("money5").innerHTML = m5;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 6 || send == "user6") {
        m6 = m6 + x;
        document.getElementById("money6").innerHTML = m6;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 7 || send == "user7") {
        m7 = m7 + x;
        document.getElementById("money7").innerHTML = m7;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from  user 9");
    }
    else if (send == 8 || send == "user8") {
        m8 = m8 + x;
        document.getElementById("money8").innerHTML = m8;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from user 9");
    }
    else if (send == 9 || send == "user9") {
        m9 = m9 + x;
        document.getElementById("money9").innerHTML = m9;
        alert("Payment Done \n"+ x+" rs sent to user "+send+" from v 9");
    }

}
}


function deposit()
{
    var add=prompt("Whom do you want to add");
    if(add==1 || add=="user2")
    {
        am1();
    }
    else if( add==2 || add=="user2")
    {
        am2();
    }
    else if( add==3 || add=="user3")
    {
        am3();
    }
    else if( add==4 || add=="user4")
    {
        am4();
    }
    else if( add==5 || add=="user5")
    {
        am5();
    }
    else if( add==6 || add=="user6")
    {
        am6();
    }
    else if( add==7 || add=="user7")
    {
        am7();
    }
    else if( add==8 || add=="user8")
    {
        am8();
    }
    else if( add==9 || add=="user9")
    {
        am9();
    }
    else if( add==10 || add=="user10")
    {
        am10();
    }
}

function transfer()
{
    var from=prompt("From Whom do you want to send moeny");
    if(from==1 || from=="user1")
    {
        sm1();
    }
    else if(from==2 || from=="user2")
    {
        sm2();
    }
    else if(from==3 || from=="user3")
    {
        sm3();
    }
    else if(from==4 || from=="user4")
    {
        sm4();
    }
    else if(from==5 || from=="user5")
    {
        sm5();
    }
    else if(from==6 || from=="user6")
    {
        sm6();
    }
    else if(from==7 || from=="user7")
    {
        sm7();
    }
    else if(from==8 || from=="user8")
    {
        sm8();
    }
    else if(from==9 || from=="user9")
    {
        sm9();
    }
    else if(from==10 || from=="user10")
    {
        sm10();
    }
    
   
}

function balance() {
    var user = prompt("Enter user");

    if (user == 1 || user == "user1") {
        alert("balance of  💰 user1 is " + m1);
    }
   else if (user == 2 || user == "user2") {
        alert("balance of  💰 user2 is " + m2);
    }
    else if (user == 3 || user == "user3") {
        alert("balance of  💰 user3 is " + m3);
    }
    else if (user == 4 || user == "user4") {
        alert("balance of  💰 user4 is " + m4);
    }
    else if (user == 5 || user == "user5") {
        alert("balance of  💰 user5 is " + m5);
    }
    else if (user == 6 || user == "user6") {
        alert("balance of  💰 user6 is " + m6);
    }
    else if (user == 7 || user == "user7") {
        alert("balance of  💰 user7 is " + m7);
    }
    else if (user == 8 || user == "user8") {
        alert("balance of  💰 user8 is " + m8);
    }
    else if (user == 9 || user == "user9") {
        alert("balance of  💰 user9 is " + m2);
    }
    else if (user == 10 || user == "user10") {
        alert("balance of  💰 user10 is " + m10);
    }
}

function done()
{
    alert("Your message is succesfully sent!");
}


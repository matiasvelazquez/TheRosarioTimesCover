
function namevalidation(name,namev) {
    if (namev.length < 6) {
        document.getElementById("p1").style.display = "block";
        {name.style.color = "red"}; 
        //prompt("Please enter your name");
    }
    var notValid = /\s/;
    if(!notValid.test(namev.trim())) {
        document.getElementById("p2").style.display = "block";
        {name.style.color = "red"}; 
    }
}

function namefocus(name) {
    {name.style.color = "black"}; 
    document.getElementById("p1").style.display = "";
    document.getElementById("p2").style.display = "none";
}

function emailvalidation(email,emailv) {
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(emailv)) {
        document.getElementById("p3").style.display = "block";
        {email.style.color = "red"};
    } 
}

function emailfocus(email) {
    {email.style.color = "black"}; 
    document.getElementById("p3").style.display = "none";
}

function passwordvalidation(password,passwordv) {
    if (passwordv.length < 8) {
        document.getElementById("p4").style.display = "block";
        {password.style.color = "red"};
    }
}

function passwordfocus(password) {
    {password.style.color = "black"};
    document.getElementById("p4").style.display = "none";
}

function rptpasswordvalidation(rptpassword,rptpasswordv,passwordv) {
    if (rptpasswordv !== passwordv || rptpasswordv.value === "") {
        document.getElementById("p5").style.display = "block";
        {rptpassword.style.color = "red"};
    } 
}

function rptpasswordfocus(rptpassword) {
    {rptpassword.style.color = "black"};
    document.getElementById("p5").style.display = "none";
}

function agevalidation(age,agev) {
    if (agev < 18) {
        document.getElementById("p6").style.display = "block";
        {age.style.color = "red"};
    } 
}

function agefocus(age) {
    {age.style.color = "black"};
    document.getElementById("p6").style.display = "none";
}

function phonevalidation(phone,phonev) {
    var reg = /^[0-9]{7,10}$/;
    if (phonev.length < 7) {
        document.getElementById("p7").style.display = "block";
        {phone.style.color = "red"};
    } 
    if (!reg.test(phonev)) {
        document.getElementById("p8").style.display = "block";
        {phone.style.color = "red"};
    }
}

function phonefocus(phone) {
    {phone.style.color = "black"};
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
}

function addressvalidation(address,addressv) {
    if (addressv.length < 5) {
        document.getElementById("p9").style.display = "block";
        {address.style.color = "red"};
    }
    var notValid = /\s/;
    if(!notValid.test(addressv.trim())) {
        document.getElementById("p10").style.display = "block";
        {address.style.color = "red"};
    }
}

function addressfocus(address) {
    {address.style.color = "black"};
    document.getElementById("p9").style.display = "none";
    document.getElementById("p10").style.display = "none"; 
}

function cityvalidation(city,cityv) {
    if (cityv.length < 3) {
        document.getElementById("p11").style.display = "block";
        {city.style.color = "red"};
    } 
}

function cityfocus(city) {
    {city.style.color = "black"};
    document.getElementById("p11").style.display = "none";
}

function zipcodevalidation(zipcode,zipcodev) {
    if (zipcodev.length < 3) {
        document.getElementById("p12").style.display = "block";
        {zipcode.style.color = "red"};
    } 
}

function zipcodefocus(zipcode) {
    {zipcode.style.color = "black"}; 
    document.getElementById("p12").style.display = "none";
}

function idvalidation(id,idv) {
    if (idv.length < 7 || idv.length > 8) {
        document.getElementById("p13").style.display = "block";
        {id.style.color = "red"};
    } 
}

function idfocus(id) {
    {id.style.color = "black"}; 
    document.getElementById("p13").style.display = "none";
}

function buttonvalidation() {
    var name = document.getElementById("nameinput");
    var mail = document.getElementById('emailinput');
    var psw = document.getElementById('passwordinput');
    var rptpsw = document.getElementById('rptpasswordinput');
    var age = document.getElementById('ageinput');
    var phone = document.getElementById('phoneinput');
    var adr = document.getElementById('addressinput');
    var city = document.getElementById('cityinput');
    var zc = document.getElementById('zipcodeinput');
    var doc = document.getElementById('idinput');

    if (name.style.color == "red" || name.value == "") {
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "block";
        alert("The name should have at least 6 characters");
        alert ("You should leave a space between names");
    } else if (mail.style.color == "red" || mail.value == "") {
        alert("Insert a correct e-mail format");
        document.getElementById("p3").style.display = "block";
    } else if (psw.style.color == "red" || psw.value == "") {
        alert("The password should contain at least 8 characters");
        document.getElementById("p4").style.display = "block";
    } else if (rptpsw.style.color == "red" || rptpsw.value == "") {
        alert("The passwords doesn't match" );
        document.getElementById("p5").style.display = "block";
    } else if (age.style.color == "red" || age.value == "") {
        alert("You should be at least 18 in order to subscribe to our page");
        document.getElementById("p6").style.display = "block";
    } else if (phone.style.color == "red" || phone.value == "") {
        document.getElementById("p7").style.display = "block";
        document.getElementById("p8").style.display = "block";
        alert("The Phone number must have at least 7 numbers");
        alert("The number must only contain numbers");
    } else if (adr.style.color == "red" || adr.value == "") {
        document.getElementById("p9").style.display = "block";
        document.getElementById("p10").style.display = "block";
        alert("The address must contain at least 5 characters");
        alert ("You should leave a space in between");
    } else if (city.style.color == "red" || city.value == "") {
        document.getElementById("p11").style.display = "block";
        alert("The city's name must have at least 3 characters");
    } else if (zc.style.color == "red" || zc.value == "") {
        document.getElementById("p12").style.display = "block";
        alert("The zip code must have at least 3 characters");
    } else if (doc.style.color == "red" || doc.value == "") {
        document.getElementById("p13").style.display = "block";
        alert("The ID must contain between 7 and 8 digits");
    } else {
    alert("Full Name: " + name.value +  " ; Email: " + mail.value + " ; Age: " + age.value + " ; Phone: " + phone.value 
    + " ; Address: " + adr.value + " ; City: " + city.value + " ; Zip Code: " + zc.value + " ; ID: " + doc.value);
    }
}

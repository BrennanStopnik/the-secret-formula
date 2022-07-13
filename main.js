// THE ALERTER

let inputText1 = document.querySelector("#userInput-1");
let submit1 = document.querySelector("#submit-1");
let form1 = document.querySelector("#form-1")
form1.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(`${inputText1.value}`)
    alert(`${inputText1.value}`);
    inputText1.value = "";
});


// SANDWICH BUILDER

let whiteBread = document.querySelector("#white");
let wheatBread = document.querySelector("#wheat");
let sourdoughBread = document.querySelector("#sourdough");
let lettuceWrap = document.querySelector("#lettuce-warp");
let hamBox = document.querySelector("#ham");
let turkeyBox = document.querySelector("#turkey");
let salamiBox = document.querySelector("#salami");
let cheddarBox = document.querySelector("#cheddar");
let swissBox = document.querySelector("#swiss");
let pepperJackBox = document.querySelector("#pepper-jack");
let provoloneBox = document.querySelector("#provolone");
let lettuceBox = document.querySelector("#lettuce");
let tomatoBox = document.querySelector("#tomato");
let onionBox = document.querySelector("#onion");
let pickleBox = document.querySelector("#pickle");
let hotPeppersBox = document.querySelector("#hot-peppers");
let saltBox = document.querySelector("#salt");
let pepperBox = document.querySelector("#pepper");
let oilBox = document.querySelector("#oil");
let vinegarBox = document.querySelector("#vinegar");

let submit2 = document.querySelector("#submit-2");
let form2 = document.querySelector("#form-2");

form2.addEventListener('submit', function(event){
    event.preventDefault();
    let theOrder = "";
    if (whiteBread.checked === true){
        theOrder += "White bread, ";
    } else if (wheatBread.checked === true){
        theOrder += "Wheat bread, ";
    } else if (sourdoughBread.checked === true){
        theOrder += "Sourdough bread, ";
    } else if (lettuceWrap.checked === true){
        theOrder += "Lettuce wrap, ";
    }
    if (hamBox.checked === true){
        theOrder += "Ham, ";
    }
    if (turkeyBox.checked === true){
        theOrder += "Turkey, ";
    }
    if (salamiBox.checked === true){
        theOrder += "Salami, ";
    }
    if (cheddarBox.checked === true){
        theOrder += "Cheddar cheese, ";
    }
    if (swissBox.checked === true){
        theOrder += "Swiss cheese, ";
    }
    if (pepperJackBox.checked === true){
        theOrder += "Pepper Jack cheese, ";
    }
    if (provoloneBox.checked === true){
        theOrder += "Provolone cheese, ";
    }
    if (lettuceBox.checked === true){
        theOrder += "Lettuce, ";
    }
    if (tomatoBox.checked === true){
        theOrder += "Tomato, ";
    }
    if (onionBox.checked === true){
        theOrder += "Onion, ";
    }
    if (pickleBox.checked === true){
        theOrder += "Pickle, ";
    }
    if (hotPeppersBox.checked === true){
        theOrder += "Hot peppers, ";
    }
    if (oilBox.checked === true){
        theOrder += "Oil, ";
    }
    if (vinegarBox.checked === true){
        theOrder += "Vinegar, ";
    }
    if (saltBox.checked === true){
        theOrder += "Salt, ";
    }
    if (pepperBox.checked === true){
        theOrder += "Pepper, ";
    }
    
    alert(`Your order is: ${theOrder}`);

    hamBox.checked = false;
    turkeyBox.checked = false;
    salamiBox.checked = false;
    cheddarBox.checked = false;
    swissBox.checked = false;
    pepperJackBox.checked = false;
    provoloneBox.checked = false;
    lettuceBox.checked = false;
    tomatoBox.checked = false;
    onionBox.checked = false;
    pickleBox.checked = false;
    hotPeppersBox.checked = false;
    oilBox.checked = false;
    vinegarBox.checked = false;
    saltBox.checked = false;
    pepperBox.checked = false;

});


// HAIRCUT APPOINTMENT SCHEDULER

let dateHC = document.querySelector("#calendar");
let stylist = document.querySelector("#userInput-hc");
let lengthLong = document.querySelector("#long");
let lengthShort = document.querySelector("#short");

let submit3 = document.querySelector("#submit-3");
let form3 = document.querySelector("#form-3")

form3.addEventListener('submit', function(event){
    event.preventDefault();
    let length = "";
    if (lengthLong.checked === true){
        length += "Long";
    } else if (lengthShort.checked){
        length += "Short";
    } else {
        alert(`Please select a length.`)
    }
    alert(`Haircut scheduled for ${dateHC.value} with ${stylist.value} for ${length} hair.`)
    stylist.value = "";
    dateHC.value = "";
    lengthLong.checked = false;
    lengthShort.checked = false;
});


// CREATE ACCOUNT

let form4 = document.querySelector("#form-4")
let userName4 = document.querySelector("#username-4");
let email4 = document.querySelector("#email-4");
let pw4 = document.querySelector("#pw-4");
let conpw4 = document.querySelector("#con-pw-4");

form4.addEventListener('submit', function(event){
    event.preventDefault();
    let userN = userName4.value;
    let passw = pw4.value;
    if (userN.length < 3){
        alert(`Username needs to be at least 3 characters.`)
    }
    if (passw.length < 4){
        alert(`Password needs to be at least 4 characters.`)
    }
    if (pw4.value !== conpw4.value){
        alert(`Passwords do not match. Try again.`)
    }
    alert(`Your username is: ${userName4.value}.
Your email is: ${email4.value}`);
    userName4.value = "";
    email4.value = "";
    pw4.value = "";
    conpw4.value = "";
})

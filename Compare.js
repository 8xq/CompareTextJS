//=============================================================================\\
//                              Text compare JS <3                              \\
//                              made by nullcheats                               \\
//================================================================================\\

/*  
This is the function that will be invoked upon clicking the button
This will simply grab the values from the text area & count them
As you can see here 2 other functions are called "Check count" & "Check match"
*/
const Compare = () => {
    var Compare1 = document.getElementById("compare1").value;
    var Compare2 = document.getElementById("compare2").value;
    var compare1_count = Compare1.length;
    var compare2_count = Compare2.length;

    check_count(compare1_count, compare2_count);
    check_match(Compare1, Compare2);
}

/*  
This is a simple function that checks if both text areas are the same length
This method has 2 params passed from "Compare" this is the total length values
*/
let check_match = (Compare1, Compare2) => {
    if (Compare1 == Compare2) {
        document.getElementById("Banner_text").innerHTML = "Both text fields are identical";
        document.getElementById("Banner_text").style.color = "green";
    } else {
        document.getElementById("Banner_text").innerHTML = "Different text detected !";
        document.getElementById("Banner_text").style.color = "red";
    }
}

/*  
This is a simple function that checks if the text matches from the text areas
This method has 2 params passed from "Compare" this is the text value of both text areas
*/
let check_count = (c1, c2) => {
    if (c1 != c2) {
        document.getElementById("Banner_text_2").innerHTML = "Amount of chars do not match";
        document.getElementById("Banner_text_2").style.color = "red";
    } else if (c1 == c2) {
        document.getElementById("Banner_text_2").innerHTML = "Amount of chars match";
        document.getElementById("Banner_text_2").style.color = "green";
    } else {
        document.getElementById("Banner_text_2").innerHTML = "unsure if char count matches";
        document.getElementById("Banner_text_2").style.color = "orange";
    }
}
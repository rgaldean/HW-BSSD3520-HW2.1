'use strict';
document.addEventListener("DOMContentLoaded", () => {
    //look up an element in the documnet hierarchy by id
    const greeting = document.getElementById("greeting");
    const fname = getInput ('Please enter your first name');
    const lname = getInput ('Please eneter your last name');
    //extract only the first character from both strings and combine
    const initials = '$ {fName [0]}.${lName[0]}.';
    greeting.textContent = initals;
});
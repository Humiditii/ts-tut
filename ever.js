"use strict";
// type unknown
let userInput;
userInput = 30;
userInput = 'Hameed';
// never type
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError('musa is sleeping', 909);

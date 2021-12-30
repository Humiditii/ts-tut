// type unknown

let userInput: unknown;

userInput = 30
userInput = 'Hameed'

// never type
function generateError(message: string, code: number): never {
    throw {message, errorCode:code}
}

generateError('musa is sleeping', 909)
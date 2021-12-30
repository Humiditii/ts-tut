// union type
// literal type
// using type alias for combining types
function combine(a, b, result) {
    var sol = result === 'asText' ? a.toString() + b.toString() : +a + +b;
    return sol;
}
console.log(combine('21', 22, 'asNum'), 'should be 43:number');
console.log(combine('21', 22, 'asText'), 'should be 2122:string');
console.log(combine('21', '22', 'asNum'), 'should be 43:number');
console.log(combine('21', '22', 'asText'), 'should be 2122:string');
console.log(combine(21, 22, 'asText'), 'should be 2122:string');

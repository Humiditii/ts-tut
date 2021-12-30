// specifying return type

function add(a:number , b: number): number {
    return a + b
}

// void type
// undefined type

function printR( param: number ): void {
    console.log(param)
}

printR(add(2,45))


// function types

let summation: Function ; // will allow any function to be assigned to the variable

let comine: (a:number, b:number) => number ; // Distinctive function type

summation = add

comine = add

// summation =100 // will throw an error

printR( summation(20,44) )

function compute( a: number, b: number, cb:(result :number) => void  ) {
    const result = a + b
    cb(result)
}

 compute(210,330, (result)=> {
    console.log(result)
}) 


let num1:number = 1;

function letDeclaration() {
    let num2:number = 2;

    if (num2 > num1) {
        let num3: number = 3;
        num3++;
    }

    while(num1 < num2) {
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //ok
    console.log(num2); //ok
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
    
}

letDeclaration();
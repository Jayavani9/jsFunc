const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true)
    {
        const am = prompt("Enter a deposit amount: ");
        const numAmnt = parseFloat(am);

        if(numAmnt <= 0 || isNaN(numAmnt)){
            console.log("The amount is not valid, Pls try again!!");
        }
        else
        {
            return numAmnt;

        }
    }
};


const getnofLines = () =>{
    while(true)
    {
    const ln = prompt("Enter the num of lines u wanna bet on(1-3): ");
    const numLn = parseInt(ln);

    if(numLn <= 0 || numLn > 3 || isNaN(numLn)){
        console.log("Please enter a valid number");
    }
    else{
        return numLn;
    }
}

};




let  balance = deposit();
//console.log(depamnt);

const nofLin = getnofLines();
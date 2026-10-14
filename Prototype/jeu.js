
const rl=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})

let randomnum=Math.floor(Math.random()*100)+1.
let att=0;
function geuss(){
    rl.question("Guess a number: " , input=>{
        let number=Number(input);
        att++;

    if (number<randomnum)console.log("Higher"),geuss();
    else if (number>randomnum)console.log("Lower"),geuss();
     else{ console.log("You won!  Attempts: "+att);rl.close}
    })
}
geuss()

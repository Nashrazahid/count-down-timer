#! /usr/bin/env node 

import inquirer from "inquirer"
import chalk from "chalk"
import { differenceInSeconds } from "date-fns";

console.log(chalk.blue("=".repeat(90)))
let text = "COUNTDOWN-TIMER"
console.log(chalk.italic.yellow(text.padStart(52)))
console.log(chalk.blue("=".repeat(90)))

let answer = await inquirer.prompt({
    name:"input",
    type:"number",
    message:chalk.green("enter the amount of second"),
    validate: (value) => {
        if (isNaN(value)) {
          return chalk.red("please enter valid number");
        }else if(value > 60){
            return chalk.red("number must be under 60")
        }
        else{
        return true;
      }
    }
})
let amount = answer.input

function starTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val )
    const timeinterval=new Date(intTime)

    setInterval((()=>{
        const time = new Date()
        const diff = differenceInSeconds(timeinterval,time)
        if (diff <= 0){
          console.log("time has expired");
          process.exit()
        }

        const min = Math.floor((diff % (3600 * 24)) / 3600)
        const sec = Math.floor(diff%60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }),1000)
    

    }


starTime(amount)




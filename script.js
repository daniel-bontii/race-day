let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 25;
if(registeredEarly && age > 18){
  raceNumber += 1000;
}
if(registeredEarly && age > 18){
  console.log(`You will start to race at 9:30 am. Your race number is ${raceNumber}`);
}else if (!registeredEarly && age > 18) {
    console.log(`You will start to race at 11:00 am. Your race number is ${raceNumber}`);
}

if (age <= 18) {
  console.log(`You will start to race at 12:30 am. Your race number is ${raceNumber}`);
}

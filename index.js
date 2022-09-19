// Code your solutions in this file
 
function writeCards(array, event){
    const newArray=[]
    for(let i=0;i<array.length;i++){
        const mess = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        newArray.push(mess); 
    }
    return newArray;
} 
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

let countDown = (number)=>{ 
    while(number >=0){
        console.log(number);
        number--;
    }    
}

countDown(10);
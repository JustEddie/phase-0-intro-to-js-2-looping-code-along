function countDown(int) {
    for(let i=int; i>=0; i--){
        console.log(i);
    }
}

function writeCards(arr,message) {
    let arra = [];
    for(let i=0; i<arr.length; i++){
        arra.push("Thank you, " + arr[i] + ", for the wonderful "+message+" gift!")
    }
    return arra;
}


writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
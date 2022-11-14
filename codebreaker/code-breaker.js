function keyGen(){
    const key = new Array(4);
    for(let i = 0; i < 4; i++){
        key[i] = randomInt(1 , 4);
    }
    console.log(key)
    return key;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

function compareArrays(inputArray, mainKey){
    const tempArray = [...mainKey];
    let hint = ['red','red','red','red'];
    for(i = 0; i < 4; i++){
        if(inputArray[i] == tempArray[i]){
            hint[i] = 'green';
            tempArray[i] = 0;
            continue;
        }
    }
    for(i = 0; i < 4; i++){
        if(hint[i] == 'green'){
            continue
        }
        else if(checkCode(inputArray[i],tempArray)){
            hint[i] = 'yellow';
        }
    }
    return hint;
}

function checkCode(value, key){
    for(j = 0; j < 4; j++){
        if(value == key[j]){
            key[j] = 0;
            return true;
        }
    }
    return false;
}

const newKey = keyGen();

function input(){
    let in1 = document.getElementById('in1').value;
    let in2 = document.getElementById('in2').value;
    let in3 = document.getElementById('in3').value;
    let in4 = document.getElementById('in4').value;
    let inputArray = [in1,in2,in3,in4];
    return inputArray;
}

function output(){
    const userInput = input();
    const hint = compareArrays(userInput, newKey);
    console.log(userInput, hint);
    document.getElementById('in1').style = 'background-color: ' + hint[0]
    document.getElementById('in2').style = 'background-color: ' + hint[1]
    document.getElementById('in3').style = 'background-color: ' + hint[2]
    document.getElementById('in4').style = 'background-color: ' + hint[3]
}


function decreaseCount(){
    let currentCounter = document.getElementById("currentCounter").innerText
    currentCounter =  parseInt(currentCounter) - 1
    document.getElementById("currentCounter").innerHTML = currentCounter
    document.getElementById("currentCounter").style.color = "#eb1313"
}

function increaseCount(){
    let currentCounter = document.getElementById("currentCounter").innerText
    currentCounter =  parseInt(currentCounter) + 1
    document.getElementById("currentCounter").innerHTML = currentCounter
    document.getElementById("currentCounter").style.color = "#37eb13"
}

function resetCount(){
    let currentCounter = document.getElementById("currentCounter").innerText
    currentCounter =  0
    document.getElementById("currentCounter").innerHTML = currentCounter
    document.getElementById("currentCounter").style.color = "#0c0d0c"
}
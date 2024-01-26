let elBoxes = document.querySelectorAll('.box')

let count = 0
setInterval(()=>{
count = count + 1

if(count == 10){
    count = 1
}
if(count <= 4 ){
    fnRed()
}
if(count ==4 ||count == 9 ){
    fnYellow()
}

if(count >= 5 && count <=8){
    fnGreen()
}
if(count <= 5){
    fnQizil()
}

if(count >= 5 && count <= 10){
    fnYashil()
}
console.log(count);
}, 1000)

function fnRed(){
    elBoxes[0].classList.add('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.remove('yashil')
}
function fnYellow(){
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.add('sariq')
    elBoxes[2].classList.remove('yashil')
}
function fnGreen(){
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.add('yashil')
}

let elBoxess = document.querySelectorAll('.box2')

 function fnQizil(){
    elBoxess[0].classList.remove('qizil2')
    elBoxess[1].classList.add('yashil2')
 }
 function fnYashil(){
    elBoxess[0].classList.add('qizil2')
    elBoxess[1].classList.remove('yashil2')
 }
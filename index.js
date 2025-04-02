const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols= ["@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/","~","`","!"];







let passOne=document.getElementById("pass-one")
let passTwo=document.getElementById("pass-two")
let errorBox=document.getElementById("errorbox")



function generatePassword(){
    
var uc = document.getElementById("uppercase").checked;
var lc = document.getElementById("lowercase").checked;
var nm = document.getElementById("numbers").checked;
var sy = document.getElementById("symbols").checked; 
var du = document.getElementById("no-duplicates").checked; 

var num = document.getElementById("number").value;
passOne.textContent=getAns(num,uc,lc,nm,sy,du)
if (passOne.textContent!=""){
    passTwo.textContent=getAns(num,uc,lc,nm,sy,du)
    errorBox.textContent=""
    }

}

function getAns(num,uc,lc,nm,sy,du){
    if (uc===true && lc===true && nm===true && sy===true){
        errorBox.textContent="Number cant be generated --> Try vaild combination"
        passTwo.textContent=""
        passOne.textContent=""
        return ""
    }
    duplicateCatch=[]
    let ans=""
    let totalLength=characters.length
    if(du==true){
        if (uc==true){totalLength-=uppercase.length}
        if (lc==true){totalLength-=lowercase.length}
        if (nm==true){totalLength-=numbers.length}
        if (sy==true){totalLength-=symbols.length}        
     }
    // if (num<=totalLength){continue}
    if (num>totalLength){
        errorBox.textContent="Number cant be generated --> Try vaild combination"
        passTwo.textContent=""
        passOne.textContent=""
        return ""
        }
    
    for (i=0;ans.length<num;i++){
        let index=Math.floor(Math.random()*characters.length)
        
        if (uc===true){
            if (uppercase.includes(characters[index])){continue}
        }
        
        if (lc===true){
            if (lowercase.includes(characters[index])){continue}
        }
        
        if (nm===true){
            if (numbers.includes(characters[index])){continue}
        }
        
        if (sy===true){
            if (symbols.includes(characters[index])){continue}
        }
        

        if (du===true){
            if(!duplicateCatch.includes(characters[index])){
                duplicateCatch.push(characters[index])
                ans=ans+characters[index]
                continue
                }
            else{continue}
        }
        
        
        
        
        ans=ans+characters[index]
    }
    return ans
}


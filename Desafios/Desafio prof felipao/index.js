let chars =[['POOCHVENA',1000],['ZIGZAGOON',10001],['DRAGONITE',6900],['WURHPLE',1900]]

let quanti = chars.length

for(var i = 0; i < quanti; i++){
    if(chars[i][1] <= 1000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Ferro, pois tem " + chars[i][1] + " XP");}
    else if(chars[i][1] <= 2000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Bronze, pois tem " + chars[i][1] + " XP");
    } 
    else if(chars[i][1] <= 5000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Prata, pois tem " + chars[i][1] + " XP");
    }  
    else if(chars[i][1] <= 7000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Ouro, pois tem " + chars[i][1] + " XP");
    }    
    else if(chars[i][1] <= 8000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Platina, pois tem " + chars[i][1] + " XP");
    } 
    else if(chars[i][1] <= 9000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Ascendte, pois tem " + chars[i][1] + " XP");
    }   
    else if(chars[i][1] <= 10000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Imortal, pois tem " + chars[i][1] + " XP");
    } 
    else if(chars[i][1] > 10000){
        console.log("O Personagem " + chars[i][0] + " Esta no nivel Radiante, pois tem " + chars[i][1] + " XP");
    } 
}
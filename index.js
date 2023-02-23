let text_place=document.getElementById("text_place")
let sentance=["youtuber","freelancer","teacher","student"]
let sentanseindex=0
let chracterindex=0;


function udatetext(){
    chracterindex++
    text_place.innerHTML=`<h1>i am 
    ${sentance[sentanseindex].slice(0,chracterindex)}</h1>`;
   
   

    setTimeout(udatetext, 300);

    if(chracterindex==sentance[sentanseindex].length){
        sentanseindex++
        chracterindex=0

    }
    if(sentanseindex==sentance.length){
        sentanseindex=0
    }
}
udatetext()
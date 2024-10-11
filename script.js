let boxes=document.getElementsByClassName('boxes');
let result=document.querySelector('#result');
let reset=document.querySelector('#reset');
reset.addEventListener('click',()=>{
    clearboxes();
})
let turn="O";
function changeturn(turn){
    if(turn==="X"){
 return turn="O";
    }else{
        return turn="X";
    }
}
function checkwin(){


 let wins=[
    [0,1,2],
    [2,5,8],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [1,4,7],
 ]
 wins.forEach(e=>{
    const [a, b, c] = e;
    if (
        boxes[a].innerHTML === boxes[b].innerHTML &&
        boxes[b].innerHTML === boxes[c].innerHTML &&
        boxes[a].innerHTML !== ""
    ) {
        result.innerHTML=`${ boxes[a].innerHTML} WON`
        setTimeout(()=>{
            clearboxes();
        },600)
    }
     
})

}
function checkAllFilled() {
    return Array.from(boxes).every(box => box.innerHTML !== '');
}
Array.from(boxes).forEach(element => {
    element.addEventListener('click',()=>{
    if(element.innerHTML==''){
        turn=changeturn(turn);
        element.innerHTML=turn;
        checkwin(); 
        
        if (checkAllFilled()) {
            result.innerHTML = "It's a draw!";
            setTimeout(() => {
                clearboxes();
            }, 600)};
        }
        })
    
});




clearboxes=()=>{
    Array.from(boxes).forEach(element => {
        element.innerHTML="";
    })
    setTimeout(() => {
        result.innerHTML=" ";
    }, 2000);
}
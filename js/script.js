let $=document
const titleElem=$.querySelector('.title')


function keyHandler(event){
        writeToTitle(event)
        console.log(event);
        let userKey=event.key.toUpperCase()
        let letterID=$.getElementById(userKey)
        letterID.classList.add('hit')
        letterID.addEventListener('animationend',function(){
                letterID.classList.remove('hit')
        })
        
}

function writeToTitle(event){

        if(event.key==='Backspace'){
                titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
                return
        }else if(event.code==='Space'){
                titleElem.innerHTML=titleElem.innerHTML+' '
        }
        titleElem.innerHTML+=event.key
        
}




$.addEventListener('keyup',keyHandler)
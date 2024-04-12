
const btn=document.querySelector('.btn')
const new_king_div=document.querySelector('.container')


    function clickMe(){
        const new_king=document.createElement('p')
        const new_king_text=document.createTextNode('Hello there!!')
        new_king_div.append(new_king)
        new_king.append(new_king_text)
    }

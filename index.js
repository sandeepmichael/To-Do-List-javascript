const inputbox = document.getElementById('input')
//console.log(inputbox)
const listcontainer = document.getElementById('list-container')
const button =  document.getElementById('button')
 

button.addEventListener("click", () => {
    if(inputbox.value===" "){
        alert('please provide text')
    } else {
            let li = document.createElement('li');
            li.innerHTML = inputbox.value;
            listcontainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span)
            
    }
    inputbox.value = "";
})

 listcontainer.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
           e.target.classList.toggle("checked")
        
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
 })


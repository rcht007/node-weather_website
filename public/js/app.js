// console.log('Client side javascript file is loaded!')

 //require('es6-promise').polyfill();
 //require('isomorphic-fetch');
    


    
 const weatherForm=document.querySelector('form')
 const search=document.querySelector('input')
 const messageOne=document.querySelector('#message-1')
 const messageTwo=document.querySelector('#message-2')
 
 
  //messageOne.textContent='from js'
 
 
 
 weatherForm.addEventListener('submit',(e)=>{
     //prevents default clearout of console
     e.preventDefault()
     const location=search.value
     
     const url='http://localhost:3000/weather?address='+encodeURIComponent(location)
        
     fetch(url).then((response) => {
        
        
             response.json().then((data) => { 
                messageTwo.textContent='loading result....' 
                messageTwo.textContent='' 
                 if (data.error) {
                     const type=JSON.stringify(data.error)
                    
                     messageTwo.textContent=type;
                 } else {
                     messageOne.textContent=data.location;
                     const weather=JSON.stringify(data.forecast)
                     messageTwo.textContent= weather;
       
                 }
             })
         })
 
 })

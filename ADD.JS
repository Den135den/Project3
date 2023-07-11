
const dom = document.querySelector('.header')

let kBt = document.querySelector('#batton')








window.addEventListener('scroll', function(){
    dom.classList.add('red')
   
    let scrollPos = window.scrollY; 
    console.log(scrollPos)
    
    if(scrollPos>0){
        dom.classList.add('red')
    }
    else{
        dom.classList.remove('red')
    }
})

ы

   


const toggleBtn = document.querySelector('button')

toggleBtn.addEventListener('click',()=>{
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark')
  }else{
    document.documentElement.classList.add('dark')
  }

})

function searchForm(){
  const input = document.querySelectorAll('input');

    input.forEach((item)=>{
       item.addEventListener('focus', function(){
          
        this.classList.add('focus')
          
       })
    })

    input.forEach((item)=>{
       item.addEventListener('blur', function(){
          if (item.value === '') {
             item.classList.remove('focus')
          }
       })
    })
}

export default searchForm;

function getApi(){
    const btnSearch = document.querySelector('.btn')
    let resultBook ; 
    const spiner = document.querySelector('.spiner');
    
        function handleClick(event){
             event.preventDefault();
             const bookSearch = document.querySelector('.search').value;
             getBooks(bookSearch)
        };
    
        async function getBooks(value){
            try{
                   spiner.classList.add('active');
                   const getResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
                   const getResult = await getResponse.json();
                   
                 if(resultBook){
                   resultBook.forEach((item, key)=>{
                       item.remove()  
                 });
                 result()
    
                 }else if(resultBook=== undefined){
                   result()
                 };
    
               function result(){
                     resultBook =  getResult.items.map((item, key)=>{

                       const contentResult = document.querySelector('#result');
                       const cardBook = document.createElement('div');
                       contentResult.appendChild(cardBook);
                       cardBook.classList.add('card-book')
                       const image = document.createElement('img');
                       cardBook.appendChild(image)
                       image.setAttribute('src', `${item.volumeInfo.imageLinks.smallThumbnail}`)
                       const description = document.createElement('div');
                       cardBook.appendChild(description)
                       description.classList.add('descripition')
                       const titleH2 = document.createElement('h2');
                       titleH2.innerText = item.volumeInfo.title
                       const author = document.createElement('span');
                       description.appendChild(titleH2);
                       description.appendChild(author)
                       author.classList.add('author')
                       author.innerText = item.volumeInfo.authors
                       const prince = document.createElement('span');
                       cardBook.appendChild(prince);
                       const btn = document.createElement('a');
                       cardBook.appendChild(btn)
                       btn.setAttribute('href', `${item.saleInfo.buyLink}`);
                       btn.setAttribute('target', 'blank');
                       btn.classList.add('btn-buy')
                       btn.innerText = 'Buy Now';
                       return cardBook;
                     
                     })
               };
               document.querySelector('.info').innerHTML = `Found:<b> ${document.querySelectorAll('.card-book').length} books </b>containing the word <b> ${value}</b>`
               spiner.classList.remove('active');  
            } catch {
               spiner.classList.remove('active');
               if(value === ''){
                 document.querySelector('.info').innerHTML = `Por favor preencha o campo de <b>pesquisa!</b>`
               } 
             }
        };
        
        btnSearch.addEventListener('click',  handleClick);
    
        window.addEventListener('load', ()=>{
         getBooks("livros")
       });
}

export default getApi
    

  




   

    



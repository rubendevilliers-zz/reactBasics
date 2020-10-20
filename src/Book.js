import React from 'react'

//Component
//Desctructure Object passed from BookList component
const Book = ({img, alt, title, author}) => {
    // atrtribute, eventHandler
    // onClick, onMouseOver
  

    const complexButton = (e, title) =>{
      console.log(e)
      console.log(title)
    }
    return (
      
    <article className="book" onMouseOver={(e) => {
      complexButton(e, title)
    }}>
      <img src={img} alt={alt}/>
      <h1>{title}</h1>
      <h3>{author}</h3>
     
       {/*Add arrow function otherwise it will only be envoced*/}
      <button type="button" name="test" id="test" onClick={() => complexButton()}>other me</button>
    </article>)
    ;
  }


 //Has to match the name of the Component 
export default Book
  
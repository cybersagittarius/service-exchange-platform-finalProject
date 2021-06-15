import React, { useContext } from 'react';
// import usersGuest from '../assets/data/usersData';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import SearchContext from '../context/SearchContext';


const Search = () => {  

const{ lookSelection, country, region, searchResults, setSearchResults, userInfo, itemSkills } = useContext(SearchContext);

const data = { country, region, lookSelection, userInfo, searchResults, itemSkills }
console.log(data)  
    
  return (
  
  <section className="users section">
          <div  className="show-category">
        <h4>You are looking for/<span>{lookSelection.length >0 && lookSelection.map((select => <ol>{select.value}</ol>)
        )}</span></h4>
  
       <h4>Country/<span>{country}</span> </h4> 
        <h4>Region/<span>{region}</span> </h4>
</div> 
    <div className="section-center">
    {/* {users.map((user,userIndex)=>{
        const {id,name,image,skills,desc} = user
        let position = "nextSlide";
        if(userIndex === index){
          position = "activeSlide";
        }
        if (userIndex === index -1 || (index === 0 && userIndex === users.length -1)){
          position = "lastIndex";
        }
        return(
         
<article key={id} className={position}>
<img src={image} alt={name} className="user-img"/>
<h4>{name}</h4>
<h6 className="skills"><span>{skills}</span></h6>
<p className="text">{desc}</p>
</article>

        )
    })}
    <button className="prev">
          <FiChevronLeft onClick={prevSlide}/>
        </button>
        <button className="next">
          <FiChevronRight onClick={nextSlide}/>
        </button> */}
    </div>
   
    </section>     
    
  );
};

export default Search


// import React, {useState, useContext} from 'react';
// import {Link} from 'react-router-dom';
// import usersGuest from '../assets/data/usersData';
// import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
// import SearchContext  from '../context/SearchContext';

// const Search = () => {
//   const [users, setUsers] = useState(usersGuest);
//   const [index, setIndex] = useState(0);

// const{ lookSelection,country,region } = useContext(SearchContext);

//   const prevSlide = () => {
// setIndex((oldIndex) => {
//   let index = oldIndex -1
//   if (index < 0) {
//     index = users.length -1
//   }
//   return index;
// });
//   };
//   const nextSlide = () => {
//     setIndex((oldIndex) => {
//       let index = oldIndex +1
//       if (index > users.length -1) {
//         index = 0
//       }
//       return index;
//     });
//       };
     

//   return (
    
//   <section className="users section">
//           <div  className="show-category">
//         <h4>You are looking for/<span>{lookSelection.length >0 && lookSelection.map((select)=>{
//           const {id,value} = select;
//           return <ol>{select.value}</ol>
//         })}</span></h4>
  
//        <h4>Country/<span>{country}</span> </h4> 
//         <h4>Region/<span>{region}</span> </h4>
// </div> 
//     <div className="section-center">
//     {users.map((user,userIndex)=>{
//         const {id,name,image,skills,desc} = user
//         let position = "nextSlide";
//         if(userIndex === index){
//           position = "activeSlide";
//         }
//         if (userIndex === index -1 || (index === 0 && userIndex === users.length -1)){
//           position = "lastIndex";
//         }
//         return(
         
// <article key={id} className={position}>
// <img src={image} alt={name} className="user-img"/>
// <h4>{name}</h4>
// <h6 className="skills"><span>{skills}</span></h6>
// <p className="text">{desc}</p>
// </article>

//         )
//     })}
//     <button className="prev">
//           <FiChevronLeft onClick={prevSlide}/>
//         </button>
//         <button className="next">
//           <FiChevronRight onClick={nextSlide}/>
//         </button>
//     </div>
   
//     </section>
     
    
//   );
// };

// export default Search

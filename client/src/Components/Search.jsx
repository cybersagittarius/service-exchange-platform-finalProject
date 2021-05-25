import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import usersGuest from '../assets/data/usersData';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import SearchContext  from '../context/SearchContext';


const Search = () => {
  const [users, setUsers] = useState(usersGuest);
  const [index, setIndex] = useState(0);

const{ lookSelection,country,region } = useContext(SearchContext);

  const prevSlide = () => {
setIndex((oldIndex) => {
  let index = oldIndex -1
  if (index < 0) {
    index = users.length -1
  }
  return index;
});
  };
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex +1
      if (index > users.length -1) {
        index = 0
      }
      return index;
    });
      };
      console.log(lookSelection)
      console.log(country)
      console.log(region)

  return (
    
  <section className="users section">
  <div className="show-category">
        <h4><span>You are looking for/</span>  {lookSelection[0].value}</h4>
        <h4><span>Country/</span> {country}</h4> 
        <h4><span>Region/</span> {region}</h4>
    <Link to="/register">
      <button className="btn btn-outline-danger btn-block">Join</button>
    </Link>
</div>
    <div className="underline"></div>

    <div className="section-center">
    {users.map((user,userIndex)=>{
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
{/* 
<Link to="/notfound">
    <button className="btn btn-outline-danger btn-block">More Info</button>
</Link> */}
</article>

        )
    })}
    <button className="prev">
          <FiChevronLeft onClick={prevSlide}/>
        </button>
        <button className="next">
          <FiChevronRight onClick={nextSlide}/>
        </button>
    </div>
    </section>
     
   
  );
};

export default Search

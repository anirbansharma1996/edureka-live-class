import React from "react";




const About = () => {
  const text =
    "Lorem, ipsum dolor sit amet sandae voluptatum officiis rerum dolor. Placeat vitae odio enim id, illo officiis fuga natus, vero exercitationem veritatis, sit nobis cum. Quis, magni. Sequi pariatur saepe placeat vitae sunt maiores. Eaque nihil, a inventore soluta cupiditate ex sunt amet ipsum cumque. Nobis aperiam architecto dignissimos ipsum nisi nesciunt.";

  const data = [
    {
      name: "shreya modak",
      address: "raikat para",
      course: "fswd",
      age: 21,
    },
    {
      name: "soham bose",
      address: "ananda para",
      course: "BBA IT",
      age: 25,
    },
  ];


   const handleClick =(name)=>{
    alert("clicked by "+name)
   }


  return (
    <div>
      <p>{text}</p>
      <div className="students">
        {data.map((el) => (
          <div key={el.name}>
            <h3>{el.name[0].toUpperCase()+el.name.slice(1)}</h3>
            <p>{el.address}</p>
            <p>COURSE : {el.course.toUpperCase()}</p>
            <p>AGE : {el.age}</p>
            <p>BIRTH YEAR : {new Date().getFullYear() - el.age}</p>
            <p>LEVEL : {el.age >24 ? "Senior":"Junior"}</p>
            <button onClick={()=>handleClick(el.name)} className="btn btn-danger">Click Me !</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

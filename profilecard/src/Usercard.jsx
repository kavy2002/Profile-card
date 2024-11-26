const userData=[
    {
        name:"Kaviyarasan",
        city:"Perambalur",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:true,
        profile:"Profile photo.jpg",
    },
    {
        name:"Kavin",
        city:"Erode",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:false,
        profile:"kavin.jpg",
    },
    {
        name:"Kaviyarasan",
        city:"Perambalur",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:true,
        profile:"Profile photo.jpg",
    },
    {
        name:"Kaviyarasan",
        city:"Perambalur",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:true,
        profile:"Profile photo.jpg",
    },
    {
        name:"Kaviyarasan",
        city:"Perambalur",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:true,
        profile:"Profile photo.jpg",
    },
    {
        name:"Kaviyarasan",
        city:"Perambalur",
        description:"Front-End Developer",
        skills:["UI/UX","HTML","CSS","Javascript","React"],
        online:true,
        profile:"Profile photo.jpg",
    },
];
function User(props){
   return (
   <div className="card-container">
    <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
    <img src={props.profile} className="img" alt=""/>
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
    </div>
    <div className="skills">
        <h3>Skills</h3>
        <ul>
           {props.skills.map((skill,index) =>(
            <li key={index}>{skill}</li>
           ))}
       </ul>
</div>
    
   </div>
   );
}

export const Usercard = () => {
  return (
    <>
    {userData.map((user,index)=>(
      <User key={index} name={user.name}
      city={user.city}
       description={user.description}
       online={user.online}
       profile={user.profile}
       skills={user.skills} />
    ))}
  </>
);
};

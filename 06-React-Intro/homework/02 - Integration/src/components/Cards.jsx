import Card from "./Card";

export default function Cards({characters,onClose}) {
  return (
    <div>
      {characters.map(({id,name,status,species,gender,origin,image,onClose}, index) => {
        return (
          <Card 
          key={index} 
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin= {origin.name}
          image={image}
          onClose={onClose}
          > </Card>
        );
      })}
        {/* {props.characters.map((user, index) => {
        return (
          <Card 
          key={index} 
          user={user}
          > </Card>
        );
      })} */}
    </div>
  );
}
// {techSkills.map((element,index) => {
//    return <li key={index}>{element} </li>;
//  })}

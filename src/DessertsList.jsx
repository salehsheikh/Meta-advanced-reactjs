function DessertsList(props){
    const lowCaloDessertlist=props.data
    .filter((dessert)=>{
        return dessert.calories<500;
    })
    .sort((a,b)=>{
        return a.calories-b.calories;
    })
    .map((dessert)=>{
      return(
      <li>{dessert.name}-{dessert.calories}cal</li>
    );
});
return(
    <ul>
        {lowCaloDessertlist}
    </ul>
)
}
export default DessertsList;
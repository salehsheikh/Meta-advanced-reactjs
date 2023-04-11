// import React from "react";
// const dishes = [
//   { title: "samosa", price:"120",id: 1, description: "the samosa is my favourite" },
//   { title: "jalebi", price:"130",id: 2, description: "the samosa is my favourite" },
//   { title: "pakora", price:"120",id: 3, description: "the samosa is my favourite" }
// ];
//   const dessert=dishes.map(dish=>{
//     return{
//     content:`${dish.title}- ${dish.description}`,
//     price:dish.price,
//     id:dish.id,
//   }})
//   function App(){
//     console.log(dessert);
//     <h1> examine the console output</h1>
//   }
// export default App;


// import React from "react";
// const dishes = [
//   { title: "samosa", price:"120",id: 1, description: "the samosa is my favourite" },
//   { title: "jalebi", price:"130",id: 2, description: "the samosa is my favourite" },
//   { title: "pakora", price:"120",id: 3, description: "the samosa is my favourite" }
// ];
//   function App(){
//     const dessert=dishes.map(dish=>{
//       const content=`${dish.title}- ${dish.description}`
//       return <li>{content}</li>
//         })
//     return(
//       <div>
//         <ul>{dessert}</ul>
//       </div>
//     )
//   }
// export default App;

// import React from "react";
// const desserts = [
//   {
//     title: 'Chocolate Cake',
//     description: 'Chocolate cake is a cake flavored with melted chocolate',
//     calories: 500,
//   }
// ];

// const newDesserts = desserts.map((dessert) => {
//   return {
//     title: dessert.title.toLocaleLowerCase(),
//     ...dessert,
//     kCal: dessert.calories / 1000,
//   };
// });
// function App(){
//        console.log(newDesserts);
     
// }
// export default App;


// import "./App.css";
// import DessertsList from "./DessertsList";

// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <h2>List of low calorie desserts:</h2>
//       <DessertsList data={desserts} />
//     </div>
//   );
// }

// export default App;


//switch and theme
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };

// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//       }}
//     >
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }

// export default Root;
// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     greeting.greet = "Hello, World-Wide Web"; 
//     setGreeting(greeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 


//correct way
// import React from 'react';
// export default function App() { 
//   const [greeting, setGreeting] = React.useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 


// import React, { useState } from 'react'

// function App() {
//   const[giftCard,setGiftCard]=useState({
//     firstname:"saleh",
//     lastname:"muzaffar",
//     text:"free dinner for 4 guests",
//     valid:true,
//     instruction:"to use the coupan click the button below"
//   });
//   function spendGiftCard(){
//     setGiftCard(prevState=>{
//       return{
//         ...prevState,
//         text: "Your coupon has been used.",
//         valid: false,
//         instruction: "Please visit our restaurant to renew your gift card."
//       };
//     }
//     );
//   };
//   return (
//       <div style={{padding:'40px'}}>
//         <h1> Gift Card Page</h1>
//         <h2> {giftCard.firstname}{giftCard.lastname}</h2>
//         <p>{giftCard.text}</p>
//         <p>{giftCard.instruction}</p>
//         {giftCard.valid &&(
//         <button onClick={spendGiftCard}>
//           spend gift card
//         </button>
//         )}
//       </div>
//   );
// }

// export default App;


// import React, { useState,useEffect } from 'react'

// const App = () => {
//   const[user,setUser]=useState([]);
//   const Fetchdata=()=>{
//     fetch("https://randomuser.me/api/?results=1")
//     .then((response)=>response.json())
//     .then((data)=>setUser(data));
//   }
//   useEffect(() => {
//     Fetchdata();
//   }, []);
  
//   return Object.keys(user).length>0? (
//     <div>
//        <h1>Customer data</h1>
//       <h2>Name: {user.results[0].name.first}</h2>
//       <img src={user.results[0].picture.large} alt="" />
//     </div>
//   ):(
//     <h1>Data pending...</h1>
//   );
// }

// export default App;


// import { useReducer } from 'react';
// const reducer=(state,action)=>{
//   if(action.type==="buy ingredients")return{money:state.money-10};
//   if(action.type==="sell a meal")return{money:state.money+10};
//   if(action.type==="celebrity visit")return{money:state.money+1000};
//   return state;
// }
// function App(){
//   const initailstate={money:100};
//   const[state,dispatch]=useReducer(reducer,initailstate);

// return(
//   <div>
//       <h1>Wallet: {state.money}</h1>
//     <button onClick={()=>dispatch({type:"buy ingredients"})}>buy ingredients</button>
//     <button onClick={()=>dispatch({type:"sell a meal"})}>sell ingredients</button>
//     <button onClick={()=>dispatch({type:"celebrity visit"})}>celebrity</button>
//   </div>
// )
// }
// export default App;


// import { useState, useEffect, useRef } from "react";
// export default function App() {
//   const [day, setDay] = useState("Monday");
//   const prevDay = usePrevious(day);
//   const getNextDay = () => {
//     if (day === "Monday") {
//       setDay("Tuesday")
//     } else if (day === "Tuesday") {
//       setDay("Wednesday")
//     } else if (day === "Wednesday") {
//       setDay("Thursday")
//     } else if (day === "Thursday") {
//       setDay("Friday")
//     } else if (day === "Friday") {
//       setDay("Monday")
//     }
//   }
//   return (
//     <div style={{padding: "40px"}}>
//       <h1>
//         Today is: {day}<br />
//         {
//           prevDay && (
//             <span>Previous work day was: {prevDay}</span>
//           )
//         }
//       </h1>
//       <button onClick={getNextDay}>
//         Get next day
//       </button>
//     </div>
//   );
// }
// function usePrevious(val) {
//   const ref = useRef();
  
//   useEffect(() => {
//     ref.current = val;
//   }, [val]);

//   return ref.current;
// }

// // import "./App.css";
// // import React, { useState } from 'react'
// // import { RadioOption,RadioGroup } from "./Radio";
// // function App() {
// //   const[selected,setSelected]=useState("");
// //   return (
// //     <div className="App">
// //       <h2>How did you hear about Little Lemon?</h2>
// //       <RadioGroup onchange={setSelected} selected={selected}>
// //         <RadioOption value='socialmedia'>socialmedia</RadioOption>
// //         <RadioOption value="friends">Friends</RadioOption>
// //         <RadioOption value="advertising">Advertising</RadioOption>
// //         <RadioOption value="other">Other</RadioOption>
// //       </RadioGroup>
// //       <button disabled={!selected}>
// //          Submit
// //       </button>
// //     </div>
   
// //   )
// // };

// // export default App

import "./App.css";
import React, { useEffect, useState } from 'react';
const MousePosition=({render})=>{
  const[mousePosition,setMousePosition]=useState({
    x:0,
    y:0,
  });
  useEffect(()=>{
    const handleMousePositionChange=(e)=>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY,
      });
    };
    window.addEventListener("mousemove",handleMousePositionChange);
    return()=>{
      window.removeEventListener("mousemove",handleMousePositionChange);
    };
  },[])
  return render({mousePosition});
};
const PanelMouseLogger=()=>{
  return(
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition render={({mousePosition})=>(
        <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
        </div>
      )}
    /> 
    </div>
  );
};
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;

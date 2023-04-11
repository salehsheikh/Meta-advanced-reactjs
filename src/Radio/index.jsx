import React from 'react';
import "./styles.css";
export const RadioGroup=({onchange,selectedId,children})=>{
  const RadioOptions=React.Children.map(children,(child)=>{
    return React.cloneElement(child,{
    onchange,
    checked:child.props.value===selectedId
  });
    });

    return <div className="RadioGroup">{RadioOptions}</div>;
};
export const RadioOption=({value,checked,onchange,children})=>{
  return(
    <div className='RadioOption'>
      <input
       id={value}
       type="radio"
       name={value}
       value={value}
       checked={checked}
       onChange={(e)=>{
        onchange( e.target.value);
       }}
      ></input>
 <label htmlFor={value}>{children}</label>
    </div>
  );
};
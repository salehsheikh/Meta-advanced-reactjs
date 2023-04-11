import React, { useState } from 'react'

function regesterationForm() {
    const[form,setForm]=useState({firstname:"saleh",
     lastname:"muzaffar",email:"saleh@gmail.com"});
  return (
    <>
      <label>firstName:
        <input value={form.firstname}
         onChange={e=>{
            setForm({
                ...form,
                firstname:e.target.value
            });
        }}>
        </input>
 </label>
      <label>lastName:
        <input value={form.lastname}
         onChange={e=>{
            setForm({
                ...form,
                lastname:e.target.value
            });
        }}>
        </input>
      </label>
      <label>email:
        <input value={form.email}
         onChange={e=>{
            setForm({
                ...form,
                email:e.target.value
            });
        }}>
        </input>

      </label>
      <p> {form.firstname}{' '}
           {form.lastname}{' '}
            {form.email}</p>
    </>
  );
}

export default regesterationForm

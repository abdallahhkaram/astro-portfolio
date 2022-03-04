import React from 'react';

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div class='grid lg:grid-cols-3 gap-8'>
        <div class='card bg-slate-100 p-4 rounded shadow cursor-pointer'>
          <p class='text-2xl font-semibold mb-2'>Eliexpress</p>
          <img src='./assets/mockup1.png' alt='My Picture' width='300' />
        </div>
        <div class='card bg-slate-100 p-4 rounded shadow cursor-pointer'>
          <p class='text-2xl font-semibold mb-2'>Eli Dash</p>
          <img src='./assets/mockup2.png' alt='My Picture' width='300' />
        </div>
      </div>
      {open ? <div>Hello</div> : <></>}
    </>
  );
}

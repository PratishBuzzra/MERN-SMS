import React from 'react';

const Constant = (props) => {
  return (
    <div className={`relative w-full h-[35vh] overflow-hidden`}>
      <img
        src={props.constantImg}
        alt="banner"
        className="w-full h-full object-cover"
      />

   
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{props.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">{props.text}</p>
        
      </div>
    </div>
  );
};

export default Constant;

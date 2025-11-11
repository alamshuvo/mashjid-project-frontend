import React from 'react';

const Button = ({text}) => {
    return (
        <div>
             <button
                className="bg-primaryButton text-white py-2 px-6 rounded w-full sm:w-auto font-poppins transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-primaryButton/50 active:scale-95 active:translate-y-px"
              >
             {text}
              </button>
        </div>
    );
};

export default Button;
import React from 'react';

const Button = ({ onClick, text }) => {
    const ButtonFunc = (text) => {
        if (text === "") {
            return "Button Works";
        } else {
            return text;
        }
    };

    return (
        <button onClick={onClick}>
            {ButtonFunc(text)}
        </button>
    );
};

export default Button;

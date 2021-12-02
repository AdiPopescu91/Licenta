import React from 'react';
import './styles.css';


function CustomButton(props) {
    const { children, name, onClick, className = 'button' } = props;
    return <button className={className} onClick={onClick}>Click {children} {name}</button>

}
export default CustomButton;
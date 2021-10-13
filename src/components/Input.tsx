import { InputProps } from "antd";
import { useEffect, useState } from "react";
import { StyledInput } from "./StyledComponents";

const InputComponent: React.FC<InputProps> = ({value, onChange, placeholder, type}) => {
    return (
        <>
            {type === "number" ? (
                <StyledInput value={value} placeholder={placeholder} onChange={onChange} type={type} min="1"/>
            ):(
                <StyledInput value={value} placeholder={placeholder} onChange={onChange} type={type}/>
            )} 
        </>
    )
}

export default InputComponent;
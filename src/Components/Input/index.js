import React from "react";
import { InputField } from "./styles";

function Input({placeholder, type, setvariavel, value}) {
    return(
        <div>
            <InputField placeholder={placeholder} type={type} value={value} onChange={(event) => {
            setvariavel(event.target.value);
            }}></InputField>
        </div>
    )
}

export default Input;
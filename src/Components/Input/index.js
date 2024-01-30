import React from "react";
import { InputField } from "./styles";

function Input({placeholder}) {
    return(
        <div>
            <InputField placeholder={placeholder}></InputField>
        </div>
    )
}

export default Input;
import React from "react";
import { InputField } from "./styles";

function InputFile({placeholder, value}) {
    return(
        <div>
            <InputField placeholder={placeholder} type="file" value={value}></InputField>
        </div>
    )
}

export default InputFile;
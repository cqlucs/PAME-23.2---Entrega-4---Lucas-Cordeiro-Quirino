import React from "react";
import { DimInputField } from "./styles";

function DimInput({placeholder, setvariavel, value}) {
    return(
        <div>
            <DimInputField placeholder={placeholder} value={value} onChange={(event) => {
            setvariavel(event.target.value);
            }}></DimInputField>
        </div>
    )
}

export default DimInput;
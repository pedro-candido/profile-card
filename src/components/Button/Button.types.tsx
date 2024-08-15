import React from "react";

export type IButtonProps = {
    buttonType?: "button" | "disabled";
} & React.HTMLAttributes<HTMLButtonElement>
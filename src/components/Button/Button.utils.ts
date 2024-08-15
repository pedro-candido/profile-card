import {IButtonProps} from "./Button.types.tsx";

export const getButtonClasses = (buttonType: IButtonProps["buttonType"]) => {
    const objClasses = {
        ["disabled"]: 'bg-green-700 p-4 rounded-full text-white',
        ["button"]: 'bg-pink-700 p-4 rounded-full text-white',
    }

    return objClasses[buttonType ?? 'button'];
}
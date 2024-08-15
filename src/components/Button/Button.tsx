import {IButtonProps} from "./Button.types.tsx";
import {getButtonClasses} from "./Button.utils.ts";

function Button({children, onClick, buttonType = 'button'}: IButtonProps) {
    return (
        <button onClick={onClick} className={`${getButtonClasses(buttonType)}`}>
            {children}
        </button>
    );
}

export {Button}
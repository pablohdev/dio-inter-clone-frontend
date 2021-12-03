import { ButtonHTMLAttributes } from 'react';
import {ButtonContainer} from './styles';


const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button;
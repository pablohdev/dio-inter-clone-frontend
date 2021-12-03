import { InputHTMLAttributes } from 'react';
import {InputContainer} from './styles';


const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <InputContainer>
            <input {...props} />
        </InputContainer>
    )
}

export default Input;
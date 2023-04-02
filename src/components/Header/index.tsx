import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
    children: ReactNode;
}

export const Header = () =>{
    return(
        <C.Container>
            <h1>Sign up Developer</h1>
            <p>Make your sign up in the list and get a job instantly</p>
        </C.Container>
    )
}
import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}


export const Theme = ({children}:Props) =>{
    const { state } = useForm();
    console.log(state.currentStep)
    return(
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.SideBar>
                        <SidebarItem
                            title = 'Profile'
                            description = 'Identify yourself'
                            icon = 'profile'
                            path='/'
                            active ={state.currentStep === 1}
                        />
                        <SidebarItem
                            title = 'Professional'
                            description = 'Your professional level'
                            icon = 'book'
                            path='/step2'
                            active ={state.currentStep === 2}
                        />
                        <SidebarItem
                            title = 'Contacts'
                            description = 'How to contact you'
                            icon = 'mail'
                            path='/step3'
                            active ={state.currentStep === 3}
                        />
                        <SidebarItem
                            title = 'Welcome'
                            description = 'Thanks for signing up'
                            icon = 'correct'
                            path='/step4'
                            active ={state.currentStep === 4}
                        />
                    </C.SideBar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}
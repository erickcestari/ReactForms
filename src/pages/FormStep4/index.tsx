import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate  } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep4 = () =>{
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() =>{
        if(state.name === '' || !state.email.includes('@')|| !state.github.includes('github.com')) navigate('/step3')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }, [])

    return(
        <Theme>
            <C.Container>
                <div style={{height:'400px'}}> 
                    <p>Welcome!</p>
                    <h1>Thank you {state.name}, please check your information</h1>
                    <p>Are it correct?</p>

                    <hr/>
                    <C.TextArea>
                        <p>Name:</p>
                        <h4>{state.name}</h4>
                    </C.TextArea>
                    <C.TextArea>
                    <p>Level:</p>
                    {state.level === 0 &&
                        <h4>Beginner</h4>
                    }
                    {state.level === 1 &&
                        <h4>Developer</h4>
                    }
                    </C.TextArea>
                    <C.TextArea>
                    <p>Email:</p>
                    <h4>{state.email}</h4>
                    </C.TextArea>
                    <C.TextArea>
                    <p>Github:</p>
                    <h4>{state.github}</h4>
                    </C.TextArea>
                </div>
                <Link to='/step3' className='backButton'>Back</Link>
            </C.Container>
        </Theme>
    )
}
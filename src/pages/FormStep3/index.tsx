import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate  } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () =>{
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const checkEmail = (email:string) =>{
        return email.includes('@')
    }
    
    const checkGithub = (github:string) =>{
        return github.includes('github.com')
    }

    const handleFinishStep = () =>{
        if(checkEmail(state.email) && checkGithub(state.github)){
            navigate('/step4')
        }
        else {
            alert('Please fill in the fields and pay attention to type correctly')
        }
    };

    useEffect(() =>{
        if(state.name === '') navigate('/')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <div style={{height:'400px'}}> 
                    <p>Step 3/3</p>
                    <h1>Cool {state.name}, where do we find you?</h1>
                    <p>Fill in the fields below so that we can contact you.</p>

                    <hr />

                    <label>
                        Your Email
                        <input
                            type="email"
                            autoFocus
                            value={state.email}
                            onChange={handleEmailChange}
                        />
                    </label>

                    <label>
                        Your Github
                        <input
                            type="url"
                            value={state.github}
                            onChange={handleGithubChange}
                        />
                    </label>
                </div>
                <Link to='/step2' className='backButton'>Back</Link>
                <button onClick={handleFinishStep}>Finish</button>
            </C.Container>
        </Theme>
    )
}
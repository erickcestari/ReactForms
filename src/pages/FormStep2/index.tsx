import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useNavigate, Link  } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
export const FormStep2 = () =>{
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () =>{
        if(state.name !== ''){
            navigate('/step3')
        } else{
            alert('Please fill in the fields')
        }
        
    }

    const setLevel = (level:number) =>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    useEffect(() =>{
        if(state.name === '') navigate('/');
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [])

    return(
        <Theme>
            <C.Container>
                <div style={{height:'400px'}}> 
                    <p>Step 2/3</p>
                    <h1>{state.name}, What best describes you?</h1>
                    <p>Choose the best option to describe your professional status.</p>

                    <hr />

                    <SelectOption
                        title='Iam a beginner'
                        description="I have been coding for less than two years"
                        icon="🥳"
                        selected={state.level === 0}
                        onClick={()=> setLevel(0)}
                    />

                    <SelectOption
                        title='Iam a developer'
                        description= 'I have been coding for two or more years'
                        icon="🤯"
                        selected={state.level === 1}
                        onClick={()=> setLevel(1)}
                    />
                </div>
                <Link to='/' className='backButton'>Back</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}
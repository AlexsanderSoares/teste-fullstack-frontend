import { useState, useEffect } from 'react';
import './styles.css';
import api from '../services/api';

function States() {

    const [states, setStates] = useState([]);

    useEffect(() => {
        

        const getStates = async () => {
            try{
                const response = await api.get('/estados');

                setStates(response.data);
            }catch(err){
                console.log(err);
            }
        }

        getStates();
        
    }, []);

    return (
        <div className='states'>
            <ul>
                {states.map(state => {
                    return <li key={Math.random()}>{state.name} ({state.uf})</li>
                })}
            </ul>
        </div>
    );
}

export default States;

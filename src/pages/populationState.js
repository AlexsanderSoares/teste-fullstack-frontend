import { useState, useEffect } from 'react';
import './styles.css';
import api from '../services/api';

function PopulationState() {

    const [statesPopulation, setStatePopulation] = useState({});

    useEffect(() => {
        

        const getStates = async () => {
            try{
                const response = await api.get('/populacao/sp');

                setStatePopulation(response.data);
            }catch(err){
                console.log(err);
            }
        }

        getStates();
        
    }, []);

    return (
        <div className='states'>
            <ul>
                <li key={Math.random()}>
                    {statesPopulation.uf} - População: {statesPopulation.population}
                </li>
            </ul>
        </div>
    );
}

export default PopulationState;

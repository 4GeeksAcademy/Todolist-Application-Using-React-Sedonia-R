import React, { useState } from 'react';

export const Container = () => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <div className="row gx-0">
            <div className='paper-stack'>
                <input 
                className='input-field shadows-into-light-regular'
                type="text"
                placeholder="What needs to be done?"
                onChange={
                    (event) => setInputValue(event.target.value)
                }
                value={inputValue}
                />
                <div className='footer shadows-into-light-regular'>X items left</div>
            </div>
            
        </div>

    );
};

const AnyComponent = () => {
    const [ inputValue, setInputValue ] = useState('');
    
    return <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
}
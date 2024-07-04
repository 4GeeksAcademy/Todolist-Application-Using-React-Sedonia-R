import React, { useState } from 'react';

export const Container = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ allTasks, setAllTasks ] = useState([]);

    const handleInputEnter = (event) => {
        // let newField = { text: event.target.value };
        if(event.key == 'Enter'){
            setAllTasks([...allTasks, event.target.value]);
            setInputValue('');
        }
    }

    return (
        <div className="row gx-0">
            <div className='paper-stack'>
                <div>
                    <input 
                        className='input-field  border-0 mb-0 shadows-into-light-regular'
                        type="text"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={
                            (event) => setInputValue(event.target.value)
                        }
                        onKeyDown={(event) => handleInputEnter(event)}
                    />
                </div>
                
                {allTasks.map((input, index) => {
                    const removeItems = (index) => {
                        let data = [...allTasks];
                        data.splice(index, 1);
                        setAllTasks(data);
                    };
                    return(
                        <div key={index}>
                            <ul className="input-field task shadows-into-light-regular p-0">
                                {allTasks[index]}
                                <button 
                                    className='button shadows-into-light-regular'
                                    onClick={() => removeItems(index)}
                                >
                                    X
                                </button>
                            </ul>
                            
                        </div>
                    )
                })}
                <div className='footer shadows-into-light-regular'>{allTasks.length} items left</div>
            </div>
        </div>
    );
};
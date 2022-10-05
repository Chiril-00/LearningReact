import React from 'react';

const InputWithClear = ({value, setValue, placeholder}) => {

    const clear = () => {
        setValue('');
    };

    const onChange = event => {
        setValue(event.target.value);
    };

    return  (
            <div>
                    <input 
                        placeholder={placeholder} 
                        onChange={onChange}
                        value={value}
                    />
                    <button onClick={clear}>Clear field</button>            
            </div>
            );
}
export default InputWithClear;
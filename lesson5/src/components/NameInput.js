export default function NameInput({value, setValue, placeholder}) {

    const onChange = (event) => {
        setValue(event.target.value)
    }
    
    return (
        <div>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {/* <button onClick={() => setCount(count + 1)}>
                Click me!
            </button> */}
        </div>
    );
}
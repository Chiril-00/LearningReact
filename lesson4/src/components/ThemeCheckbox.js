import { useState } from "react";


export const ThemeCheckbox = ({name}) => {
    const [checked, setChecked] = useState(false);

    const onChange = (event) => {
        setChecked(event.target.checked)
        if(event.target.checked) {
            document.querySelector(':root').style.setProperty('--background', '#000');
            document.querySelector(':root').style.setProperty('--text-color', '#FFF');
        } else {
            document.querySelector(':root').style.setProperty('--background', '#FFF');
            document.querySelector(':root').style.setProperty('--text-color', '#000');
        }
    }

    return  (
            <div>
                <input type='checkbox' checked = {checked} onChange = {onChange} />: Enable dark mode
                <br />
                Hey {name}, theme is: {checked ? 'dark' : 'light'}
            </div>
    )
}
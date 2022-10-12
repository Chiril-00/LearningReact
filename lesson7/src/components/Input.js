export default function Input({value, onChange }) {
    return (
        <input type='number' value={value} onChange={(event) => onChange=(event.target.value)} />
    )
}
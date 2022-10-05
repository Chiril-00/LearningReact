import './Pokemon.css'

export default function Pokemon({pokemon}) {
    return pokemon === undefined ? (
    <div>No pokemon</div>
    ) : (
    <div className = 'pokemon_container'>
        <h2 className = 'pokemon_name'>{pokemon.name}</h2>
        <p>Base experience: <span>{pokemon.base_experience}</span></p>
        <p>Weight: <span>{pokemon.weight}</span></p>
        <p>Height: <span>{pokemon.height}</span></p>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />
    </div>
    );
}

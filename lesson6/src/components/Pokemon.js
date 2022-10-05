import './Pokemon.css'

export default function Pokemon({pokemon}) {
    return pokemon === undefined ? (
    <div>No pokemon</div>
    ) : (
    <div className = 'pokemon_container'>
        <h2 className = 'pokemon_name'>{pokemon.name}</h2>
        <p className='pokemon_description'>Base experience: {pokemon.base_experience}</p>
        <p className='pokemon_description'>Weight: {pokemon.weight}</p>
        <p className='pokemon_description'>Height: {pokemon.height}</p>
        <img src={pokemon.sprites.front_default} />
    </div>
    );
}

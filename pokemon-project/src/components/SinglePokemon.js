import React from 'react'

const SinglePokemon = props =>{
    //Each poke is a single pokemon's data, being passed in as props.
    const {poke} = props;

    // console.log('SinglePOkemon props:', props)
    
    return (
        <div className='pokemon-card'>
            {/* Name of each pokemon */}
            <h2 className='poke-name'>{poke.name}</h2>

            {/* This returns basic type information. Singular if only one type, plural if two types. */}
            {poke.type[1]? <p>Types: {poke.type[0]} / {poke.type[1]} </p> : <p>Type: {poke.type}</p>}

            {/* image of each pokemon */}
            <img src= {poke.img}/>
        </div>
    )
}

export default SinglePokemon;

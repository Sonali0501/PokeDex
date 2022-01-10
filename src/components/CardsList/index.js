import React from 'react';
import './CardsList.scss';
import PokeCard from '../PokeCard';

const CardsList = ({data}) => {
    return (
        <div className="listgrid">
            {!data?.length ? 'No Pokemons matching given filter' : data?.map((item, index) => {
                return (
                    <PokeCard key={index+1} url={item.url || item.pokemon.url} id={index+1} img={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${parseInt((item.url || item.pokemon.url).split('/')[6])}.svg`} name={item.name || item.pokemon.name} />
                )
            })}
        </div>
    )
}

export default React.memo(CardsList);
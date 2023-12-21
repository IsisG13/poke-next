import Image from "next/image";
import style from "@/styles/pokemonId.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <>
      <div className={style.pokemon_container}>
        <h1 className={style.title}>{pokemon.name}</h1>
        <Image
          className={style.imagem}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />

        <h2>Número: </h2>
        <p>#{pokemon.id}</p>

        <h2>Tipo: </h2>
        <div className={style.types_container}>
          {pokemon.types.map((item, index) => (
            <span key={index} className={`${style.type} ${style['type_' + item.type.name]}`} >{item.type.name}</span>
          ))}
        </div>

        <div className={style.data_container}>
          <div className={style.data_height}>
            <h2>Altura: </h2>
            <p>{pokemon.height * 10} cm</p>
          </div>

          <div className={style.data_weight}>
            <h2>Peso: </h2>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </>
  );
}

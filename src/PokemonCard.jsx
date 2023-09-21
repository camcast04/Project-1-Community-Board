function PokemonCard({ img, name, number }) {
  return (
    <div className="pokemon-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>#{number}</p>
      <a
        href={`https://www.serebii.net/pokedex-swsh/${name.toLowerCase()}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Info</button>
      </a>
    </div>
  );
}

export default PokemonCard;

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then((response) => response.json())
      .then((data) =>
        Promise.all(
          data.results.map((item) => fetch(item.url).then((response) => response.json()))
        )
      )
      .then((allPokemonData) => {
        setPoke(allPokemonData);
        setLoad(false);
      });
  }, []);









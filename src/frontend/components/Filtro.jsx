import React from "react";

function Filtro(data) {
  const [query, setQuery] = React.useState("");

  const [filteredData, setFilteredData] = React.useState(data);

  React.useMemo(() => {
    const result = data.filter((item) => {
      //filter se parece a map, ambos designan un nombre como parametro para badge
      return `${item.subTitulo} ${item.titulo}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredData(result);
  }, [data, query]);

  return { query, setQuery, filteredData };
}

export default Filtro;
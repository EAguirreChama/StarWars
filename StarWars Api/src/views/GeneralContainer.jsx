import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getData } from "../Info/getData";
import Info from "../Componentes/InfoContainer";
import SearchBar from "../Componentes/SearchBar/SearchBar";
import styles from "../Styles/NavBar.module.css"
import NavBar from "../Componentes/NavBar";

const GeneralView = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/")
  const [info, setInfo] = useState([])
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [tab, setTab] = useState("people")
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true)
    setUrl((prev) => prev.includes("search") ? `${prev}&page=${page}` : `https://swapi.dev/api/${tab}/?page=${page}`)
  }, [page, tab])

  const { data, status } = useQuery(
    ["people", url],
    () => getData(url),
    { keepPreviousData: true },
    {
      onError: () => console.log("Error al obtener datos de People"),
    }
  );

  useEffect(() => {
    if (data?.results) {
      setInfo(data.results)
      setLoading(false)
      if (data.next) setNext(true)
      else setNext(false)
    }
  }, [data, setInfo])

  useEffect(() => {
    setPage(1)
  }, [tab])

  const resetSearch = () => {
    setSearchTerm(""); // Vaciar el término de búsqueda
  };

  return (
    <div>
      <NavBar activeTab={tab} setTab={setTab}/>
      {loading === true ? (
        <p className={styles.loading}>Cargando...</p>
      ) : (
        <div>
          <SearchBar tab={tab} setUrl={setUrl} setPage={setPage} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Info info={info} setPage={setPage} page={page} status={status} next={next} setUrl={setUrl} tab={tab} resetSearch={resetSearch}/>
        </div>
      )}
    </div>
  )
}

export default GeneralView;
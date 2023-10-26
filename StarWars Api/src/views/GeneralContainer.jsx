import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getData } from "../Info/getData";
import Info from "../Componentes/InfoContainer";
import SearchBar from "../Componentes/SearchBar/SearchBar";
import styles from "../Componentes/NavBar/NavBar.module.css"

const GeneralView = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/")
  const [info, setInfo] = useState([])
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [tab, setTab] = useState("people")
  const [loading, setLoading] = useState(true)

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

  return (
    <div>
      <div className={styles.NavBarStyle}>
        <div>
          <a onClick={() => setTab("planets")} className={styles.Linke}>Planets</a>
        </div>
      </div>
      {status === "success" && <SearchBar tab={tab} setUrl={setUrl} setPage={setPage} />}
      {loading === true ?
        <p>Cargando...</p>
        : <Info people={info} setPage={setPage} page={page} status={status} next={next} setUrl={setUrl} tab={tab} />}
    </div>
  )
}

export default GeneralView;
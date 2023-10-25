import People from "../../Componentes/CardPeople/CardContainer/CardPeopleContainer";
import style from "./PeopleView.module.css"

const PeopleView = () => {
    return (
        <div>
            <h1 className={style.title}>Aqui es People</h1>
            <People/>
        </div>
    )
}

export default PeopleView;
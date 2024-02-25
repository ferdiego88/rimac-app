import AInput from "../../atoms/a-input/AInput";
import ASelect from "../../atoms/a-select/ASelect";
import styles from "./OFormWelcome.module.scss";

interface IOFormWelcome {

}
const OFormWelcome = ( {

}) => {

    return (
       <form className={styles.form} >
        <div className={`${styles['form__document-container']}`}>
        <ASelect />
        <AInput label="Nro. de documento" className="input__document"/>
        </div>
        <div>
        <AInput label="Celular"/>
        </div>
       </form>
    );
};

export default OFormWelcome;
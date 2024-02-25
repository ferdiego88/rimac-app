import AButton from "../../atoms/a-button/AButton";
import ACheckbox from "../../atoms/a-checkbox/ACheckbox";
import AInput from "../../atoms/a-input/AInput";
import ASelect from "../../atoms/a-select/ASelect";
import AText from "../../atoms/a-text/AText";
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
        <ACheckbox text="Acepto la Política de Privacidad"/>
        <ACheckbox text="Acepto la Política Comunicaciones Comerciales"/>
        <AText description="Aplican Términos y Condiciones." className="text__terms"></AText>
        <AButton name="quote" data-theme='primary'>Cotiza aquí</AButton>
       </form>
    );
};

export default OFormWelcome;
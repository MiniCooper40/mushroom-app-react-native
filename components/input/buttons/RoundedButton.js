import useTheme from "../../../style/useTheme"
import Button from "./Button"


const RoundedButton = ({title, onClick, buttonStyle, textStyle}) => {

    const {styles} = useTheme()

    return (
        <Button title={title} onClick={onClick} textStyle={textStyle} buttonStyle={[styles.roundedButton, buttonStyle]}/>
    )
}

export default RoundedButton
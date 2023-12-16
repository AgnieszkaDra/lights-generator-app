import { useState } from "react";
import LightBlue from '../../public/images/light-blue.svg'
import LightTurnedOff from '../../public/images/light-turned-off.svg'

export const SingleLight = () => {
    const [isOn, setOn] = useState(true)
    const imageSrc = isOn ? LightBlue : LightTurnedOff
    const handleToggle = () => {
        setOn(!isOn)
    }
    return (
        <img onClick={handleToggle} src={imageSrc} alt="Single Light"></img>
    )
}
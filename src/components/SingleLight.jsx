import { useState } from "react";
import LightBlue from '../../public/images/light-blue.svg'
import LightOrange from '../../public/images/light-orange.svg'
import LightYellow from '../../public/images/light-yellow.svg'
import LightPink from '../../public/images/light-pink.svg'
import LightRed from '../../public/images/light-red.svg'
import LightTurnedOff from '../../public/images/light-turned-off.svg'


const lights = [LightBlue, LightOrange, LightYellow, LightPink, LightRed]

export const SingleLight = () => {
    const [isOn, setOn] = useState(true)
    const getRandomIndex = () => {
        return (
            Math.floor(Math.random() * lights.length)
        )
    }
    const randomIndex = getRandomIndex()
    const imageSrc = isOn ? lights[randomIndex] : LightTurnedOff
    const handleToggle = () => {
        setOn(!isOn)
    }
    return (
        <img onClick={handleToggle} src={imageSrc} alt="Single Light"></img>
    )
}
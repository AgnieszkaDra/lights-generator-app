import { useState, useEffect } from "react";
import LightBlue from '../../public/images/light-blue.svg'
import LightOrange from '../../public/images/light-orange.svg'
import LightYellow from '../../public/images/light-yellow.svg'
import LightPink from '../../public/images/light-pink.svg'
import LightRed from '../../public/images/light-red.svg'
import LightTurnedOff from '../../public/images/light-turned-off.svg'


const lights = [LightBlue, LightOrange, LightYellow, LightPink, LightRed]

export const SingleLight = () => {
    const [isOn, setOn] = useState(true)
    const [lightColor, setLightColor] = useState(LightBlue)
    const getRandomIndex = () => {
        return (
            Math.floor(Math.random() * lights.length)
        )
    }
    // const randomIndex = getRandomIndex()
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * lights.length);
        setLightColor(lights[randomIndex]);
    }, []); // Empty dependency array ensures this runs once on mount
    // const imageSrc = isOn ? lights[randomIndex] : LightTurnedOff
    const imageSrc = isOn ? lightColor : LightTurnedOff
    const handleToggle = () => {
        setOn(!isOn)
    }
    return (
        <img onClick={handleToggle} src={imageSrc} alt="Single Light"></img>
    )
}
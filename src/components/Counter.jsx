import { Text } from "./Text"
import { IconIncrement } from "./icons/IconIncrement"
import { IconDecrement } from "./icons/IconDecrement"

import styles from "./Counter.module.css"
import { useState } from "react"


export const Counter = (props) => {
    const [value, setValue] = useState(0)

    const handleIncrement = () => {
        setValue(value + 1)
    }

    const handleDecrement = () => {
        if(value <= 0) {
            return
        }
        setValue(value - 1)
    }
    return (
        <div className={styles.nav}>
            <Text>
               {value} {props.text} 
            </Text>
            <IconIncrement onClick={handleIncrement}/>
            <IconDecrement onClick={handleDecrement}/>
        </div>
    )
}
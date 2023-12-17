import { Text } from "./Text"
import { IconIncrement } from "./icons/IconIncrement"
import { IconDecrement } from "./icons/IconDecrement"

import styles from "./Counter.module.css"
import { useState } from "react"
import { SingleLight } from "./SingleLight"


export const Counter = (props) => {
    return (
        <div>
        <nav className={'nav'}>
            <Text>
               {props.count} {props.text} 
            </Text>
            <IconIncrement onClick={props.onIncrement}/>
            <IconDecrement onClick={props.onDecrement}/>
        </nav>
        </div>
    )
}
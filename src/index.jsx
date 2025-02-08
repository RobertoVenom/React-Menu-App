import React from "react"
import {dataArray, App} from React
let dataArray = [1,2,3,45,47,49,50]

export default class App extends React.Component{
    render() {
        return dataArray.map((item) => <p>{item}</p>)
    }
}


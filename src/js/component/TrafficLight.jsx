import React, { useState, useEffect } from "react"


const TrafficLight = () => {

    //hook useState
    const [selected, setSelected] = useState("red")
    const [active, setActive] = useState(false)

    // [estado en si mismo, única función para cambiar el estado] = useState(como se inicializa el estado)

    const changeColor = (color) => {
        setSelected(color)
    }

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (selected == "red") {
                    setSelected("yellow")
                } else if (selected == "yellow") {
                    setSelected("green")
                } else if (selected == "green") {
                    setSelected("red")
                }
            }, 4000)
            return () => clearInterval(interval)
        }

    }, [active, selected])



    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">

                <div
                    className={`red ${selected == "red" ? "light-on" : ""}`}
                    onClick={() => changeColor("red")}
                ></div>
                <div
                    className={`yellow ${selected == "yellow" ? "light-on" : ""}`}
                    onClick={() => changeColor("yellow")}
                ></div>
                <div
                    className={`green ${selected == "green" ? "light-on" : ""}`}
                    onClick={() => changeColor("green")}
                ></div>

            </div>
            <button onClick={() => setActive(!active)} className="btn btn-success">Activar</button>
        </main>
    )
}

export default TrafficLight


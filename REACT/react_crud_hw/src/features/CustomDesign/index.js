import React from 'react'

export function CustomDesign () {
    const divRef = React.useRef(null)

    React.useEffect(() => {
        if (divRef.current) {
            const div = divRef.current

            div.style.backgroundColor = 'red'
            div.style.color = 'white'
            div.style.padding = '1rem'
        }
    }, [])

    return (
        <div ref={divRef}>
            <h1>Custom Design</h1>
        </div>
    )
}
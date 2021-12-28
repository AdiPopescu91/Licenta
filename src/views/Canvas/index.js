import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    const { width, height } = props;
    const canvasRef = useRef(null)


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        props.draw(context)
    }, [props.draw])

    return <canvas ref={canvasRef} width={width} height={height}/>
}

Canvas.defaultProps = {
    width: 800,
    height: 600,
}

export default Canvas

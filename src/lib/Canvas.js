
import React, { useEffect, useState } from 'react'
import { CanvasContext} from './Context'

export const Canvas = ({children, width, height}) => {

    const ref = React.useRef();
    const [context, setContext] = useState(null);
    const [mouseMove, setMouseMove] = useState(null) 
    const [mouseDown, setMouseDown] = useState(null) 
    const ratio = Math.ceil(window.devicePixelRatio ?? 1);

    const onMouseMove = (e) => {
        if(e.target === ref.current) {
            setMouseMove(e);
        }
    }

    const onMouseDown = (e) => {
        if(e.target === ref.current) {
            setMouseDown(e)
        }
    }

    const onMouseUp = (e) => {
            setMouseDown(null);   
    }


    useEffect(()=> {
        if(ref.current){
            const ctx = ref.current.getContext('2d');
            setContext(ctx)
            ref.current.width = width * ratio;
            ref.current.height = height * ratio;
            ref.current.style.width = width + "px";
            ref.current.style.height = height + "px";
            ctx.scale(ratio,ratio)
        }

        // return () => {
        //     if(context){
        //         context.clearRect(0, 0, ref.current.width, ref.current.height);
        //     }
        // }

        window.addEventListener('mousemove', onMouseMove, true);
        window.addEventListener('mousedown', onMouseDown, true);
        window.addEventListener('mouseup', onMouseUp, true);

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
        }

    }, [height, ratio, width])

    return (
        <CanvasContext.Provider value={{context, mouseMove, mouseDown, setMouseDown}}>
            <canvas width={width} height={height} ref={ref}>
                {ref.current && children}
            </canvas>
        </CanvasContext.Provider>
    )
}
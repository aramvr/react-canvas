import React, {  useContext } from 'react'
import { CanvasContext} from './Context'


export const View = ({ left, top, width, height, backgroundColor, children, offsetTop = 0, offsetLeft = 0}) => {
    const {context} = useContext(CanvasContext)
    context.fillStyle = backgroundColor;
    context.fillRect(offsetLeft+left, offsetTop+top, width, height)

    return <div data-testid="view">{children && React.cloneElement(children, {offsetTop, offsetLeft})}</div>
}
import React, {Children} from 'react'
export const Layout = ({children, offsetTop = 0, offsetLeft = 0}) => {

    const arrayChildren = Children.toArray(children);
    return <div data-testid="layout">
        {Children.map(arrayChildren, (child, index) => {
            const clone = React.cloneElement(child, {offsetTop, offsetLeft});
            offsetTop+= child.props.height;
            return clone;
        })}
    </div>
}

export const Row = ({offsetTop, offsetLeft: initialOffsetLeft, children}) => {
    let offsetLeft = initialOffsetLeft;
    const arrayChildren = Children.toArray(children);


    return <div data-testid="row">
        {Children.map(arrayChildren, (child, index) => {
            const clone = React.cloneElement(child, {offsetTop, offsetLeft});
            offsetLeft+= child.props.width;
            return clone;
        })}
    </div>

}

export const Col  = ({children, offsetTop, offsetLeft}) => {
    // get row offsetLeft
    // pass to children as prop
    return <div data-testid="col">{React.cloneElement(children, {offsetTop, offsetLeft})}</div>
}
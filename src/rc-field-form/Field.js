import React from 'react'
import FieldContext
    from './FieldContext';

class Field extends React.Component {
    static contextType = FieldContext

    componentDidMount() {
        this.context.regsisterField(this)
    }

    onStoreChange = () => {
        this.forceUpdate()
    }

    getControlled = (childProps) => {
        const { getFieldValue, setFieldValue } = this.context;
        const { name } = this.props
        return {
            ...childProps,
            value: getFieldValue(name),
            onChange: event => {
                setFieldValue(name, event.target.value)
            }
        }
    }
    render() {
        let children = this.props.children
        return React.cloneElement(children, this.getControlled(children.props))
    }
}

export default Field;
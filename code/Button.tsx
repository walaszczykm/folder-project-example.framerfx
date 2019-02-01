import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import posed from 'react-pose'

const ButtonElement = posed.div({
    hoverable: true,
    init: { scale: 1 },
    hover: { scale: 1.1 }
})

const styles: React.CSSProperties = {
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'rgb(66, 127, 225)',
    padding: '12px'
}

type Props = {
    text: string;
}

export class Button extends React.Component<Props> {
    static defaultProps = {
        text: "Hello World!"
    }

    static propertyControls: PropertyControls = {
        text: ControlType.String
    }

    render() {
    return <ButtonElement style={styles}>{this.props.text}</ButtonElement>
    }
}

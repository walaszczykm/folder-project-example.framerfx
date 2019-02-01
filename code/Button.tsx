/* @jsx jsx */
import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import posed from 'react-pose'
import { css, jsx } from '@emotion/core'

const ButtonElement = posed.div({
    hoverable: true,
    init: { scale: 1 },
    hover: { scale: 1.1 }
})

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
    return (
        <ButtonElement
            css={css`
                color: white;
                border-radius: 4px;
                background-color: royalblue;
                padding: 12px;
            `}
        >
            {this.props.text}
        </ButtonElement>
    )
    }
}

import * as React from "react";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  color: string;
}

export class SVGTest extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: "#424D57"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    color: { type: ControlType.Color }
  };

  render() {
    const { color } = this.props;

    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>ic_arrow_back_black_24px</title>
        <desc>Created with Sketch.</desc>
        <g
          id="smooth"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="LiveChat-Copy-6"
            transform="translate(-861.000000, -253.000000)"
            fill={color}
            fill-rule="nonzero"
          >
            <g id="Group" transform="translate(846.000000, 237.000000)">
              <g
                id="ic_arrow_back_black_24px"
                transform="translate(15.000000, 16.000000)"
              >
                <polygon
                  id="Shape"
                  points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

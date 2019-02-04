import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { withTheme } from "../decorators";
import { TitleBar as UITitleBar } from "@livechat/ui-kit";

interface Props {
  text: string;
}

@withTheme()
export class TitleBar extends React.Component<Props> {
  static defaultProps = {
    title: "Chat with us!"
  };

  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" }
  };

  render() {
    return <UITitleBar {...this.props} />;
  }
}

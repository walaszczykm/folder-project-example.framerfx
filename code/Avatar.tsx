import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { withTheme } from "../decorators";
import { Avatar as UIAvatar } from "@livechat/ui-kit";

type Props = {
  imgUrl: string;
  letter: string;
  size: string;
};

@withTheme()
export class Avatar extends React.Component<Props> {
  static defaultProps = {
    imgUrl: "https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg",
    size: "64px"
  };

  static propertyControls: PropertyControls = {
    imgUrl: { type: ControlType.String, title: "Image URL" },
    letter: { type: ControlType.String, title: "Letter" },
    size: { type: ControlType.String, title: "Size" }
  };

  render() {
    return <UIAvatar {...this.props} />;
  }
}

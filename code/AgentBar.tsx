import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { withTheme } from "../decorators";
import {
  AgentBar as UIAgentBar,
  Avatar,
  Column,
  Title,
  Subtitle
} from "@livechat/ui-kit";

// Define type of property
type Props = {
  title: string;
  subtitle: string;
  imgUrl: string;
};

@withTheme()
export class AgentBar extends React.Component<Props> {
  static defaultProps = {
    title: "John Snow",
    subtitle: "Support hero",
    imgUrl: "https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
  };

  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    subtitle: { type: ControlType.String, title: "Subtitle" },
    imgUrl: { type: ControlType.String, title: "Image URL" }
  };

  render() {
    const { title, subtitle, imgUrl: imgUrl } = this.props;

    return (
      <UIAgentBar>
        <Avatar imgUrl={imgUrl} />
        <Column>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Column>
      </UIAgentBar>
    );
  }
}

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
};

@withTheme()
export class AgentBar extends React.Component<Props> {
  static defaultProps = {
    title: "John Snow",
    subtitle: "Support hero"
  };

  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    subtitle: { type: ControlType.String, title: "Subtitle" }
  };

  render() {
    const { title, subtitle } = this.props;

    return (
      <UIAgentBar>
        <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
        <Column>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Column>
      </UIAgentBar>
    );
  }
}

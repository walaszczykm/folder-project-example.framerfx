import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Message as UIMessage, MessageText } from "@livechat/ui-kit";
import { withTheme } from "../decorators";

type Props = {
  author: string;
  text: string;
  isOwn: boolean;
};

@withTheme()
export class Message extends React.Component<Props> {
  static defaultProps = {
    author: "Jon",
    text: "Hello! I am Jon!",
    isOwn: true
  };

  static propertyControls: PropertyControls = {
    author: { type: ControlType.String, title: "Author" },
    text: { type: ControlType.String, title: "Text" },
    isOwn: { type: ControlType.Boolean, title: "Is Own" }
  };

  render() {
    const { author, text, isOwn } = this.props;

    return (
      <UIMessage authorName={author} isOwn={isOwn}>
        <MessageText>{text}</MessageText>
      </UIMessage>
    );
  }
}

import * as React from "react";
import { ThemeProvider } from "@livechat/ui-kit";

function withTheme(theme?: object) {
  return function<T extends React.ComponentClass | React.FunctionComponent>(
    Component: T
  ) {
    const WrappedComponent = (props: any) => (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );

    return WrappedComponent as T;
  };
}

export default withTheme;

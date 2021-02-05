import React from "react";

let ContextType;
const { Provider, Consumer } = (ContextType = React.createContext());

class Context extends React.Component {
  state = {
    title: "Peta App",
    sidebar: "main-menu",
    slider: true,
  };

  setSlider = (slider = Boolean) => {
    this.setState(() => {
      return {
        slider: slider,
      };
    });
  };

  setTitle = (title) => {
    document.title = title + " | Peta App";
    this.setState(() => {
      return {
        title: title,
      };
    });
  };

  setSidebar = (data) => {
    this.setState(() => {
      return {
        sidebar: data,
      };
    });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          setTitle: this.setTitle,
          setSidebar: this.setSidebar,
          setSlider: this.setSlider,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Context, Consumer, ContextType };

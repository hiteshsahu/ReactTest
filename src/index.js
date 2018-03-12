import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Styles from "./style/Theme";
import Paper from "material-ui/Paper";
import ListExample from "./components/ListExample";
import HorizontalTransition from "./components/SelectStation";
import GridListExampleSingleLine from "./components/StationGrid";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ModeTrain from "material-ui/svg-icons/maps/train";
import ModeBUS from "material-ui/svg-icons/maps/directions-bus";
import Checkbox from "material-ui/Checkbox";
import Snackbar from "material-ui/Snackbar";

class App extends React.Component {
  state = {
    checked: false,
    open: false
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
        open: true
      };
    });
  }
  render() {
    return (
      <div style={Styles.container}>
        <MuiThemeProvider>
          <Header />

          <Hello name="Material UI" />
          <h2 style={Styles.heading}>
            Start editing to see some magic happen {"\u2728"}
          </h2>

          <Checkbox
            checkedIcon={<ModeBUS />}
            onCheck={this.updateCheck.bind(this)}
            uncheckedIcon={<ModeTrain />}
            label="Select Transport Mode"
            style={Styles.checkbox}
          />

          <GridListExampleSingleLine />

          <HorizontalTransition />

          <div>
            <Paper style={Styles.papers} zDepth={1} />
            <Paper style={Styles.papers} zDepth={2} />
            <Paper style={Styles.papers} zDepth={3} />
            <Paper style={Styles.papers} zDepth={4} />
            <Paper style={Styles.papers} zDepth={5} />

            <ListExample />

            <Snackbar
              open={this.state.open}
              message={this.state.checked ? "Train" : "Bus"}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));

import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import Snackbar from "material-ui/Snackbar";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const tilesData = [
  {
    img: "https://media2.giphy.com/media/cdNRMLodDJu9hKZU8u/200w.webp",
    title: "Hats",
    author: "Hans"
  },
  {
    img: "https://media2.giphy.com/media/fV2yJiCf3WDFLJYMBa/200w.webp",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img: "https://media2.giphy.com/media/26BGqo0GoLb0ThsXu/200w.webp",
    title: "Vegetables",
    author: "jill111"
  },
  {
    img: "https://i.stack.imgur.com/njoT1.jpg?s=328&g=1",
    title: "Water plant",
    author: "BkrmadtyaKarki"
  }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
class GridListExampleSingleLine extends React.Component {
  state = {
    open: false
  };

  handleClick = key => {
    console.log("Item is:" + key, this);
  };

  addToFav = key => {
    console.log("Fav is:" + key, this);
  };

  render() {
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map(tile => (
            <GridTile
              onClick={e => {
                this.handleClick(tile.title);
              }}
              key={tile.img}
              title={tile.title}
              actionIcon={
                <IconButton onClick={e => {
                  this.addToFav(tile.title);
                }}>
                  <StarBorder color="rgb(0, 188, 212)" />
               
                </IconButton>
              }
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img
                src={tile.img}
              />
            </GridTile>
          ))}
        </GridList>

        <Snackbar
          open={this.state.open}
          message={this.state.checked ? "Train" : "Bus"}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default GridListExampleSingleLine;

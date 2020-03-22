import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import YouTube from 'react-youtube';

interface AppProps { 
  videoId:String,
  props:[]
}
interface AppState {
  videoId: string; 
}
class Youtube_Tile extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state.videoId= props.videoId;

    this.setTarget = this.setTarget.bind(this);
  }
  
  setTarget(event) {

  }


  render() {
    const classes = theme => ({
      gridList: {
        width: 500,
        height: 450,
      }
    });
    return (
              <GridListTile>
                <YouTube
                  videoId={tile.videoId}
                  opts={tile.opts}
                  onReady={this.setTarget}
                />      
                <br/>
                <button onClick={this.test}>test</button>
              </GridListTile>

    );
  }
}

export default Youtube_Tile;

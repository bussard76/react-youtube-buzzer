import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Youtube_Tile from './youtubeTile';


interface AppProps { }
interface AppState {
  name: string; 
  videos: [any];
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class Youtube_Tile extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      videos: [
        {
          videoId:"dccXLswstaU",
          target: null,
          opts: {
            height: '160',
            width: '250',
            playerVars: {
                start:3,
                end:6,
                autoplay:1,
                showInfo:0,
                controls:0,
                modest:1,
                paused:0  
            }
          }
        },
        {
          videoId:"jx85QPPjNmU",
          target: null,
          opts: {
            height: '160',
            width: '250',
            playerVars: {
                start:38,
                end:43,
                autoplay:1,
                showInfo:0,
                controls:0,
                modest:1,
                paused:0  
            }
          }
        }
      ]
    };
    this.setTarget = this.setTarget.bind(this);
  }
  
  setTarget(event) {
    //alert(event.target.getVideoData()['video_id']);
    this.state.videos.forEach(function(element) {
      //if (element.videoId == event.target.getVideoData()['video_id'])
      //{
       // console.log(element);
       // element.target = event.target;
       // console.log(element);
      //}
    })
    //this.setState({target:event.target});
  }

  render() {
    const classes = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
    });
    return (
      <div>
        <div >
          <GridList cellHeight={260} cols={3}>
            {this.state.videos.map(tile => (
              <Youtube_Tile/>
            ))}
          </GridList>
        </div>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<Youtube_Tile />, document.getElementById('root'));

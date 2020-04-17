import React, {Component} from 'react';
import Navigation from './Navigation';
import './Youtube.css';

const API = 'AIzaSyDOU5RwevmGG-DKdd0wusIJTuRkLpJAWfQ'
const maxResults = 10;
var playlistID = 'PLhHYyZOpVlJC_TxH4U0xWrvMgiIAbTP-u'
var URL = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API}&part=snippet&playlistId=${playlistID}&maxResults=10`



class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultYT: ''
        }

        this.displayData = ``;
        this.handleClick = this.handleClick.bind(this)
    }

    httpGet = (theUrl) => {
        return new Promise ( (resolve, reject) => {
          var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        if (xmlHttp.responseText){
          resolve( JSON.parse(xmlHttp.responseText))
        } else{
          reject({
            error: 'Something went wrong'
          })
        }
        });
    }

    jsonParse = async () => {
      var jsonFormat = await this.httpGet(URL)      
      var video_id = jsonFormat.items[0].snippet.resourceId.videoId
      this.mainVid(video_id);
    }

    mainVid = (id) => {
      console.log("CALL COUNT HERE")
      console.log("id is: " + id)
      this.setState({
        resultYT: id
      });
    }

    UNSAFE_componentWillMount () {
      this.jsonParse();
      this.mainVid();
      this.playlistLoop();
    }

    playlistLoop = async () => {
      var jsonFormat = await this.httpGet(URL)
      var mydisplayData = [];

      for (var index in jsonFormat.items) {
        var thumbnail = jsonFormat.items[index].snippet.thumbnails.medium.url;
        var title = jsonFormat.items[index].snippet.title;
        var desc = jsonFormat.items[index].snippet.description.substring(0, 100);
        var vid = jsonFormat.items[index].snippet.resourceId.videoId

        var currArticle = (

          <article className="item" id={vid} onClick={e => this.handleClick(e.target.id)}>
        
            <img src={thumbnail} alt="" className="thumb"/>
            
            <div className="details">

              <h4>{title}</h4>

              <p>{desc}</p>
              
            </div>
            
          </article>
        )
        mydisplayData.push(currArticle)
      }    
      
      this.setState({
        displayData: mydisplayData
      });
      return mydisplayData;
    }

    handleClick = (id) => {
      console.log(id)
      this.mainVid(id);
      
    }

    render() {
        return (
          <div>
          <Navigation />
            <div className="container"> 
              <section id="video">
                
                  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.resultYT}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              
              </section>
              
              <main>

                <div className="container">

                  {this.state.displayData}

                </div>

              </main>
              
            </div>
            </div>
        );
      }
}

export default Youtube
import React from 'react';
import Navigation from './Navigation';
import './style.css';

var images = [];

for (var i = 0; i < 20; i++) {
    var pagePath = './pages/p' + i.toString() + '.jpg';
    var thumbnailPath = './thumbnails/p' + i.toString() + '.jpg';

    images.push({ original: pagePath, thumbnail: thumbnailPath });
}

var deck_id = "io7hsi37ypwv"
var current_image = "https://opengameart.org/sites/default/files/card%20back%20red.png"

class App extends React.Component {

    httpGet = (theUrl) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    
    makeDeck = () => {
        var deck = JSON.parse(this.httpGet("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"))
        deck_id = deck['deck_id']
        console.log("created new deck: " + deck_id)
    }
    
    drawCard = () => {
        var url = "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1"
        var card = JSON.parse(this.httpGet(url))
        console.log("drawing card")
        current_image = card['cards'][0]['image']
        var img = document.getElementById("card")
        img.src = "https://opengameart.org/sites/default/files/card%20back%20red.png";
        var no_card = document.getElementById("number_of_cards")
        no_card.innerHTML = "Remaining cards: " + card['remaining']    
    }
    
    newGame = () => {
        this.makeDeck()
        var no_card = document.getElementById("number_of_cards")
        no_card.innerHTML = "Remaining cards: " + 52  
        var img = document.getElementById("card")
        img.src = "https://opengameart.org/sites/default/files/card%20back%20red.png";
    }
    
    flipCard = () => {
        var img = document.getElementById("card")
        img.src = current_image
    }
    
    render() {
        return (
            <div>
                <Navigation />
                <div className="app">
                    <p id="main" style={{color: 'green'}}>
                    <span id="number_of_cards">"Remaining cards: 52"</span>
                    </p><div>
                    <img id="card" src="https://deckofcardsapi.com/static/img/XX.png" width={300} height={400} alt="card" />
                    </div>
                    <p />
                    <button onClick={this.newGame}>New Game/Reshuffle</button> 
                    <button onClick={this.drawCard}>Draw card</button> 
                    <button onClick={this.flipCard}>Flip card</button>    
                    <div>
                    <iframe width={420} height={345} src="https://www.youtube.com/embed/tgbNymZ7vqY" title="video">
                    </iframe>
                </div>
              </div>
            </div>
        );
    };
}

export default App;
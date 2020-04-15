import React from 'react';
import Navigation from './Navigation';
import ImageGallery from 'react-image-gallery';

import './style.css';

var images = [];

for (var i = 0; i < 20; i++) {
    var pagePath = './pages/p' + i.toString() + '.jpg';
    var thumbnailPath = './thumbnails/p' + i.toString() + '.jpg';

    images.push({ original: pagePath, thumbnail: thumbnailPath });
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <div>
                    Home
                </div>
            </div>
        );
    };
}

export default App;
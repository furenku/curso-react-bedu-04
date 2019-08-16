import React from 'react';
import GamePreviewView from './GamePreviewView';

class GamePreview extends React.Component {

    render() {
        return (
            <GamePreviewView
                title={ this.props.title }
                date={ this.props.date }
            />
        )
    }
    
}
export default GamePreview;
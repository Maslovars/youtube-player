import Card from './Card';
import React from 'react';

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, handleSetMovie } = this.props;
        return (
            <div className="CardList">
                { data.map((video, index) => (
                    <Card key={video.itemName + index}
                        itemName={video.itemName}
                        id={video.id}
                        source={video.source}
                        handleSetMovie={handleSetMovie} />
                ))
                }

            </div>
        )
    }
}

export default CardList;
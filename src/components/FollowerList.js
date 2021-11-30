import React from 'react';
import Follower from './Follower'

class FollowerList extends React.Component {



    render() {
        return (
            <div className="followers-container">
                <h2>Followers:</h2>
                {this.props.followers.map(item => (<Follower followers={item}/>
                ))}
            </div>
        )
    }
}

export default FollowerList; 
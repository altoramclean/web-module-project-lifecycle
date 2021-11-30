import React from 'react';

class Follower extends React.Component {
    render() {
        const { followers } = this.props;
        return (
            <div key={followers.id} className='follower-container'>
                <img width='100' src={followers.avatar_url}/>
                <p>{followers.login}</p>
            </div>
        )
    }
}

export default Follower;
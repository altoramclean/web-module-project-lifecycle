import React from 'react';

class User extends React.Component{

    render() {
        const { user } = this.props;
        return (
            <div key={user.id} className="profile">
                <img width='175' src={user.avatar_url}/>
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.html_url}</p>
                    <h3>Total Repositories: {user.public_repos}</h3>
                    <h3>Total Followers: {user.followers}</h3>
                </div>
            </div>
        )
    }
}
export default User;
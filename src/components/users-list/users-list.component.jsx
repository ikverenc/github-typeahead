//* Components
import UserCard from "../users-card/users-card";

//* Styles
import "./users-list.styles.css";
/**
 * @param  {} props
 * *Receives 1 argument
 * !FilteredGithubUsers - Update DOM based on this filtered array of Users
 */
const UsersList = (props) => {
    const { filteredGithubUsers } = props;

    return (
        <div className="github-accounts-container">
            {filteredGithubUsers &&
                filteredGithubUsers.map((user) => {
                    const { login, avatar_url, html_url } = user;
                    return (
                        <UserCard
                            key={login}
                            login={login}
                            imgURL={avatar_url}
                            repoURL={html_url}
                        />
                    );
                })}
        </div>
    );
};

export default UsersList;

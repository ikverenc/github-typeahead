//* Styles
import "./user-card.styles.css";

//* Icons
import GithubIcon from "../../assets/png/github-light.png";

/**
 * @param  {} props
 * * Receives 3 arguments
 * !login - username of User
 * !imgURL - profile picture of User
 * !repoURL - User github repository link
 */
const UserCard = (props) => {
    const { login, imgURL, repoURL } = props;
    /**
     * * Redirect on github repository after Click
     */
    const redirectHandler = () => {
        window.location.href = repoURL;
    };

    return (
        <div className="card-container" key={login} onClick={redirectHandler}>
            <img alt="github-user" src={imgURL} />
            <div className="user-name">
                <span>{login}</span>
                <img alt="github-user" src={GithubIcon} />
            </div>
        </div>
    );
};

export default UserCard;

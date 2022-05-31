import { useEffect, useState } from "react";

// * Components
import UsersList from "./components/users-list/users-list.component";
import UserSearchfield from "./components/users-searchfield/user-searchfield.component";

//* Styles
import Styles from "./App.module.css";

//* Icons
import GithubIcon from "./assets/png/github-light.png";

function App() {
    const [searchField, setSearchField] = useState(""); //* store value of input element
    const [githubUsers, setGithubUsers] = useState([]); //* store github users in array
    const [filteredGithubUsers, setfilteredGithubUsers] = useState(githubUsers); //* githubUsers filtered array based on UserSearchfield input

    /**
     * @param  {} (
     * * Fetch Users from github api
     */
    useEffect(() => {
        try {
            fetch("https://api.github.com/search/users?q=foo")
                .then((response) => response.json())
                .then((usersData) => setGithubUsers(usersData.items));
        } catch {
            alert("Unable to fetch data, Please refresh the page.");
        }
    }, []);
    /**
     * @param  {}
     * * Update filtered githubUsers array whenever githubUsers OR UsersSearchfield input changes
     */
    useEffect(() => {
        const newFilteredMonsters = githubUsers.filter((user) => {
            return user.login.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        });

        setfilteredGithubUsers(newFilteredMonsters);
    }, [githubUsers, searchField]);

    /**
     * @param  {} event
     * * Receives event from UserSearchfield Component
     */
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value;
        setSearchField(searchFieldString);
    };

    return (
        <div className={Styles.App}>
            <div className={Styles.header_container}>
                <div className={Styles.search_header_container}>
                    <h1>GitHub</h1>
                    <img alt="github-icon" src={GithubIcon} />
                </div>
                <UserSearchfield
                    value={searchField}
                    onSearchChangeHandler={onSearchChange}
                    placeholder="Search for user"
                />
            </div>
            <UsersList filteredGithubUsers={filteredGithubUsers} />
        </div>
    );
}

export default App;

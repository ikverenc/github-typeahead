//* Styles
import "./user-searchfield.styles.css";

/**
 * @param  {} props
 * * Receives 3 values
 * !value - Actual value of input
 * !onSearchChangeHandler - function which will filter githubUsers array based on input
 * !placeholder - self explanatory
 */
const UserSearchfield = (props) => {
    const { value, onSearchChangeHandler, placeholder } = props;

    return (
        <>
            <input
                className="user-searchfield-input"
                value={value}
                onChange={onSearchChangeHandler}
                placeholder={placeholder}
            />
        </>
    );
};

export default UserSearchfield;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    // container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 270,
    },
    menu: {
        width: 270,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    id="name-input"
                    label="Name"
                    className={classes.textField}
                    type="text"
                    placeholder="Name"
                    autoComplete="current-name"
                    margin="normal"
                /><br />
                <TextField
                    id="phone-input"
                    label="Phone"
                    className={classes.textField}
                    type="tel"
                    placeholder="Phone"
                    autoComplete="current-phone"
                    margin="normal"
                /><br />
                <TextField
                    id="email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    margin="normal"
                /><br />
                <TextField
                    id="textarea"
                    label="Message"
                    placeholder="Message"
                    multiline
                    className={classes.textField}
                    margin="normal"
                />



            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

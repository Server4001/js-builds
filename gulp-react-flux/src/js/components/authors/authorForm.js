"use strict";

const React = require('react');
const TextInput = require('../common/textInput');

class AuthorForm extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <form className="form-horizontal">

                <TextInput name="firstName"
                           label="First Name"
                           inputChange={this.props.inputChange}
                           placeholder="First Name"
                           value={this.props.author.firstName}
                           error={this.props.errors.firstName}/>

                <TextInput name="lastName"
                           label="Last Name"
                           inputChange={this.props.inputChange}
                           placeholder="Last Name"
                           value={this.props.author.lastName}
                           error={this.props.errors.lastName}/>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit"
                               value="Save"
                               className="btn btn-info btn-lg"
                               onClick={this.props.onSave}/>
                    </div>
                </div>
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    inputChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    errors: React.PropTypes.objectOf(React.PropTypes.string)
};

AuthorForm.defaultProps = {
    errors: {}
};

module.exports = AuthorForm;

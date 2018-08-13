"use strict";

const React = require('react');

class TextInput extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        let wrapperClass = 'form-group';

        if (this.props.error.length > 0) {
            wrapperClass += ' has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name} className="col-sm-2 control-label">{this.props.label}</label>
                <div className="col-sm-10">
                    <input type="text"
                           name={this.props.name}
                           id={this.props.name}
                           className="form-control"
                           placeholder={this.props.placeholder}
                           ref={this.props.name}
                           onChange={this.props.inputChange}
                           value={this.props.value}/>
                    <span className="help-block">{this.props.error}</span>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    inputChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
};

TextInput.defaultProps = {
    placeholder: undefined,
    value: undefined,
    error: ''
};

module.exports = TextInput;

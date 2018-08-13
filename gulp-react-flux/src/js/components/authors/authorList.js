"use strict";

const React = require('react');
const Link = require('react-router').Link;

class AuthorList extends React.Component {
    static createAuthorRow(author) {
        return (
            <tr key={author._id}>
                <td><Link to={"authors/" + author._id}>{author._id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    }

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div id="divAuthorList">
                <table className="table table-striped table-bordered table-hover table-responsive">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.authors.map(AuthorList.createAuthorRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.arrayOf(React.PropTypes.object)
};

AuthorList.defaultProps = {
    authors: []
};

module.exports = AuthorList;

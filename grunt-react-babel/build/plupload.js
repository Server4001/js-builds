'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlUpload = (function (_React$Component) {
    _inherits(PlUpload, _React$Component);

    function PlUpload(props) {
        _classCallCheck(this, PlUpload);

        _get(Object.getPrototypeOf(PlUpload.prototype), 'constructor', this).call(this, props);
        // Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
        this.state = {
            uploader: null
        };
    }

    // propTypes and defaultProps are defined as properties on the constructor, instead of in the class body

    _createClass(PlUpload, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("componentWillMount");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initUploader();

            this.state.uploader.init();

            this.state.uploader.bind('PostInit', this.postInit.bind(this));
            this.state.uploader.bind('FilesAdded', this.filesAdded.bind(this));
            this.state.uploader.bind('UploadProgress', this.uploadProgress.bind(this));
            this.state.uploader.bind('Error', this.uploadError.bind(this));
            this.state.uploader.bind('FileUploaded', this.fileUploaded.bind(this));
        }
    }, {
        key: 'postInit',
        value: function postInit() {
            document.getElementById('js-filelist').innerHTML = '';
        }
    }, {
        key: 'filesAdded',
        value: function filesAdded() {
            this.state.uploader.start();
        }
    }, {
        key: 'uploadProgress',
        value: function uploadProgress(up, file) {
            console.log('File: ' + file.id + '. Percent: ' + file.percent);
        }
    }, {
        key: 'fileUploaded',
        value: function fileUploaded(up, file, info) {
            console.log('FileUploaded');
        }
    }, {
        key: 'uploadError',
        value: function uploadError(up, err) {
            console.log("Error #" + err.code + ": " + err.message);
            if (err.code === '-600' || err.message.toLowerCase() === 'file size error.') {
                alert('Whoops! The max file size you can upload is: ' + maxFileSize);
            } else {
                alert('Whoops! An error occurred while trying to upload your file. Please try again.');
            }
        }
    }, {
        key: 'initUploader',
        value: function initUploader() {
            this.state.uploader = new plupload.Uploader({
                runtimes: 'html5,silverlight',
                browse_button: 'js-pickfiles',
                container: document.getElementById('uploader'),
                url: this.props.url,
                silverlight_xap_url: '/bower_components/plupload/ls/Moxie.xap',
                chunk_size: this.props.chunkSize,
                max_retries: this.props.maxRetries,
                multipart: true,
                multi_selection: false,
                filters: {
                    max_file_size: '999mb',
                    mime_types: [{ title: "Image files", extensions: "jpg,jpeg,gif,png,pdf,tif,tiff,ai,psd,eps,svg" }],
                    prevent_duplicates: false
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement("div", { id: "uploader" }, React.createElement("button", { id: "js-pickfiles" }, "Click Me"), React.createElement("div", { id: "js-filelist" }));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log('componentWillReceiveProps');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('componentWillUpdate');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('componentDidUpdate');
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            console.log('shouldComponentUpdate');
            return true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }]);

    return PlUpload;
})(React.Component);

PlUpload.propTypes = {
    chunkSize: React.PropTypes.number,
    maxRetries: React.PropTypes.number,
    url: React.PropTypes.string
};
PlUpload.defaultProps = {
    name: 'A Person'
};

// ES6 does not support mixins.

var oneMeg = 1048576;
var tenMeg = oneMeg + 10;
var halfMeg = oneMeg / 2;
var classSyntaxComponent = React.render(React.createElement(PlUpload, { url: "/upload_endpoint.php", chunkSize: halfMeg, maxRetries: 2 }), document.getElementById('content'));
//# sourceMappingURL=plupload.js.map

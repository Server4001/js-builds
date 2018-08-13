class PlUpload extends React.Component {
    constructor(props) {
        super(props);
        // Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
        this.state = {
            uploader: null
        };
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        this.initUploader();

        this.state.uploader.init();

        this.state.uploader.bind('PostInit', this.postInit.bind(this));
        this.state.uploader.bind('FilesAdded', this.filesAdded.bind(this));
        this.state.uploader.bind('UploadProgress', this.uploadProgress.bind(this));
        this.state.uploader.bind('Error', this.uploadError.bind(this));
        this.state.uploader.bind('FileUploaded', this.fileUploaded.bind(this));
    }

    postInit() {
        document.getElementById('js-filelist').innerHTML = '';
    }

    filesAdded() {
        this.state.uploader.start();
    }

    uploadProgress(up, file) {
        console.log(`File: ${file.id}. Percent: ${file.percent}`);
    }

    fileUploaded(up, file, info) {
        console.log('FileUploaded');
    }

    uploadError(up, err) {
        console.log("Error #" + err.code + ": " + err.message);
        if (err.code === '-600' || err.message.toLowerCase() === 'file size error.') {
            alert('Whoops! The max file size you can upload is: ' + maxFileSize);
        } else {
            alert('Whoops! An error occurred while trying to upload your file. Please try again.');
        }
    }

    initUploader() {
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
                mime_types: [
                    {title: "Image files", extensions: "jpg,jpeg,gif,png,pdf,tif,tiff,ai,psd,eps,svg"}
                ],
                prevent_duplicates: false
            }
        });
    }

    render() {
        return (
            <div id="uploader">
                <button id="js-pickfiles">Click Me</button>
                <div id="js-filelist"></div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

// propTypes and defaultProps are defined as properties on the constructor, instead of in the class body
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
var classSyntaxComponent = React.render(<PlUpload url="/upload_endpoint.php" chunkSize={halfMeg} maxRetries={2}/>, document.getElementById('content'));

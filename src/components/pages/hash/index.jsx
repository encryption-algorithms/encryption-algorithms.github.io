import React, { Component } from 'react'
import ValidateInput from '../../common/ValidateInput'
import ValidateTextArea from '../../common/ValidateTextArea'

class HashPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            encryptString: '',
            encryptedString: '',
            validationEnc: {
                string: "",
                isError: false,
            },
        }
        this.encrypt = this.encrypt.bind(this)
    }

    componentDidMount () {

    }

    encrypt (type, data) {
        if(this.encInput.state.inputString === ''){
            this.setState({validationEnc: {
                string: "Please enter this field!!!",
                isError: true,
            }})
        } else {
            const encrypted = require('crypto').createHash(type).update(data).digest('hex')
            this.setState({
                encryptedString: encrypted,
                validationEnc: {
                    string: "",
                    isError: false,
                }
            })
            this.endInput.state.inputString = encrypted;
        };

    }

    render () {
        return (
            // <!-- Content Wrapper -->
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="card shadow m-4 ">
                    <div className="card-header py-3 border-left-primary">
                        <h6 className="m-0 font-weight-bold text-primary">Hash Function</h6>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <div className="col-lg-12 p-0">
                                    <ValidateInput
                                        placeholder="Hash String"
                                        ref={(input) => {this.encInput = input ? input : undefined}}
                                        validation={this.state.validationEnc}
                                    />
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="mb-4 mr-4">
                                    <button
                                        className="btn btn-info  btn-icon-split"
                                        onClick={()=>this.encrypt("md5", this.encInput.state.inputString)}
                                    >
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">MD5</span>
                                    </button>
                                </div>
                                <div className="mb-4 mr-4">
                                    <button
                                        className="btn btn-info  btn-icon-split"
                                        onClick={()=>{this.encrypt("sha1", this.encInput.state.inputString)}}>
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">SHA-1</span>
                                    </button>
                                </div>
                                <div className="mb-4 mr-4">
                                    <button
                                        className="btn btn-info  btn-icon-split"
                                        onClick={()=>{this.encrypt("sha512", this.encInput.state.inputString)}}>
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">SHA2-512</span>
                                    </button>
                                </div>
                            </div>
                            <ValidateTextArea
                                placeholder="Encrypted"
                                ref={(input) => {this.endInput = input ? input : undefined}}
                                validation=""
                                value={this.state.encryptedString}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HashPage;

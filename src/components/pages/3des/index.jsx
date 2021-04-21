import React, { Component } from 'react'
import ValidateInput from '../../common/ValidateInput'
import ValidateTextArea from '../../common/ValidateTextArea'
// var CryptoJS = require("crypto-js");
const crypto = require("crypto");

class TripleDESPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            encryptString: '',
            decryptString: '',
            decryptedString: '',
            validationKey: {
                string: "",
                isError: false,
            },
            validationEnc: {
                string: "",
                isError: false,
            },
            validationDec: {
                string: "",
                isError: false,
            }
        }
        this.encrypt3DES = this.encrypt3DES.bind(this)
        this.decrypt3DES = this.decrypt3DES.bind(this)

    }

    componentDidMount () {

    }
    /**
     * Encrypt 3DES using Node.js's crypto module *
     * @param data A utf8 string
     * @param key Key would be hashed by md5 and shorten to maximum of 192 bits,
     * @returns {*} A base64 string
     */
    encrypt3DES(data, key) {
        if(this.keyInput.state.inputString === '') {
            if(this.encInput.state.inputString !== '')
                this.setState({
                    validationKey: {string: "Please enter this field!!!", isError: true},
                    validationEnc: {string: "", isError: false}
                })
            this.setState({validationKey: {string: "Please enter this field!!!", isError: true}})
        }
        if(this.encInput.state.inputString === '') {
            if(this.keyInput.state.inputString !== '')
                this.setState({
                    validationEnc: {string: "Please enter this field!!!", isError: true},
                    validationKey: {string: "", isError: false}
                })
            this.setState({validationEnc: {string: "Please enter this field!!!", isError: true}})
        }
        if(this.encInput.state.inputString !== '' && this.keyInput.state.inputString !== '') {
            const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
            const cipher = crypto.createCipheriv('des-ede3', md5Key, '');

            let encrypted = cipher.update(data, 'utf8', 'base64');
            encrypted += cipher.final('base64');
            this.setState({
                decryptString: encrypted,
                validationKey: {string: '', isError: false},
                validationEnc: {string: '', isError: false}
            });
            this.decInput.state.inputString = encrypted;
            return encrypted;
        }
    }
    /**
     * Decrypt 3DES using Node.js's crypto module
     * @param data a base64 string
     * @param key Key would be hashed by md5 and shorten to max 192 bits,
     * @returns {*} a utf8 string
     */
    decrypt3DES(data, key) {
        if (this.decInput.state.inputString === '') {
            this.setState({validationDec: {string: "Please encrypt before!!!", isError: true}})
        } else {
            const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
            const decipher = crypto.createDecipheriv('des-ede3', md5Key, '');

            let encrypted = decipher.update(data, 'base64', 'utf8');
            encrypted += decipher.final('utf8');
            this.setState({decryptedString: encrypted, validationDec: {string: '', isError: false}});
            return encrypted;
        }
    }

    render () {
        return(
            // <!-- Content Wrapper -->
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="card shadow m-4 ">
                    <div className="card-header py-3 border-left-primary">
                        <h6 className="m-0 font-weight-bold text-primary">3DES</h6>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <div className="col-lg-6 p-0">
                                    <button
                                        className="btn btn-primary btn-icon-split"
                                        onClick={() => this.encrypt3DES(this.encInput.state.inputString, this.keyInput.state.inputString)}
                                    >
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">Encrypt</span>
                                    </button>
                                </div>
                                <div className="col-lg-6 p-0">
                                    <ValidateInput
                                        placeholder="Key"
                                        ref={(input) => {this.keyInput = input ? input : undefined}}
                                        validation={this.state.validationKey}
                                    />
                                </div>
                            </div>
                            <ValidateTextArea
                                placeholder="Encrypt"
                                ref={(input) => {this.encInput = input ? input : undefined}}
                                validation={this.state.validationEnc}
                            />
                        </div>
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <button  className="btn btn-info btn-icon-split"
                                    onClick={()=>this.decrypt3DES(this.decInput.state.inputString, this.keyInput.state.inputString)}
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Decrypt</span>
                                </button>
                            </div>
                            <ValidateTextArea
                                ref={(input) => {this.decInput = input ? input : undefined}}
                                placeholder="Decrypt"
                                validation={this.state.validationDec}
                                value={this.state.decryptString}
                            />
                            <ValidateTextArea
                                ref={(input) => {this.dedInput = input ? input : undefined}}
                                placeholder="Decrypted"
                                validation=""
                                value={this.state.decryptedString}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TripleDESPage;

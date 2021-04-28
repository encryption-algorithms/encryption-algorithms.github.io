import React, { Component } from 'react'
import ValidateInput from '../../common/ValidateInput'
import ValidateTextArea from '../../common/ValidateTextArea'
// var CryptoJS = require("crypto-js");
var Vigenere = require("ciphervgnr");

class VigenerePage extends Component {
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

    }

    componentDidMount () {

    }

    encryptVigenere(encrypt, key) {

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
            try{
                var secretMessage = Vigenere(encrypt, key);

                this.setState({
                    decryptString: secretMessage,
                    validationKey: {string: '', isError: false},
                    validationEnc: {string: '', isError: false}
                });
                this.decInput.state.inputString = secretMessage;

                return
            } catch(err) {
                return
            }

        }

    }
    decryptVigenere(decrypt, key) {
        if (this.decInput.state.inputString === '') {
            this.setState({validationDec: {string: "Please encrypt before!!!", isError: true}})
        } else {
            try{
                var decodeMessage = Vigenere(decrypt, key, true);

                this.setState({decryptedString: decodeMessage, validationDec: {string: '', isError: false}});
                return
            } catch(err) {
                return
            }
        }
    }

    render () {
        return(
            // <!-- Content Wrapper -->
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="card shadow m-4 ">
                    <div className="card-header py-3 border-left-primary">
                        <h6 className="m-0 font-weight-bold text-primary">Vigenere</h6>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <div className="col-lg-6 p-0">
                                    <button
                                        className="btn btn-primary btn-icon-split"
                                        onClick={() => this.encryptVigenere(this.encInput.state.inputString, this.keyInput.state.inputString)}
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
                                    onClick={()=>this.decryptVigenere(this.decInput.state.inputString, this.keyInput.state.inputString)}
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


export default VigenerePage;

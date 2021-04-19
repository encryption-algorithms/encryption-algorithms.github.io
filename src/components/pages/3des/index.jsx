import React, { Component } from 'react'
// var CryptoJS = require("crypto-js");
const crypto = require("crypto");

class TripleDESPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            keyString: '',
            encryptString: '',
            decryptString: '',
            decryptedString: '',
        }
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
        const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
        const cipher = crypto.createCipheriv('des-ede3', md5Key, '');

        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        this.setState({decryptString: encrypted},()=>console.log(encrypted));
        return encrypted;
    }
    /**
     * Decrypt 3DES using Node.js's crypto module
     * @param data a base64 string
     * @param key Key would be hashed by md5 and shorten to max 192 bits,
     * @returns {*} a utf8 string
     */
    decrypt3DES(data, key) {
        const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
        const decipher = crypto.createDecipheriv('des-ede3', md5Key, '');

        let encrypted = decipher.update(data, 'base64', 'utf8');
        encrypted += decipher.final('utf8');
        this.setState({decryptedString: encrypted});
        return encrypted;
    }
    // encryptHandle () {
    //     let data = this.state.encryptString
    //     let key = this.state.keyString
    //     let IV = "12345678"
    //     let cipher = CryptoJS.TripleDES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    //     iv: CryptoJS.enc.Utf8.parse(IV),
    //     mode: CryptoJS.mode.CBC
    // });

    // console.log(cipher.toString())
    // }

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
                                <div className="col-lg-6">
                                    <div className="row">
                                        <button  className="btn btn-primary btn-icon-split"
                                            onClick={()=>this.encrypt3DES.bind(this)(this.state.encryptString, this.state.keyString)}
                                        >
                                            <span className="icon text-white-50">
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                            <span className="text">Encrypt</span>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <h5 className="col-lg-3 m-0 p-0 text-lg align-self-center text-nowrap">Key</h5>
                                        <input
                                            className="form-control form-control-md col-lg-9 m-0 p-0 pl-2"
                                            onChange={(e)=> this.setState({keyString: e.target.value})}
                                            value={this.state.keyString}
                                            required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <textarea className="form-control form-control-md mb-4" placeholder="Encrypt" required
                                onChange={(e)=> this.setState({encryptString: e.target.value})}
                            ></textarea>
                        </div>
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <button  className="btn btn-info btn-icon-split"
                                    onClick={()=>this.decrypt3DES.bind(this)(this.state.decryptString, this.state.keyString)}
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Decrypt</span>
                                </button>
                            </div>
                            <div className="row mb-4 m-0">
                                <textarea className="form-control form-control-md" placeholder="Decrypt"
                                    onChange={(e)=> this.setState({decryptString: e.target.value})}
                                    value={this.state.decryptString}
                                ></textarea>
                            </div>
                            <textarea className="form-control form-control-md" placeholder="Decrypted"
                                onChange={(e)=> this.setState({decryptedString: e.target.value})}
                                value={this.state.decryptedString}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TripleDESPage;

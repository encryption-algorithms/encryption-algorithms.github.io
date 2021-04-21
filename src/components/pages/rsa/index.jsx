import React, { Component } from 'react'
import ValidateTextArea from '../../common/ValidateTextArea'


const crypto = require("crypto")

class RSAPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            publicKey: "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzdxaei6bt/xIAhYsdFdW62CGTpRX+GXoZkzqvbf5oOxw4wKENjFX7LsqZXxdFfoRxEwH90zZHLHgsNFzXe3JqiRabIDcNZmKS2F0A7+Mwrx6K2fZ5b7E2fSLFbC7FsvL22mN0KNAp35tdADpl4lKqNFuF7NT22ZBp/X3ncod8cDvMb9tl0hiQ1hJv0H8My/31w+F+Cdat/9Ja5d1ztOOYIx1mZ2FD2m2M33/BgGY/BusUKqSk9W91Eh99+tHS5oTvE8CI8g7pvhQteqmVgBbJOa73eQhZfOQJ0aWQ5m2i0NUPcmwvGDzURXTKW+72UKDz671bE7YAch2H+U7UQeawwIDAQAB-----END PUBLIC KEY-----",
            privateKey: "-----BEGIN PRIVATE KEY-----MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDN3Fp6Lpu3/EgCFix0V1brYIZOlFf4ZehmTOq9t/mg7HDjAoQ2MVfsuyplfF0V+hHETAf3TNkcseCw0XNd7cmqJFpsgNw1mYpLYXQDv4zCvHorZ9nlvsTZ9IsVsLsWy8vbaY3Qo0Cnfm10AOmXiUqo0W4Xs1PbZkGn9fedyh3xwO8xv22XSGJDWEm/QfwzL/fXD4X4J1q3/0lrl3XO045gjHWZnYUPabYzff8GAZj8G6xQqpKT1b3USH3360dLmhO8TwIjyDum+FC16qZWAFsk5rvd5CFl85AnRpZDmbaLQ1Q9ybC8YPNRFdMpb7vZQoPPrvVsTtgByHYf5TtRB5rDAgMBAAECggEAUDPieCnCd1rtvwpehXElpwxzJxg6ccdaVMjwx7tuoRidHoRzeB2fUNbWvLVIGvDTjTPGAr5I9BoFHT5tARJMeGIzbISDxsosDBRKu88cCx6dRl3ukcjSLsxMh8XUDhyWLsSgAMIpxVfHUuOsHmLZ2I3Ho6o1KIxdVg/JSgtdwTqjz3w8jmGQ/NXgc7Ym/ys1fLG9L2nYdMzK/mRJf/BnXiCNE6/SYlZYO716oC688UJBWS3BqB9jaJyNpigX//ynJvU6xw8FhHt4fRStUmCCYAYhCQu3XgbtmxKisDGhdBVASG+DM+vVTh+sSvxkNrjJjF+m2tSg578A8C8Ls0r3uQKBgQDpO9e178NR0HHmvWbZR9+uPugf4UT9+U2/dEfJBHAOp2GRsIvXkFwbPHuSHkc0iEPwz+U8gPC8jInSslKOUDtaGtUaVzzWrxxh7DggWx4pYs3I0Ki8C+CRTTdOY9GAFa9jhIyRmf6v9QoAH/loGNV2qYFbb+HweD0PnxlWha1txQKBgQDh9IBBltW7T96foUmHOn+x6xlF5MNDHxLBY6bngxKvMTZoi5C6wmmCmasF45LWbkvUiMAsovYN5z4cJnKXWmRmCS8NXUucmUgdvsmCbiB62BmZvHaOffmnIdhcAjBebT/Bn5qMvKCNy3fQFSfuEw1eRRO2IofB4o7z7m794vo25wKBgEPowrQcrZhCwwdWGn4laUGI23l80+PHFRYru0MSYbZCkiwjZXRMeiUMBUbUPhNTocSaI7rsKCweF3sbpOH/BmkD6wySXgp8Th1M9EKnhS6zsAtKhfbK1oY4H2RZuAQ9TCYD0BIM7pU5GcJTjQD8ShsU269N8lFcERtdTbldjtOpAoGAF4YkADAa6lhjXg0loY2Gk9hdFji913QZuMaOLtYnkNO3zWSSWc85ut4Svxc1R1vOSz89eqgwo7vqbHXYQken4jOckXCgGZqftnERe6HJgeCTsby8PxOAdVUBuHqF3J7VH2xlY7eTo4+GVsSNFq0nHCRm6/RmW9ohdeXh6k7CLAsCgYBZe3RLWuffKxg+lZmv9tJDOO813QPLFeixrBYhKjGDcwjVYcCugGNDmyStM0/++uWddgMKavNALjpamu8KolDNivrjL1qaFHX9Bpi108T+dDn2WpX+vUP6hjA/U2wtTvUbJle1SsbZxRrV9gf5PAJqTrQY4u28ezjR3PCV+R4kdw==-----END PRIVATE KEY-----",
            decryptString: '',
            decryptedString: '',
            validationEnc: {
                string: '',
                isError: false,
            },
            validationDec: {
                string: '',
                isError: false,
            },
            buffer: {},
        }
    }

    componentDidMount () {

    }

    // The `generateKeyPairSync` method accepts two arguments:
    // 1. The type ok keys we want, which in this case is "rsa"
    // 2. An object with the properties of the key
    encryptRSA() {
        if(this.encInput.state.inputString === '') {
            this.setState({validationEnc: {string: "Please enter this field!!!", isError: true}})
        } else {
            try{
                const encrypted = crypto.publicEncrypt(
                    {
                        key: this.state.publicKey,
                        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                        oaepHash: "sha256",
                    },
                    //Convert data string to a buffer
                    Buffer.from(this.encInput.state.inputString)
                )
                this.decInput.state.inputString = encrypted.toString("base64")
                this.setState({
                    decryptString: encrypted.toString("base64"),
                    buffer: encrypted,
                    validationEnc: {string: "", isError: false}
                })
            } catch(err) {
                return
            }

        }

    }
    decryptRSA() {
        if(this.decInput.state.inputString === ''){
            this.setState({validationDec: {string: "Please encrypt before!!!", isError: true}})
        } else {
            try{
                const decrypted = crypto.privateDecrypt(
                    {
                        key: this.state.privateKey,
                        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                        oaepHash: "sha256",
                    },
                    this.state.buffer
                )
                this.dedInput.state.inputString = decrypted.toString()
                this.setState({decryptedString: decrypted.toString(), validationDec: {string: "", isError: false}})
            } catch(err) {
                return
            }

        }
    }

    render () {
        return (
            // <!-- Content Wrapper -->
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="card shadow m-4 ">
                    <div className="card-header py-3 border-left-primary">
                        <h6 className="m-0 font-weight-bold text-primary">RSA</h6>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <button
                                    className="btn btn-primary btn-icon-split"
                                    onClick={() => {this.encryptRSA()}}
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Encrypt</span>
                                </button>
                            </div>
                            <ValidateTextArea
                                placeholder="Encrypt"
                                ref={(input) => {this.encInput = input ? input : undefined}}
                                validation={this.state.validationEnc}
                            />
                            {/* <textarea
                                className="form-control form-control-md mb-4"
                                placeholder="Encrypt"
                                onChange={(e)=>{this.setState({encryptString: e.target.value})}}
                            ></textarea> */}
                        </div>
                        <div className="row m-0 flex-column p-0">
                            <div className="row m-0 mb-4">
                                <button
                                    className="btn btn-info btn-icon-split"
                                    onClick={() => {this.decryptRSA()}}
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Decrypt</span>
                                </button>
                            </div>
                            <ValidateTextArea
                                placeholder="Decrypt"
                                ref={(input) => {this.decInput = input ? input : undefined}}
                                validation={this.state.validationDec}
                                value={this.state.decryptString}
                            />
                            <ValidateTextArea
                                placeholder="Decrypted"
                                ref={(input) => {this.dedInput = input ? input : undefined}}
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

export default RSAPage

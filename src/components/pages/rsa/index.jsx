import React, { Component } from 'react'

class RSAPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount () {

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
                                <button className="btn btn-primary btn-icon-split" onClick={() => {alert('encrypt rsa')}}>
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Encrypt</span>
                                </button>
                            </div>
                            <textarea className="form-control form-control-md mb-4" placeholder="Encrypt"></textarea>
                        </div>
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <button className="btn btn-info btn-icon-split" onClick={() => {alert('decrypt rsa')}}>
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                    <span className="text">Decrypt</span>
                                </button>
                            </div>
                            <div className="row mb-4 m-0">
                                <textarea className="form-control form-control-md" placeholder="Decrypt"></textarea>
                            </div>
                            <textarea className="form-control form-control-md" placeholder="Decrypted"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RSAPage

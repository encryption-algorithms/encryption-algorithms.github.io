import React, { Component } from 'react'

class HashPage extends Component {
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
                        <h6 className="m-0 font-weight-bold text-primary">Hash Function</h6>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 flex-column ">
                            <div className="row m-0 mb-4">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <h5 className="col-lg-3 text-nowrap align-self-center text-lg">Hash String</h5>
                                        <input className="form-control form-control-md col-lg-9 m-0 p-0 pl-2" placeholder="Encrypt"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="mb-4 mr-4">
                                    <button  className="btn btn-info  btn-icon-split" onClick={()=>{alert('Encrypt MD5')}}>
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">MD5</span>
                                    </button>
                                </div>
                                <div className="mb-4 mr-4">
                                    <button className="btn btn-info  btn-icon-split" onClick={()=>{alert('Encrypt SHA-1')}}>
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">SHA-1</span>
                                    </button>
                                </div>
                                <div className="mb-4 mr-4">
                                    <button className="btn btn-info  btn-icon-split" onClick={()=>{alert('Encrypt SHA2-512')}}>
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                        <span className="text">SHA2-512</span>
                                    </button>
                                </div>
                            </div>

                            <textarea className="form-control form-control-md mb-4" placeholder="Encrypt"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HashPage;

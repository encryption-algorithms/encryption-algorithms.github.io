import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            sidebarToggle: false,
        }
    }

    componentDidMount () {

    }

    sidebarToggle() {
        this.setState({sidebarToggle: !this.state.sidebarToggle},console.log(this.state.sidebarToggle))
    }

    render () {
        let ulClass=["navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"]
        if(this.state.sidebarToggle) {
            ulClass.push('toggled');
        }
        return (
            <ul className={ulClass.join(' ')} id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Encryption Algorithms</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"/>

                {/* <!-- Nav Item - Dashboard --> */}
                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <Link to="/3des" className="nav-link" >
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>3DES</span>
                    </Link>
                </li>
                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <Link to="/rsa" className="nav-link" >
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>RSA</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/hash" className="nav-link" >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Hash Function</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"/>

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button
                        className="rounded-circle border-0"
                        id="sidebarToggle"
                        onClick={()=>{this.sidebarToggle(); console.log('click')}}
                    />
                </div>

            </ul>
        )
    }
}

export default SideBar;

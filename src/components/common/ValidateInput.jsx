import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    placeholder: props.placeholder,
    className: props.className ? props.className : undefined,
    value: props.value ? props.value : undefined
}))`
    border-color: ${(props) => (props.isError ? "#ffc107": "none")};
    box-shadow: ${(props) => (props.isError ? "1px 1px 3px #ffc107": undefined)};
`;

class ValidateInput extends Component{
    constructor (props) {
        super(props)

        this.state = {
            inputString: ''
        }
    }

    componentDidMount () {

    }

    render () {
        return (
            <div style={{ ...this.props.style, position: "relative", display: "block"}}>
                {this.props.validation.string
                ?
                <span style={{ position: "absolute", top: -20, left:0, color: '#ffc107'}}>
                    {this.props.validation.string}
                </span>
                : ''
                }
                <Input
                    placeholder={this.props.placeholder}
                    className="form-control form-control-md m-0 p-0 pl-2"
                    isError={this.props.validation.isError}
                    onChange={(e) => this.setState({inputString: e.target.value})}
                />
            </div>
        )
    }
}

export default ValidateInput;




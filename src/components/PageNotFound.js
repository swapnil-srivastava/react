import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class PageNotFound extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>PAGE NOT FOUND</h1>
                <Link to="/">go back to home</Link>
            </div>
        )
    }
}

PageNotFound.propTypes = {

}

export default PageNotFound;
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Posts from './Posts'
import Post from './Post'
import {getPosts} from './redux/reducers/post'
import { connect } from 'react-redux';

class PostsContainer extends Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <Switch>
                <Route to='/posts' component={Posts} exact />
                <Route to='/posts/:id' component={Post}  />
            </Switch>
        )

    }
}

export default connect(null, {getPosts})(PostsContainer)
import React from 'react'
import {connect} from 'react-redux'

function Posts(props) {
    return (
        <div>
            {props.posts.map( post =>{
                return(
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

let mapStateToProps = state => {
    let {data: posts} = state.posts

    return {posts}
}

export default connect(mapStateToProps)(Posts)
import { Component } from "react";
import axios from "axios"

class PostList extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts : response.data
            })
            console.log(response.data)
        })
    }


    render(){
        const { posts } = this.state
        return(
            <div>
                <h2>List of Posts</h2>
                {
                    posts.map( e => <div key={e.id}> {e.title} </div>)
                }
            </div>
        )
    }
}

export default PostList;
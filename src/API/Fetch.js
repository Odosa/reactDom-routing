import { Component } from "react";

class Fetch extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then( data => 
            this.setState ({
                posts : data
        }))
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

export default Fetch;
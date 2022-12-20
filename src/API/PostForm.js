import { Component } from "react";
import axios from "axios";


class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.setState)
        .then(response => {
                console.log(response)
        })
    }

    render(){
        const { userId, title, body} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>User Id:</label>
                        <input
                            type = 'text'
                            name='userId'
                            onChange={this.changeHandler}
                            value = {userId}
                        />
                    </div>

                    <div>
                        <label>Title:</label>
                        <input
                            type = 'text'
                            name='title'
                            onChange={this.changeHandler}
                            value = {title}
                        />
                    </div>

                    <div>
                        <label>Body:</label>
                        <input
                            type = 'text'
                            name='body'
                            onChange={this.changeHandler}
                            value = {body}
                        />
                    </div>

                    <button type="submit">Submit Now</button>
                </form>
            </div>
        )
    }

}

export default PostForm;
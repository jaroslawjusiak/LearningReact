import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import classes from './Posts.module.css';

class Posts extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        console.log('[Blog] componentDidMount');
        // axios({
        //     method: 'get',
        //     url: '/posts',
        //     timeout: 2000
        //     })
        axios.get('/posts')
            .then(response =>{
                console.log('[Blog] get all posts');
                console.log(response);
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post =>{
                    return{
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({posts: updatedPosts})
                
            })
            .catch(error => {
                console.log('[Blog] catching an error')
                console.log(error);
                //this.setState({error:true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render(){

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={()=> this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;
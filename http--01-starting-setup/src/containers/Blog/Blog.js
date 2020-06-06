import React, { Component } from 'react';
import Posts from './Posts/Posts';

import './Blog.css';
import {Route, Link} from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    

    

    
    
    render () {
        
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',     //hash pozwala skoczyć do elementu o zadanym id (#submit)
                                search: '?quick-submit=true'   //search pozwala dodawać elementy query do URLa (parametry)
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />



                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;
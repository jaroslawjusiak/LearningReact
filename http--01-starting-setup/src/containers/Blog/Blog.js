import React, { Component } from 'react';
import Posts from './Posts/Posts';

import './Blog.css';
import {Route, NavLink} from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    

    

    
    
    render () {
        
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                // activeClassName="my-active" //allows to set custom class name for an active link
                            >Home</NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',     //hash allows to jump to the element tagged by specific css id (#submit)
                                    search: '?quick-submit=true'   //search allows to add query parameters to the URL
                                }}
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >New Post</NavLink></li>
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
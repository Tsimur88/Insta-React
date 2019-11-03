import React, {Component} from 'react';
import InstaService from './services/instaService';

export default class Posts extends Component {
    InstaService = new InstaService ();
    state = {
        posts: [],
        error: false
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }
    componentDidMount () {
        this.updatePosts();
    }
    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        });
        console.log(this.state.posts);       
    }
    onError = (err) => {
        this.setState({
            error: true
        })
    } 

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;
        });  
    }

    render () {
        return (
            <div className="left">

            </div>
        )
    }
}
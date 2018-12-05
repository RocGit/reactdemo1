import React, { Component } from 'react';


// class LikeButton {
//     constructor() {
//         this.state = { isLiked: false }
//     }

//     changeLikeText() {
//         const likeText = this.el.querySelector('.like-text')
//         this.state.isLiked = !this.state.isLiked
//         likeText.innerHTML = this.state.isLiked ? 'Cancel' : 'Like'
//     }

//     render() {
//         this.el = createDOMFromString(`
//         <button class='like-btn'>
//             <span class='like-text'>Like</span>
//             <span>👍</span>
//         </button>
//         `)
//         this.el.addEventListener('click', this.changeLikeText.bind(this), false)

//         return this.el
//     }
// }

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }

    setState(state) {
        this.state = state
        this.el = this.render()
    }

    changeLikeText() {
        // const likeText = this.el.querySelector('.like-text')
        // this.state.isLiked = !this.state.isLiked
        // likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        this.el = `
        <button class='like-button'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
        `
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}

export default LikeButton
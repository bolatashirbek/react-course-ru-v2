import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
    state = {
        visible: false
    };
    handleReadMoreClck = (e) => {
        e.preventDefault();
        this.setState({visible: true})
    };

    render() {
        const {author, text, bigText} = this.props.data;
        const {visible} = this.state;
        return (
            <div className="article">
                <p className="newsAuthor">{author}:</p>
                <p className="newsText">{text}</p>
                {
                    !visible &&
                    <a onClick={this.handleReadMoreClck} href="#readmore" className="newsReadmore">Подробнее</a>
                }
                {
                    visible && <p className="newsBigText">{bigText}</p>
                }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

export {Article}
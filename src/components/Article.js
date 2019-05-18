import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

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
            <div>
                <Card border="secondary">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{author}:</Card.Subtitle>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        {
                            !visible &&
                            <Card.Link onClick={this.handleReadMoreClck} href="#readmore">Подробнее</Card.Link>
                        }
                        {
                            visible && <Card.Text>{bigText}</Card.Text>
                        }
                    </Card.Body>
                </Card>
                <br/>
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
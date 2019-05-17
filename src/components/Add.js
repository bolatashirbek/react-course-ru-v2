import React from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        agree: false
    };

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const {name, text, bigText} = this.state;
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText
        })
    };
    handleChange = (e) => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value})
    };
    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    };
    validate = () => {
        const {name, text, agree} = this.state;
        if (name.trim() && text.trim() && agree) {
            return true;
        }
        return false;
    };

    render() {
        const {name, text, bigText} = this.state;

        return (
            <Form>
                <Form.Group controlId="form.Author">
                    <Form.Label>Автор</Form.Label>
                    <Form.Control id="name" type="text" onChange={this.handleChange} placeholder="Введите ваше имя"
                                  value={name}/>
                </Form.Group>

                <Form.Group controlId="form.Title">
                    <Form.Label>Краткое содержание</Form.Label>
                    <Form.Control id="text" as="textarea" rows="3" onChange={this.handleChange} value={text}
                                  placeholder="Введите краткое содержание новости"/>
                </Form.Group>

                <Form.Group controlId="form.Text">
                    <Form.Label>Текст новости</Form.Label>
                    <Form.Control id="bigText" as="textarea" rows="3" onChange={this.handleChange} value={bigText}
                                  placeholder="Введите полный текст новости"/>
                </Form.Group>

                <Form.Group controlId="form.Checbox">
                    <Form.Check type="checkbox" onChange={this.handleCheckboxChange} label="Я согласен с правилами"/>
                </Form.Group>
                <Button variant="primary" size="lg" onClick={this.onBtnClickHandler} disabled={!this.validate()}>
                    Добавить новость
                </Button>
            </Form>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
};

export {Add}
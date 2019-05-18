import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Add} from "./components/Add";
import {News} from "./components/News";
import Card from "react-bootstrap/Card";

class App extends React.Component {
    state = {
        news: null,
        isLoading: false
    };

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;
        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach((item, index) => {
                if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                    item.bigText = 'СПАМ'
                }
            });

            return {
                filteredNews: nextFilteredNews,
            }
        }
        return null
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                    this.setState({isLoading: false, news: data})
                }, 1000)
            })
    }

    handleAddNews = (data) => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews})
    };

    render() {
        const {news, isLoading} = this.state;

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Card border="primary">
                                <Card.Body>
                                    <Card.Header>Добавить новости</Card.Header>
                                    <Add onAddNews={this.handleAddNews}/>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card border="primary">
                                <Card.Body>
                                    <Card.Header><h3>Новости</h3></Card.Header>
                                    {isLoading && <p>Загружаю...</p>}
                                    {Array.isArray(news) && <News data={news}/>}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>;
            </React.Fragment>
        )
    }
}

export default App;
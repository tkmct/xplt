import React, {Component} from 'react';
import { TitlePage, Introduction, End, Demo } from './src/pages';

const pages = {
  title: TitlePage,
  intro: Introduction,
  end: End,
  demo: Demo
}

type Props = {};
export default class App extends Component<Props> {
  state = {
    page: pages.title
  }

  handlePageChange = (nextPage) => {
    this.setState({
      page: pages[nextPage]
    })
  }

  render() {
    const Component = this.state.page
    return <Component handlePageChange={this.handlePageChange} />
  }
}

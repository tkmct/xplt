/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TitlePage, Introduction } from './src/pages';

const pages = {
  title: TitlePage,
  intro: Introduction
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

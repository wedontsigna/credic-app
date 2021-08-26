import React, { Component } from 'react';
import { Container, Accordion } from 'native-base';
import Header from 'native-base';
import Content from 'native-base';

const dataArray = [
  {
    title: 'First Element',
    content: 'Lorem ipsum dolor sit amet',
  },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  {
    title: 'Third Element',
    content: 'Lorem ipsum dolor sit amet',
  },
];
export class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    );
  }
}
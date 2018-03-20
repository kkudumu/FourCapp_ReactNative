import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon } from 'native-base';


class MediaList extends React.Component {
    render() {
        return (
          <Container>
            <Header style={{backgroundColor: '#1950e8'}}>
            <Text style={{marginTop:20, color: 'white', fontFamily: 'Avenir', fontSize:17}}>Media</Text>
            </Header>
            <Content>
              <List>
                <ListItem>
                  <Text>Videos</Text>
                </ListItem>
                <ListItem>
                  <Text>Podcasts</Text>
                </ListItem>
                <ListItem>
                  <Text>Webinars</Text>
                </ListItem>
                <ListItem>
                <Text>Articles</Text>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
      }

}



export default MediaList;
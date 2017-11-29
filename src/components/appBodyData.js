import React, {Component} from 'react';
import {Text} from 'react-native';
import { Content, Card, CardItem, Body, Left} from 'native-base';
export default class AppBodyData extends Component {

    render() {
        let articles = this.props.data.map(function (data) {
                return (
                  <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                {data.id}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                )
            });

        return (
            <Content>
                {articles}
            </Content>

        );

    }
}
module.export = AppBodyData;
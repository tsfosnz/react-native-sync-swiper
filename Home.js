import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';


export default class Home extends Component {

    constructor(props) {

        super(props);

        this.list = [];

        for (let i = 0; i < 1000; ++i) {

            this.list.push(i);

        }

    }

    componentWillUnmount() {

        console.log('home.unmount');
    }

    render() {

        console.log('home.render');

        const content = this.list.map((it, index) => {

            return <View key={index + ''}>
                <Text>{it + ''}</Text>
            </View>

        });

        return (

            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#008000'}}>

                    {content}

                </View>
            </ScrollView>

        );


    }

}
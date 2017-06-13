import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'module-swiper';

let styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

class SwiperApp extends Component {

    onScrollBy(type, value) {
        "use strict";

        console.log(type + ':' + value);
        //console.log(value);

        if (type === 'A') {

            this.refs['swiperB'] & this.refs['swiperB'].scrollTo(parseInt(value));
            this.refs['swiperC'] & this.refs['swiperC'].scrollTo(parseInt(value));
        }

    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} horizontal={false} onScrollBy={this.onScrollBy.bind(this, 'top')}>
                <View style={styles.slide1}>
                    <Swiper style={styles.wrapper} showsButtons={false} horizontal={true}
                            onScrollBy={this.onScrollBy.bind(this, 'A')}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>A0</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>A1</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>A2</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.slide2}>
                    <Swiper ref='swiperB' style={styles.wrapper} showsButtons={false} horizontal={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>B0</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>B1</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>B2</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.slide3}>
                    <Swiper ref='swiperC' style={styles.wrapper} showsButtons={false} horizontal={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>C0</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>C1</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>C2</Text>
                        </View>
                    </Swiper>
                </View>
            </Swiper>
        )
    }
}

AppRegistry.registerComponent('weishangjizhang', () => SwiperApp);
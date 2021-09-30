import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';

const ExploreScreen = () => {
    return <View>
        <ImageDetail title="UserImage" imageSource={require('../../assets/mcbsub.jpg')}/>
        <ImageDetail title="FollowerCount"/>
        <ImageDetail title="Description"/>
        <ImageDetail title="Posts"/>
        <ImageDetail title="Collabs"/>

    </View>
};

const styles = StyleSheet.create({});

export default ExploreScreen;
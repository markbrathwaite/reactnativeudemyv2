import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title})=> {
    return <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;

// Props - data fr parent to child
// State - system to track data tht change over time --> rerender 
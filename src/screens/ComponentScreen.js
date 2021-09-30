import React from 'react';
import { Text, Stylesheet } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>Collab Universe Sign-Up</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30

    }
});

export default ComponentsScreen;
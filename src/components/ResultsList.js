import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('ResultsShow', { id: item})}
            >
            <ResultsDetail result={item} />
            </TouchableOpacity>
                );
        }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);

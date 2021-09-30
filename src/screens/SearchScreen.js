import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });   
    };
    

    return (
        <>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} 
            title="Cost Effective" 
            />
            <ResultsList results={filterResultsByPrice('$$')}  
            title="Bit Pricier"
            />
            <ResultsList results={filterResultsByPrice('$$$')} 
            title="Big Spender"
            />
            </ScrollView>
        </>
    ); 
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        marginLeft: 15
    }

});

export default SearchScreen;


// fetch - built in function for making network requests
// error handling is a bit weird
// requires a lot of wrapper code to make it work 'sensibly'

// axios
// separate library for making requests
// ez to use, sensible defaults
// increases app size 

/*

SearchScreen function called
Nothing visible on screen
User enters a search term, submits, request to Yelp
Get search results, call setter
Updated state causes component to rerender
Now we have something to show user
*/

/*

SearchScreen func called
searchApi called right away
Make request to yelp API
Get search results, call setter
Updated state causes component to rerender

useState(() => {}) run arrow func every time component rendered

useState(() => {}, []) run arrow func only when 1st rend

useState(() => {}, [value]) run arrow func only when 1st rend
and when [value] changes

*/

/*
Opt #1 do grouping in SearchScreen
ResultsList / ResultsList / ResultsList

Do grouping in each ResultsList
*/
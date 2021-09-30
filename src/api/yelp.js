import axios from 'axios';

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization: 'Bearer NF6tyy6fSMgM5Es3M9bXII9BSYlramvSJHqZ97BEx8_NhOZh7BEa_0xUjF6gPOsRXwjlds1Vp3ME8NPhA8dXUD76yg2eSN5hn9XJ0Mv2WF7nf1A9N5oz0-T9xMMrYXYx'
    }
});




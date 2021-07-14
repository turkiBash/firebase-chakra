import axios from 'axios'


export const getData = async () => {
    

 
    const response = await axios.get('https://www.reddit.com/r/memes/.json')

    const result = response.data.data.children

    // console.log(result)

    return result
};

 
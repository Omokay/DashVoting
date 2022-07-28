import axios from 'axios';

// Change before migration to production
// export const baseUrl = 'http://192.19.8.91:2015';
// export const baseUrl = 'http://192.168.0.111:2015';
export const baseUrl = 'http://votingapi.test.payattitude.com';



export const httpGet = async (url) => {
    try {
        const { data } = await axios.get(`${url}`);
        return data;
    } catch (error) {
        return error;
    }
};


export const httpDelete = async (url) => {
    try {
        const { data } = await axios.delete(`${url}`);
        return data;
    } catch (error) {
        return error;
    }
};


export const httpPost = async (url, postBody) => {
    try {
        const { data } = await axios.post(url, postBody);
        return data;
    } catch (error) {
        return error;
    }
};

export const httpPut = async (url) => {
    try {
        const { data } = await axios.put(url);
        return data;
    } catch (error) {
        return error;
    }
};



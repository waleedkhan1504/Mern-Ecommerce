import axios from 'axios';
const params={
    headers:{
        Authorization: `bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
    
    }
}
export const fetchDataFromApi=async(url)=>{

    const {data}=await axios.get(process.env.REACT_APP_DEV_URL+url,
        params,
        );
    return data;

}

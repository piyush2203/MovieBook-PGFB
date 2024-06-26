export {removeperson} from '../reducers/personSlice';
import axios from "../../utils/Axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async(dispatch, getState) => {
    try{
        const details =await axios.get(`/person/${id}`);
        const externalid =await axios.get(`/person/${id}/external_ids`);
        const combinedCredits =await axios.get(`/person/${id}/combined_credits`);
        const tvcredits =await axios.get(`/person/${id}/tv_credits`);
        const moviecredit =await axios.get(`/person/${id}/movie_credits`);
        


        let theultimatedetails = {
            details: details.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            moviecredit: moviecredit.data,
            tvcredits: tvcredits.data
        }
        // console.log(theultimatedetails);

        dispatch(loadperson(theultimatedetails));

    }catch(error){
        console.log(error);
    }
}
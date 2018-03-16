import { createSelector } from 'reselect';
import _ from 'lodash';


const getAllImg = (state) => state.dogs.data&&state.dogs.data.data.message;
const getSelectedImg = (state) => state.dogs.dogsSelected;

const getImgs = (imgs, selectedImgID) =>{
    console.log("This is filter results:", _.map(selectedImgID, (item) => imgs[item]))
    return _.map(selectedImgID, (item) => imgs[item]);

};
export default  createSelector(
    getAllImg,
    getSelectedImg,
    getImgs
);

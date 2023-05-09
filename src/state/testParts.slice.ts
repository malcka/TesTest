import { ActionFromReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { remarks as dataRemarks, students as dataStudents, testParts as dataTestParts } from '../initialData';
import { Remark } from "../models/Remark";
import {TestPart} from '../models/testPart';
import { SelecedRemark } from "../models/SelectedRemark";

interface TestPartsSateIfc{
  testPartsData:TestPart[]
}

const testPartsSlice = createSlice({
    name: "testParts",
    initialState: <TestPartsSateIfc>{
      testPartsData:dataTestParts
    },  
    reducers: {
      reducePoints:(state, action)=>{
        console.log({state, action})
        // const testPart = state.testPartsData.find(tp=>tp.testPartId===action.payload.testPart);
        // console.log({testPart});
      }
    }
});

export default testPartsSlice.reducer;
export const {reducePoints } = testPartsSlice.actions;
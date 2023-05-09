import React, { useEffect } from 'react';
// import './App.css';
import SelectTest from './pages/selectTest/selectTest';
import SelectRemark from './pages/selectRemark/selectRemark';
import SelectedRemarksList from './pages/selectedRemarksList/selectedRemarksList';

import { remarks as dataRemarks, students as dataStudents, testParts as dataTestParts } from './initialData';
import { useState } from 'react';
import { Student } from './models/Student';
import { Container } from '@mui/material';
import { Remark } from './models/Remark';
import TestPart from './models/TestPart';
import { SelecedRemark } from './models/SelectedRemark';
import Box from '@mui/material/Box';
import SelectPoints from './pages/selectPoints/selectPoints';
import { SelectedRemarksDiv, SelectPointsDiv } from './pages/pagesStyle';
import Directions from './helpers/Directions';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  // const [remarks, setRemarks] = useState<Remark[]>([]);
  const [testParts, setTestParts] = useState<TestPart[]>([]);
  const [selectedRemarks, setSelectedRemarks] = useState<SelecedRemark[]>([]);

  useEffect(() => {
    // setRemarks(dataRemarks);
    setStudents(dataStudents);
    setTestParts(dataTestParts)
  }, [])

 return (
    <Directions>
      <Box sx={{ flexGrow: 1, maxWidth: 7520 }}>

        <Container fixed style={{ padding: "20px" }}>
          <SelectTest students={students}></SelectTest>
          <SelectRemark testParts={testParts} ></SelectRemark>
        </Container>
        <SelectedRemarksDiv>
          <SelectedRemarksList></SelectedRemarksList>
        </SelectedRemarksDiv>

        {/* <SelectPointsDiv>
         <SelectPoints type={1} partName1={"d"}>  </SelectPoints>  
      </SelectPointsDiv> */}
      </Box>
     </Directions>
  );
}

export default App;

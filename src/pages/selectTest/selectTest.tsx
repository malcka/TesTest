import React, { PropsWithChildren, useState } from 'react';
import { useEffect } from 'react';
import { Student } from '../../models/Student';
import { SelectTestData } from './SelectTestData';
import { TextField, Autocomplete, Grid, Typography } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import Grid from '@mui/material/Grid';
import { RootGrid } from '../pagesStyle';


function SelectTest(props: PropsWithChildren<SelectTestData>) {

    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        setStudents(props.students);
    }, [props.students])

    const [spacing, setSpacing] = React.useState(2);

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));
    // };

    return <RootGrid container spacing={2}>

        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={1} >
                <Grid item>

                    <TextField
                        id="combo-box-demo"
                        label="שם תלמידה"
                        style={{ width: 300 }}
                    />

                    {/* <Autocomplete
                        id="combo-box-demo"
                        options={students}
                        getOptionLabel={(option) => option.name + " " + option.familyName}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="שם תלמידה" variant="outlined" />}
                    /> */}
                </Grid>
                <Grid item >
                    {/* <Autocomplete
                        id="combo-box-demo"
                        options={students}
                        getOptionLabel={(option) => option.name + " " + option.familyName}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="שם כיתה" variant="outlined" />}
                    /> */}

                    <TextField
                        id="combo-box-demo"
                        label="שם כיתה"
                        style={{ width: 300 }}
                    />
                </Grid>
                {/* <Grid item  >
                    <Autocomplete
                        id="combo-box-demo"
                        options={students}
                        getOptionLabel={(option) => option.name + " " + option.familyName}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="שם שאלון" variant="outlined" />}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        id="combo-box-demo"
                        options={students}
                        getOptionLabel={(option) => option.name + " " + option.familyName}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="שם נושא" variant="outlined" />}
                    />
                </Grid> */}
            </Grid>
        </Grid>

        <Grid item xs={8}>
            <Typography align={"left"} variant="h5" gutterBottom>
                7777כותבת יקרה, 666666
                <br />
                נהנתי לקרוא את מאמרך.
                <br />
                סיכמתי לך כאן את רשימת &quot; סימני הדרך&quot;, קראי את ההערות, וקחי אותן לתשומת ליבך.
                <br />
                בהצלחה,
                <br />
                המורה בתיה אייזנשטיין
            </Typography>
        </Grid>
    </RootGrid>


}

export default SelectTest;
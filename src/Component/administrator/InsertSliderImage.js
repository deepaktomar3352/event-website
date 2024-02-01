import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Grid } from '@mui/material';
import { DropzoneArea } from 'react-mui-dropzone';
import Swal from 'sweetalert2';
import { postData } from '../../Services/ServerServices';

export default function InsertSliderImage() {
    const [value, setValue] = useState('')
    const [image, setImage]=useState('')
    const [event, setEvent] = useState('');
    const [isDropzoneOpen, setIsDropzoneOpen] = useState(false);

    const events = ['Technoparv', 'Vilay', 'Ibtida', 'Adeiu','Gallery'];

   

    const handleEventChange = (event) => {
        const setEventsValue = event.target.value
        setEvent(setEventsValue)
        setIsDropzoneOpen(true);
        if(setEventsValue === "Technoparv")
        {
            setValue('technoparvslider')
        }
        else  if(setEventsValue === "Vilay")
        {
            setValue('vilayslider')
        }
        else  if(setEventsValue === "Ibtida")
        {
            setValue('ibtidaslider')
        }
        else  if(setEventsValue === "Adeiu")
        {
            setValue('adeiuslider')
        }
        else  if(setEventsValue === "Gallery")
        {
            setValue('eventsgallerypic')
        }
        
    };

      

   
      
    const handleSubmit = async () => {

        

        var formdata = new FormData()
        image.map((item, i) => {
            formdata.append('picture' + i, item)
        })
        formdata.append('table',value)
        var result = await postData('events/uploadimg', formdata)
        if (result.status) {
            Swal.fire({
              icon: 'success',
              title: result.message
            })
      
          }
          else {
            Swal.fire({
              icon: 'error',
              title: result.message
            })
          }
        
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container spacing={2} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)', width: "50%" }}>
                <Grid item xs={12}>
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="event-label">Event</InputLabel>
                            <Select
                                labelId="event-label"
                                id="event-select"
                                value={event}
                                label="Event"
                                onChange={handleEventChange}
                            >
                                {events.map((event) => (
                                    <MenuItem key={event} value={event}>
                                        {event}
                                    </MenuItem>
                                ))}
                                </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                              <Grid item xs={12}>

                              {isDropzoneOpen?
                                <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    onChange={(files) => setImage(files)}
                                    filesLimit={6}
                                    
                                />:null
                              }
                            </Grid>
                            
                        
                        <Grid item xs={12}>
                            <Button fullWidth onClick={handleSubmit} variant='contained'>Submit</Button>
                        </Grid>
                </Grid>

        </div>
    );
}
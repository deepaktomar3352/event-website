import { Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import { DropzoneArea } from 'react-mui-dropzone'
import { postData } from '../../Services/ServerServices'
import { useNavigate } from 'react-router-dom'
import './slider.css'
import Swal from 'sweetalert2'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
export default function SliderUpdate() {
    const [image, setImage] = useState([])

    var navigate = useNavigate()

    const clear = () => {
        setImage([])
    }
    const handleSlider = async () => {
        var formdata = new FormData()
        image.map((item, i) => {
            formdata.append('picture' + i, item)
        })
        var result = await postData('events/upload', formdata)
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
        clear()
    }
    return (
        <div>
            <div className='main'>
                <div className='box' style={{ maxWidth: '800px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ margin: 'auto', fontFamily: 'sans-serif', fontSize: '30px', fontWeight: 'bolder', letterSpacing: 1 }}>Slider Update</div><div className='icon' style={{ cursor: 'pointer' }} onClick={() =>navigate('/image')}><FormatListBulletedIcon /></div>
                        </Grid>
                        <Grid item xs={12}>
                            <DropzoneArea
                                acceptedFiles={['image/*']}
                                dropzoneText={"Drag and drop an image here or click"}
                                filesLimit={5}
                                onChange={(files) => setImage(files)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth onClick={handleSlider} variant='contained'>submit</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth onClick={clear} variant='contained'>Reset</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

export default function DatePicker01() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const m = moment(selectedDate).format('MM/DD/YYYY')
  console.log(m);
  // alert(selectedDate)

  const minAge = 18;
  const maxAge = 65;
  const minDate = moment().subtract(maxAge, 'years').add(1, 'days');
  const maxDate = moment().subtract(minAge, 'years');

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Basic date picker"
            value={selectedDate}
            onChange={handleDateChange}
            inputFormat="MM/DD/YYYY"
            minDate={minDate}
            maxDate={maxDate}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

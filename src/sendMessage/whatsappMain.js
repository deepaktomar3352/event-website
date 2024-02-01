import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

export default function WhatsappMain() {
    const [number, setNumber] = useState('')
    const headers = {
        'Authorization': `Bearer EAACS7RgnB6UBACGT2lw9AMoey7q2VqdsJZBPwKvrddBzy56ISZAxea13vfJZBw1XG1ZCoM3AJJDHHdzuXZBZCpe7y6X7wnfpBNRHnPxSugBuPdZBPTsjRqm4RwO3kG1sQe0gwAhWvL3gAblW3TzDAGnu9FFDTsRfI0CzNFcGiasEo8SQl6QkpBwxhh7djETFnUrpbKnSXWkbQZDZD`,
        'Accept': 'application/json',
    }
   

    const sendMsg = () => {
        console.log("Number Is", number)
        const body = {
            "messaging_product": "whatsapp",
            "to": "91"+number,
            "type": "template",
            "template": {
                "name": "hello_world",
                "language":
                    { "code": "en_US" }
            }
        }
        //axios.post("https://graph.facebook.com/v16.0/104837465905547/messages", body, headers)
        axios.post(`https://graph.facebook.com/v16.0/104837465905547/messages`,body,headers)
            .then((res) => (
                console.log("Message Send Success", res)
            ))
            .catch((err) => (
                console.log("Error While Sending", err.response.data)
            ))
    
    }
    
    return (
        <>
            <TextField onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number" label="Number" />
            <Button variant="contained" onClick={sendMsg}>Send Message</Button>

        </>
    )
}
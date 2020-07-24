import React from 'react'
import authentication from '../../Authentication/Authentication'
import './Landing.css'
import { Button, TextField } from '@material-ui/core'
export default function Landing(props) {
    const handleLoginClick = () => {
        authentication.login(() => {
            props.history.push('/home')
        }, () => {
            console.log("Error")
        })
    }
    const handleNewResumeClick = () => {
        console.log("New resume click")
    }
    return (
        <div>
            <div className="container">
                <div className="new-user">
                    <Button onClick={handleNewResumeClick}
                        variant="contained"
                        color="primary">Create new Resume
                </Button>
                </div>
                <div className="existing-user">
                    <div>
                        <TextField
                            id="access-code"
                            label="Access Code"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Button onClick={handleLoginClick}
                            variant="contained"
                            color="secondary">Login
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

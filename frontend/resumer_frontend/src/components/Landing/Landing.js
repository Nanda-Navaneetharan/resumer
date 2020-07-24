import React from 'react'
import authentication from '../../Authentication/Authentication'
import { Button } from '@material-ui/core'
export default function Landing(props) {
    const handleLoginClick = () => {
        authentication.login(() => {
            props.history.push('/home')
        }, () => {
            console.log("Errror")
        })
    }
    return (
        <div>
            <Button onClick={handleLoginClick}>Login</Button>
        </div>
    )
}

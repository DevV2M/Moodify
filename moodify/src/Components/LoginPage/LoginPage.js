import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() { 
        return ( 
            <div> 
                <Grid container>
                    <Grid item xs = {3}>
                        Hello
                    </Grid>
                    <Grid item xs = {6}>
                        My
                    </Grid>
                    <Grid item xs = {3}>
                        Dear
                    </Grid>
                </Grid>
            </div> 
         );
    }
}
 
export default LoginPage; 
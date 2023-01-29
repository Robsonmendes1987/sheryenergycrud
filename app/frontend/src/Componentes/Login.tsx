import { Avatar, Box, Button, FormControl, Grid, TextField } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/userBackApi'

export function Login() {
    const [state, setState] = useState('')

     const getApi = async () => {
        const result = await api.get('/login')
        console.log('LOGIN', result)
        setState(result.data.result)

    }

    return(
        <Box
        sx={{ width: "100%" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80ch",
            }}
            >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <FormControl sx={{ width: "100ch", height: "35ch" }}>
              <form>
                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    
                  }}
                >
              <Avatar src="/broken-image.jpg" />
              </div>

            <div
             style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    
                  }}
            >Please enter your Username and PassWord</div>
                <div>
                <Grid
                className="form-control"
                  xs={0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    sx={{ width: "50ch" }}
                    id="standard-name"
                    label="UsarName"
                    onChange={(e) => handlechange(e)}
                    value={state}
                    variant="filled"
                    // {...register("name")}
                    type="text"
                    
                  />
                </Grid>
  
                <Grid
                className="form-control"
                  xs={0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    sx={{ width: "50ch" }}
                    id="outlined-telefone"
                    label="PassWord"
                    onChange={(e) => handlechange(e)}
                    value={state}
                    variant="filled"
                    // {...register("telefone")}
                    type="number"
                  />
                </Grid>
                <div 
                 style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                    <Link  to={'/usuarios'}>
                <Button variant="contained" type="submit" sx={{ width: "30%" }}>
                Enter
              </Button>
              </Link>
              </div>
                </div>
              </form>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    )
}
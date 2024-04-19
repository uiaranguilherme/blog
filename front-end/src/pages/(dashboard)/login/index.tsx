import { Button, Grid, TextField } from "@mui/material"
import { WhapperPageLogin, ContainerCardLogin } from "./styles"
import { Card } from "../../../components"

export default () => {
    return(
        <WhapperPageLogin>
            <Card>
                <ContainerCardLogin container rowSpacing={2}>
                    <Grid width="100%" display="flex" justifyContent="center" item xs={12}>
                        <img src="/imgs/logo.svg" height="70px" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            label="Login*"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            label="Senha*"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button disableElevation fullWidth variant="contained">Login</Button>
                    </Grid>
                </ContainerCardLogin>
            </Card>
        </WhapperPageLogin>
    )
}
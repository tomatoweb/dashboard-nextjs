"use client"
import styled from '@emotion/styled'
import { styled as Styled } from '@mui/material/styles'
import { Box, Button, Typography } from '@mui/material'
import AirBnbLogo from '@/svg/airbnb-logo'

/* 
*     EMOTION 
 */
const MyBox = styled.div`
    height: 250px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--mui-palette-primary-contrastText);
    background-color: var(--mui-palette-primary-light);
    border: solid 3px;
    border-radius: 3px;
    border-color: var(--mui-palette-primary-dark);
`

/* 
*     MUI 
 */
const MyboxParent = Styled(Box)(({ theme }) => ({
    '& .MuiChildBox': { // children styling
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        fontSize: theme.typography.body1.fontSize,
        border: '3px solid var(--mui-palette-primary-dark)',
        borderRadius: 'var(--mui-shape-borderRadius)',
        backgroundColor: 'var(--mui-palette-primary-light)',
        color: theme.palette.common.white
    }
}))



const page = () => {
  return (
    <>
        <header>
            <AirBnbLogo className="w-4 h-4 text-white" />
        </header>
        <MyboxParent
            sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(4, 1fr)',
                marginTop: 4,
                marginLeft: 4,
                marginRight: 4,
            }}
    >
            <Box
                height={250}
                alignItems={'center'}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                color='primary.contrastText'
                bgcolor="primary.light"
                border="solid 3px"
                borderRadius={1}
                borderColor="primary.dark"
            >            
                <Typography variant="body1" display="block">MUI material Box</Typography>
                <Typography variant="body1" display="block">method 'system props'</Typography>            
            </Box>
            <Box
                sx={{
                    height: 250,
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    backgroundColor: "primary.light",
                    border: 'solid 3px',
                    borderRadius: 1,
                    borderColor: 'primary.dark'
                }}
            >
                <Typography variant="body1" display="block">MUI material Box</Typography>
                <Typography variant="body1" display="block">method 'sx props'</Typography>            
            </Box>
            <MyBox>
                <Typography variant="body1" display="block">MUI material Box</Typography>
                <Typography variant="body1" display="block">method "Emotion styled"</Typography> 
            </MyBox>
            <Box className="MuiChildBox">
                <Typography variant="body1" display="block">MUI material Box</Typography>
                <Typography variant="body1" display="block">method "MUI styled"</Typography>
            </Box>
        </MyboxParent>
        <Button variant='outlined' className='m-4'>clack</Button>
    </>
  )
}

export default page

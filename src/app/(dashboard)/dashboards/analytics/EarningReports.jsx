import OptionMenu from "@/components/option-menu"
import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material"


const EarningReports = () => {
  return (
    <Card>
        <CardHeader 
            title="Earning Reports"
            subheader='Weekly Earnings Overview'
            action={ <OptionMenu options={['Last Week', 'Last Month', 'Last Year']} /> }
            className="pbe-0"  
        />
        <CardContent>
            <div className="flex items-center gap-2.5">
                <Typography variant='h2' color='error.light'>$468</Typography>
                <Chip size='small' variant='tonal' color='success' label='+4.2%' />
            </div>
            <Typography variant='body2' className='text-balance'>
              You informed of this week compared to last week
            </Typography>
        </CardContent>
    </Card>
  )
}

export default EarningReports
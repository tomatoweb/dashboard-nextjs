import { Grid } from "@mui/material"
import WebsiteAnalyticsSlider from './WebsiteAnalyticsSlider'
import LineAreaDailySalesChart from './LineAreaDailySalesChart'
import SalesOverview from "./SalesOverview"
import EarningReports from "./EarningReports"

const DashboardAnalytics = async () => {

  const getData = async () => {

    // Vars
    const res = await fetch(`${process.env.API_URL}/pages/profile`)

    if (!res.ok) {
      throw new Error('Failed to fetch profileData')
    }

    return res.json()
  }

  const data = await getData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <WebsiteAnalyticsSlider />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LineAreaDailySalesChart />
      </Grid>      
      <Grid item xs={12} sm={6} lg={3}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <EarningReports />
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      </Grid>
      <Grid item xs={12} lg={8}>
      </Grid>
    </Grid>
  )

}

export default DashboardAnalytics
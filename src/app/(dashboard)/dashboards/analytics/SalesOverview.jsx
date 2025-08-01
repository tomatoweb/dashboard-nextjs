'use client'

import CustomAvatar from "@/components/mui/Avatar"
import { Card, CardContent, Divider, LinearProgress, Typography } from "@mui/material"

const SalesOverview = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start justify-between gap-3">
          <div>
            <Typography>Sales Overview</Typography>
            <Typography variant="h4">$42,5k</Typography>
          </div>
          <Typography color='success.main' className="font-medium">
            +18.2%
          </Typography>
        </div>
        <div className="flex items-center justify-between mlb-6">
          <div className="flex items-end flex-col plb-2">
            <div className="flex items-center mbe-2 gap-x-[6px]">
              <div className="text-[var(--mui-palette-info-main)] bg-[var(--mui-palette-info-lightOpacity)] w-[25px] h-[25px] text-center rounded-md">
                <i className='tabler-shopping-cart text-lg align-middle' />
              </div>
              <Typography>Order</Typography>
            </div>
            <Typography variant='h5'>62.2%</Typography>
            <Typography variant='body2' color='text.disabled'>
              6,440
            </Typography>
          </div>
          <Divider flexItem orientation="vertical">
            <div className='flex text-xs text-textDisabled bg-actionHover w-[25px] h-[25px] text-center rounded-full justify-center items-center'>
              VS
            </div>
          </Divider>
          <div className='flex items-end flex-col plb-2'>
            <div className='flex items-center mbe-2 gap-x-[6px]'>
              <Typography color='text.secondary' className='m'>
                Visits
              </Typography>
              <CustomAvatar skin='light' variant='rounded' color='primary' size={24}>
                <i className='tabler-link text-lg' />
              </CustomAvatar>
            </div>
            <Typography variant='h5'>25.5%</Typography>
            <Typography variant='body2' color='text.disabled'>
              12,749
            </Typography>
          </div>
        </div>
        <LinearProgress value={75} color='info' variant='determinate' className='bs-2.5' />
      </CardContent>
    </Card>
  )
}

export default SalesOverview
'use client'
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { styled, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import TextField  from '@mui/material/TextField'
import { useRouter, useSearchParams } from 'next/navigation'
import Logo from "@/components/layouts/Logo"
import { Alert, Typography } from "@mui/material"
import themeConfig from "@/configs/themeConfig"

const LoginIllustration = styled('img')(({theme}) => ({
    maxBlockSize: 680,
    [theme.breakpoints.down('xl')]: { // 1536px
        maxBlockSize: 550
    },
    [theme.breakpoints.down('lg')]: { // 1200px
        maxBlockSize: 450
    }
}))

const Login = () => {

    const theme = useTheme()
    const searchParams = useSearchParams()
    const router = useRouter()

    const { register, handleSubmit, control, formState } = useForm({
        defaultValues: {
            email: 'admin@dotdev.be',
            password: 'admin'
        }
    })

    const onSubmit = async data => {
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password, 
            redirect: false
        })
        if (res && res.ok && res.error === null) {
            const redirectURL = searchParams.get('redirectTo') ?? '/'
            router.push(redirectURL)            
        }
    }

    return (
        <div className='flex bs-full justify-center'>
            <div className="flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden border-ie">
                <LoginIllustration src="/images/illustrations/auth/v2-login-dark.png" alt="character-illustration" />
                <img className="absolute bottom-0 max-h-[355px] is-full -z-10" src="/images/pages/auth-mask-dark.png" alt="mask" />                           
            </div>
            <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
                <div className='absolute block-start-5 sm:block-start-[25px] inline-start-6 sm:inline-start-[28px]'>
                <Logo />
                </div>
                <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0'>
                    <div className="flex flex-col gap-3">
                      <Typography variant='h4'>{`Welcome to ${themeConfig.templateName} dashboard! 👋👋🏻👋🏾`}</Typography>
                      <Typography>Please sign-in to your account and start the adventure</Typography>
                      <Alert icon={false} className='bg-[var(--mui-palette-primary-lightOpacity)]'>
                        <Typography variant="body2">
                        Email: admin@dotdev.be / Pass: admin
                        </Typography>
                      </Alert>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>                            
                            <div>
                                {formState.email && <span style={{ color: 'red' }}>minimum 2 chars</span>}<br/>
                                <TextField className="flex" name='email' label='email' placeholder="email" 
                                  { ...register('email', {required: true, minLength: 2})} />
                            </div>
                            <div>
                                <TextField className="flex" name='password' label='Password' type="password"
                                  {...register('password', {})} />
                            </div>
                            <div className="flex">
                                <Button fullWidth variant='contained' type="submit">Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login 
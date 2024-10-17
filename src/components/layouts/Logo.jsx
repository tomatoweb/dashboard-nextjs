import Link from 'next/link'
import DotdevLogo from '@/components/svg/Logo'
import styled from '@emotion/styled'
import themeConfig from '@/configs/themeConfig'


const LogoText = styled.span`
    font-size: 1.375rem;
    line-height: 1.09091;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: var(--mui-palette-text-primary);
    margin-left: 4px
`

const Logo = () => {
    return (
        <Link href="/home" className='flex items-center'>
            <DotdevLogo />
            <LogoText>
                {themeConfig.templateName}
            </LogoText>
        </Link>    
    )
}

export default Logo
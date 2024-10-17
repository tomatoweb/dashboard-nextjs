

const ModeSwitcher = () => {
    return (
        <div className="float-right">
            <button className='text-textPrimary'>
                <i className='tabler-moon-stars text-[40px] mx-6 text-textPrimary' />
            </button>
           
            <i className='tabler-sun text-[40px] mx-6' />
            <i className='tabler-device-laptop text-[40px] mx-6' />

            <i className='tabler-michelin-bib-gourmand text-[60px] text-violet-600 mr-14'/>
            <i className='devicon-nextjs text-[60px] mr-14'/>
            <i className='devicon-react text-[60px]'/> 
        </div>
    )
}

export default ModeSwitcher
import bgdesktop from '../../images/pattern-bg-desktop.png'
import bgmobile from '../../images/pattern-bg-mobile.png'
import arrow from '../../images/icon-arrow.svg'
import Result from './Result'

function Searchbar(){
    return (
        <>
            <div className="grid place-items-center font-rubik">
                <div className="w-full max-w-[1440px]">
                    <img src={bgdesktop} className='hidden sm:block absolute z-1' alt="bg-desktop" />
                    <img src={bgmobile} className='sm:hidden absolute z-1 w-full' alt="bg-desktop" />
                    <div className='relative z-2 flex flex-col gap-6 p-5.5 items-center sm:gap-12'>   
                        <div className='flex flex-col items-center gap-5 w-full sm:gap-3.5'>
                            <h1 className='font-semibold text-white text-[26px] sm:text-[32px]'>IP Address Tracker</h1>
                            <div className='h-[58px] flex w-full mt-2 sm:max-w-[500px]'>
                                <input type="text" className='w-full pr-5 pl-5 bg-white rounded-l-[.90rem] h-full text-lg'  placeholder='Search for any IP address or domain' />
                                <button type='button' className=' pr-5  pl-5 bg-black rounded-r-[.95rem] h-full max-w-[56px] w-full flex items-center justify-center'><img src={arrow}  alt="arrow-icon" /></button>
                            </div>
                        </div>
                        <Result />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar;
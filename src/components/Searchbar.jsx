import bgdesktop from '../../images/pattern-bg-desktop.png'
import bgmobile from '../../images/pattern-bg-mobile.png'

function Searchbar(){
    return (
        <>
            <div className="grid place-items-center">
                <div className="w-full max-w-[1440px]">
                    <img src={bgdesktop} className='hidden min-[376px]:block absolute z-1' alt="bg-desktop" />
                    <img src={bgmobile} className='min-[376px]:hidden absolute z-1' alt="bg-desktop" />
                    <div className='relative flex flex-col items-center z-2 p-5 gap-5'>
                        <h1 className='font-medium text-white text-[27px]'>IP Address Tracker</h1>
                        <input type="text" className='pt-3 pr-5 pb-3 pl-5 bg-white rounded-xl' placeholder='Search for any IP address or domain' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar;



function Result({ ipData }){

    


    return(
        <>
            {ipData && <div className='rounded-[.90rem] bg-white flex flex-col items-center p-6 gap-5 text-center outline sm:flex-row sm:items-start sm:text-start sm:place-content-between sm:gap-16 sm:max-w-[1100px] w-full sm:p-9'>
                <div className="flex flex-col gap-1 sm:gap-2.5 ">
                    <div className='text-[10px] font-extrabold text-gray400 tracking-widest sm:text-[12px]'>IP ADDRESS</div>
                    <div className="font-bold text-xl sm:text-[25px]">{ipData.ip}</div>
                </div>
                <div className="sm:flex sm:flex-col sm:flex-row sm:items-center">
                    <div className="hidden sm:block sm:border-l-1 sm:h-[80px] sm:border-gray400"></div>
                    <div className="flex flex-col sm:pl-8 gap-1 sm:gap-2.5 ">
                        <div className='text-[10px] font-extrabold text-gray400 tracking-widest sm:text-[12px] '>LOCATION</div>
                        <div className="font-bold text-xl sm:text-[25px]">{ipData.location.region}, {ipData.location.country}</div>
                    </div>
                </div>
                <div className="sm:flex sm:flex-col sm:flex-row sm:items-center">
                    <div className="hidden sm:block sm:border-l-1 sm:h-[80px] sm:border-gray400"></div>
                    <div className="flex flex-col sm:pl-8 gap-1 sm:gap-2.5 ">
                        <div className='text-[10px] font-extrabold text-gray400 tracking-widest sm:text-[12px]'>TIMEZONE</div>
                        <div className="font-bold text-xl sm:text-[25px]">{ipData.location.timezone}</div>
                    </div>
                </div>
                <div className="sm:flex sm:flex-col sm:flex-row sm:items-center">
                    <div className="hidden sm:block sm:border-l-1 sm:h-[80px] sm:border-gray400"></div>
                    <div className="flex flex-col sm:pl-8 gap-1 sm:gap-2.5 ">    
                        <div className='text-[10px] font-extrabold text-gray400 tracking-widest sm:text-[12px]'>ISP</div>
                        <div className="font-bold text-xl sm:text-[25px]">{ipData.isp}</div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Result;
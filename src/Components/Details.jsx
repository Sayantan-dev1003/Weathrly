import Cloudy from "../assets/images/Cloudy.png"

const Details = () => {
  return (
    <div className="w-3/5 bg-white mobile:w-full tablet:w-full laptop:w-3/5 my-3 p-4 rounded-xl poppins">
        <div className="w-full flex justify-between">
            <span className="text-sm mobile:text-xs tablet:text-xs laptop:text-sm text-gray-400 font-medium">Current Weather</span>
            <span className="text-sm mobile:text-xs tablet:text-xs laptop:text-sm text-gray-400">Celsius</span>
        </div>
        <span className="font-semibold text-base mobile:text-sm tablet:text-base laptop:text-base">12:00 AM</span>
        <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center">
                <img src={Cloudy} className="w-[4rem] h-auto" alt="" />
                <div className="flex">
                    <span className="text-3xl font-semibold">8</span>
                    <span className="text-xs text-gray-400 font-semibold">&deg;C</span>
                </div>
            </div>
            <div className="flex flex-col justify-between text-xs text-gray-500">
                <span className="font-medium">Cloudy</span>
                <span>Feels Like 10&deg;</span>
            </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">There will be mostly cloudy skies. Chance of rain</p>
    </div>
  )
}

export default Details
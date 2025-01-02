import { faArrowsUpDown, faDroplet, faEye, faSun, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Parameters = () => {
  return (
    <div className="w-3/5 mobile:w-full tablet:w-full laptop:w-3/5 my-3 rounded-xl poppins flex flex-wrap gap-4">
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faSun} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">UV index</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">Moderate</span>
      </div>
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faDroplet} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Humidity</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">34%</span>
      </div>
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faWind} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Wind</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">21km/h</span>
      </div>
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faTemperatureLow} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Dew Point</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">4&deg;</span>
      </div>
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faArrowsUpDown} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Pressure</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">1018.0 mb</span>
      </div>
      <div className="w-[18.5vw] mobile:w-[44vw] laptop:w-[18.5vw] tablet:w-[29.7vw] bg-white p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faEye} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Visibility</span>
        </div>
        <span className="text-base font-medium mobile:text-sm">4.51 km</span>
      </div>
    </div>
  )
}

export default Parameters
import { faBars, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="w-full bg-white shadow-md mobile:shadow-none laptop:shadow-md tablet:shadow-md px-6 py-2 mobile:px-0 mobile:py-0 tablet:px-4 tablet:py-2 laptop:px-6 laptop:py-2 flex items-center justify-between gap-4 mobile:gap-3 rounded-2xl text-sm text-gray-500 poppins mobile:bg-transparent tablet:bg-white laptop:bg-white">
            <div className="flex items-center gap-5 mobile:gap-2 laptop:gap-5 tablet:gap-3">
                <FontAwesomeIcon icon={faBars} className="text-gray-700 text-xs mobile:text-xs tablet:text-sm laptop:text-lg" />
                <span className="text-lg font-semibold text-sky-600 montserrat mobile:text-sm tablet:text-base laptop:text-lg">Weathrly</span>
            </div>
            <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
                <span className="text-gray-500 mobile:text-xs tablet:text-xs laptop:text-sm">Ranchi</span>
            </div>
            <div className="flex w-full mobile:w-full tablet:w-full laptop:w-1/3">
                <input
                    type="text"
                    placeholder="Search Location"
                    className="border-l bg-transparent border-t border-b w-full border-gray-300 rounded-l-md p-2 focus:outline-none text-sm mobile:text-xs tablet:text-sm laptop:text-sm"
                />
                <button className="bg-gray-200 rounded-r-md py-2 px-3 mobile:py-1 mobile:px-2 border-r border-t border-b border-gray-300">
                    <FontAwesomeIcon icon={faLocation} className="text-gray-500 font-thin" />
                </button>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md block mobile:hidden laptop:block tablet:block mobile:text-xs tablet:text-sm laptop:text-sm">Dark</button>
            <div className="flex items-center gap-8">
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User "
                        className="rounded-full border border-gray-300"
                    />
                    <span className="mx-2 block mobile:hidden laptop:block tablet:hidden mobile:text-xs tablet:text-sm laptop:text-sm">Sayantan Halder</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
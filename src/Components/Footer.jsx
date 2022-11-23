import {Link} from "react-router-dom";

const index = () => {
    
    return (
        <div className="pt-3 relative z-10" style={{zIndex : '-1'}}>
            <footer id="footer" className="relative bg-gray-700 pt-4">
                <div className="py-4 flex flex-col justify-center items-center">
                    <p className=" text-xs lg:text-sm leading-none text-gray-100 dark:text-gray-50">2021 Tailwind UI Kit. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default index;

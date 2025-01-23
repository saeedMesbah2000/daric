import {Link} from "react-router";

const ActionLink = ({to, icon, text, alt}) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-purple-600 hover:to-yellow-600 transition-transform duration-300">
    <p>{text}</p>
    <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
      <img src={icon} alt={alt} className="w-5 h-5" />
    </div>
  </Link>
);

export default ActionLink;

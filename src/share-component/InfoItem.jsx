const InfoItem = ({icon, text, alt}) => (
  <div className="flex items-center gap-3">
    <img
      src={icon}
      alt={alt}
      className="w-6 h-6 transition-transform transform group-hover:translate-x-1"
    />
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

export default InfoItem;

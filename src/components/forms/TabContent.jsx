const TabContent = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      {children}
    </div>
  );
};

export default TabContent;

import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, title = "Modal Title", children, onSave, className = "", style = {} }) => {
    
  // blur effect when modal is open
  useEffect(() => {
    const appRoot = document.getElementById("root");

    if (isOpen) {
      // scroll off when modal open
      document.body.classList.add("overflow-hidden");
      appRoot?.classList.add("blur");
    } else {
      document.body.classList.remove("overflow-hidden");
      appRoot?.classList.remove("blur");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      appRoot?.classList.remove("blur");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className={`bg-[#161B26] rounded-lg shadow-lg w-full max-w-md p-3 ${className}`} style={style} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4 border-b-2 border-[#333741] pb-2">
          <h2 className="text-[#FFFFFF] text-xl font-semibold">{title}</h2>
          <button className="text-[#FFFFFF] text-4xl" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-[#FAFAFA] mb-4">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-2 border-t-2 border-[#333741] pt-2">
          <button className="px-4 py-1 text-sm text-[#FAFAFA] bg-[#333741] rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-1 text-sm font-semibold text-[#161B26] bg-[#C7ED30] rounded" onClick={onSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

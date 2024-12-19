import { useState } from "react";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    console.log("Changes saved!");
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} title="Custom Modal">
        <p>Here is some content inside the modal. Add your dynamic content here.</p>
      </Modal>
    </div>
  );
};

export default Navbar;

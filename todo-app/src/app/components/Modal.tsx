import React from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (updatedText: string) => void;
  currentText: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, currentText }) => {
  const [newText, setNewText] = React.useState(currentText);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-70 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative z-60 dark:bg-gray-800 dark:border-gray-800 dark:text-white">
        <h2 className="text-xl mb-4">Edit Todo</h2>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full p-2 border-none border-gray-300 rounded-md outline-none bg-slate-100 dark:bg-gray-600 dark:text-white"
        />
        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(newText);
              onClose();
            }}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')! 
  );
};

export default Modal;

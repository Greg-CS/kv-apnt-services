import React from 'react';

export const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'} onClick={onClose}>
      <div className="border-2 rounded-2xl bg-white text-black p-10 grid gap-10" onClick={e => e.stopPropagation()}>
        <div className="">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className='bg-black p-3 text-white rounded-xl' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
// VideoModal.jsx
import React from 'react';
import './VideoModal.css'; // Ensure you create this CSS file for modal styling

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <video controls autoPlay src={videoSrc} className="modal-video"></video>
      </div>
    </div>
  );
};

export default VideoModal;

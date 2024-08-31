import React, { useState } from "react";
import VideoModal from "./videomodal";
import videoSrc from "./rocket.mp4"; // Ensure this path is correct

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="inner-left-bottom">
      <h2 className="sline">UPCOMING LAUNCH</h2>
      <h1 className="fline">POLARIS DAWN</h1>
      <button className="watch-button" onClick={handleOpenModal}>
        WATCH 
      </button>

      <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc={videoSrc} />
    </div>
  );
};

export default HomePage;

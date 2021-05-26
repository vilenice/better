
import React from "react";
import Modal from 'react-modal';
import picture from './img.js';
import './App.css';

const Dialog = (props) => {
  const { visible, setVisible } = props;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };
  if (visible) {
    return (
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
        overlayClassName="fixed -inset-0 h-full z-1000 bg-black bg-opacity-50"
        className="transition delay-200 bg-dialog-background bg-cover outline-0 relative w-96 h-96"
      >
        <img alt="" className="absolute w-40 top-10 left-10" src={picture.logoMini} />
        <img alt="" className="absolute w-5 h-5 top-4 right-16 opacity-70 hover:opacity-100" src={picture.close} onClick={() => setVisible(false)} />
        <div className="absolute inset-x-0 bottom-0 h-44 w-full px-8 text-lg font-medium" >
          <span>BETTER is coming from the future and will soon go live in June. Come follow our social media accounts and join the community to inspire the future together!</span>
        </div>
      </Modal>
    )
  } else {
    return null
  }
};

export default Dialog;

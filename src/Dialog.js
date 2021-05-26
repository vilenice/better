
import React from "react";
import Modal from 'react-modal';
import picture from './img.js';
import './App.css';
import QueueAnim from 'rc-queue-anim';

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
  return (
    <QueueAnim >
      {visible ?
        <Modal
          key="modal"
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="fixed -inset-0 h-full z-1000 bg-black bg-opacity-50"
          className="bg-dialog-background bg-cover outline-0 relative w-96 h-96"
        >
          <img class="absolute w-40 top-10 left-10" src={picture.logoMini} />
          <img class="absolute w-5 h-5 top-4 right-16 opacity-70 hover:opacity-100" src={picture.close} onClick={() => setVisible(false)} />
          <div class="absolute inset-x-0 bottom-0 h-44 w-full px-8 text-lg font-medium" >
            <span>BETTER is coming from the future and will soon go live in June. Come follow our social media accounts and join the community to inspire the future together!</span>
          </div>
        </Modal> : null}
    </QueueAnim>
  )
};

export default Dialog;

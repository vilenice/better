import React, { useState } from 'react';
import picture from './img.js';
import FAQ from './FAQ.js';
import Dialog from './Dialog.js';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-body-background" >
      <div className="relative overflow-hidden bg-home-background bg-cover bg-no-repeat bg-top pb-24" >
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto" >
          <div className="flex justify-between w-11/12 my-7" >
            <img className="flex my-auto h-14" src={picture.logo} />
            <div className="flex justify-end items-center">
              <div className="inline-flex items-center justify-center capitalize text-white hover:text-button-background text-lg w-20 h-9" onClick={() => setVisible(true)} >Docs</div>
              <div className="inline-flex items-center justify-center uppercase font-medium text-white hover:text-button-background hover:bg-white hover:bg-opacity-25 rounded-full border-2 border-button-background text-lg w-20 h-9" onClick={() => setVisible(true)} >app</div>
            </div>
          </div>
          <div className="flex flex-col justify-end xl:justify-start mx-12 bg-head-background bg-cover bg-no-repeat bg-center h-160 xl:h-224 w-full">
            <div className="flex flex-col xl:justify-center text-center xl:text-left ">
              <div className="flex flex-nowrap justify-center xl:self-end xl:mt-20 xl:leading-normal text-6xl">
                <span className="text-white"><span className="text-title-one">P</span>redict the future</span>
              </div>
              <div className="flex flex-col text-white xl:self-end xl:w-126">
                <div className="text-3xl w-full xl:text-4xl xl:leading-normal">hedge against the future inspire the future</div>
                <div className="flex flex-col">
                  <div className="text-base xl:text-lg font-light w-full my-1">An open source and decentralized protocol for no-loss prediction market</div>
                  <div className="items-center text-center rounded-full bg-gradient-to-r from-deposit-left-button to-deposit-right-button hover:opacity-75 w-40 p-2 xl:text-lgfont-medium text-lg mx-auto my-2 xl:mx-0 xl:my-10 xl:w-64 xl:px-6 xl:py-3 xl:text-3xl shadow-lg" onClick={() => setVisible(true)}>Deposit now</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-t from-info-bottom-background to-info-top-background rounded-md p-11 my-14 w-11/12" >
            <div className="flex-initial items-center text-center font-medium text-4xl text-info-text">Coming soon, please look forward to it.</div>
          </div>
          <div className="flex flex-col items-center my-14">
            <div className="flex flex-col items-center font-medium text-center text-6xl text-white mx-auto my-8" >BET Token</div>
            <div className="flex flex-col items-center font-medium text-center text-3xl text-white mx-auto my-8 leading-loose w-11/12">
              <span >Better is controlled by BET token holders. </span>
              <span >The protocol automatically distributes BET to anyone who deposits into the protocol.</span>
            </div>
            <div className="flex flex-col items-center text-center rounded-full bg-button-background hover:bg-opacity-75 mx-auto my-8 py-4 px-12 font-medium text-2xl shadow-lg" onClick={() => setVisible(true)}>Deposit to get BET Tokens</div>
          </div>
          <div className="flex flex-col items-center my-14">
            <div className="flex flex-col items-center font-normal text-center text-6xl text-white mx-auto my-8" >How it works</div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="flex flex-col w-full sm:w-88 h-auto sm:h-112 bg-works-red-background rounded-lg m-7">
                <div className="w-full h-3.5 bg-works-head-red-background rounded-lg" />
                <div className="flex items-center h-20 mx-5 my-4">
                  <img className="bg-works-head-red-background rounded-full w-9 h-9 p-1 mx-2 my-auto" src={picture.worksIcon1} />
                  <div className="font-semibold text-left text-4xl text-white truncate overflow-hidden" >GET TICKETS</div>
                </div>
                <div className="font-normal text-left text-2xl text-white pl-16 pr-10 sm:px-8 pb-8 overflow-ellipsis overflow-hidden" >Deposit into any staking vault and instantly get tickets for each prediction market.</div>
              </div>
              <div className="flex flex-col w-full sm:w-88 h-auto sm:h-112 bg-works-blue-background rounded-lg m-7">
                <div className="w-full h-3.5 bg-works-head-blue-background rounded-lg" />
                <div className="flex items-center h-20 mx-5 my-4">
                  <img className="bg-works-head-blue-background rounded-full w-9 h-9 p-1 mx-2 my-auto" src={picture.worksIcon2} />
                  <div className="font-semibold text-left text-4xl text-white truncate overflow-hidden" >WIN PRIZES</div>
                </div>
                <div className="font-normal text-left text-2xl text-white pl-16 pr-10 sm:px-8 pb-8 overflow-ellipsis overflow-hidden" >Use your tickets to bet on future event. All users with correct predictions will share the prizes. Prizes are made up of the all the interest earned on deposited money in the staking vaults.</div>
              </div>
              <div className="flex flex-col w-full sm:w-88 h-auto sm:h-112 bg-works-purple-background rounded-lg m-7">
                <div className="w-full h-3.5 bg-works-head-purple-background rounded-lg" />
                <div className="flex items-center h-20 mx-5 my-4">
                  <img className="bg-works-head-purple-background rounded-full w-9 h-9 p-1 mx-2 my-auto" src={picture.worksIcon3} />
                  <div className="font-semibold text-left text-4xl text-white truncate overflow-hidden" >NEVER LOSE</div>
                </div>
                <div className="font-normal text-left text-2xl text-white pl-16 pr-10 sm:px-8 pb-8 overflow-ellipsis overflow-hidden" >Remove your deposit at anytime. You will not lose any of your principal. You will even be rewarded with liquidity mining regardless of whether your predictions turn out to be correct or not.</div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center rounded-full bg-button-background hover:bg-opacity-75 mx-auto my-8 py-4 px-12 font-medium text-2xl shadow-lg" onClick={() => setVisible(true)}>Go to docs</div>
          </div>
          <div className="flex flex-col items-center my-14 w-full">
            <div className="flex flex-col items-center font-normal text-center text-6xl text-white mx-auto my-8" >FAQ</div>
            <FAQ />
          </div>
          <div className="flex flex-col items-center my-14">
            <div className="flex flex-col items-center font-normal text-center text-6xl text-white mx-auto my-8" >Security Audit</div>
            <div className="flex flex-col items-center bg-security-background rounded-xl p-11 my-6 w-11/12" >
              <div className="flex flex-row items-center">
                <img className="my-auto flex-initial h-24 mr-8" src={picture.securityIcon} />
                <span className="flex-initial font-medium text-left text-4xl text-white" >PoolTogether is an open-source and decentralized protocol that is audited by XXXX.</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center rounded-full bg-button-background hover:bg-opacity-75 mx-auto my-8 py-4 px-12 font-medium text-2xl shadow-lg" onClick={() => setVisible(true)}>Audit Report</div>
          </div>
          <div className="flex flex-col items-center my-14">
            <div className="flex flex-col items-center font-normal text-center text-6xl text-white mx-auto my-8" >Partners</div>
            <div className="flex flex-row flex-wrap items-center text-center justify-center mx-auto" >
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
              <img className="my-7 mx-10 sm:mx-16 w-52 sm:w-60 hover:opacity-75" src={picture.partners} />
            </div>
          </div>
          <div className="flex flex-col items-center my-14">
            <div className="flex flex-col items-center font-normal text-center text-6xl text-white mx-auto my-8" >Get involved</div>
            <div className="flex flex-col items-center font-medium text-center text-3xl text-white mx-auto my-8 leading-loose">
              <span>Join our growing community</span>
              <span>Make your contribution or get community support 24/7.</span>
            </div>
            <div className="flex flex-row flex-wrap items-center text-center justify-center mx-auto my-11">
              <img className="m-4 w-24 h-24 hover:opacity-75" src={picture.community1} />
              <img className="m-4 w-24 h-24 hover:opacity-75" src={picture.community2} />
              <img className="m-4 w-24 h-24 hover:opacity-75" src={picture.community3} />
              <img className="m-4 w-24 h-24 hover:opacity-75" src={picture.community4} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-bottom-background p-20">
        <div className="flex flex-row flex-wrap items-center text-center justify-center mx-auto">
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">Docs</a>
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">Medium</a>
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">Twitter</a>
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">Discord</a>
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">Telegram</a>
          <a className="font-medium mx-4 text-2xl text-bottom-text hover:text-bottom-text-hover">WeChat</a>
        </div>
      </div>
      <Dialog visible={visible} setVisible={setVisible} />
    </div >
  );
}

export default App;

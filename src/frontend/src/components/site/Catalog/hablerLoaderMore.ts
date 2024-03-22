import { useState } from 'react';
import { SFetch } from "@service/server";
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

const serverPositions = new SFetch(url);

/**
 * 
 * @param num : SFetch.requestOneBefore = { offset: num }.
 *  There is a quantilitu currant position for the beginning load
 * @param state : SFetch.getRrequestOneParamServer(state) there is a function of useState (hook react)
 */
function requestSFetch(num: number, state: typeof useState) {
  serverPositions.requestOneBefore = { offset: num };
  serverPositions.getRrequestOneParamServer(state);
}

let oldOffset: number = 6;

interface HandlerLoader {
  state: typeof useState
}

/**
 * hablerLoaderMore is a wrap for an event handler. The entryPoint get a param 'state' 
 * this's a event handler. It sends two line dats:
 - SFetch.requestOneBefore = { offset: "oldOffset += 6"; }, where an oldOffset is the number type
 - SFetch.getRrequestOneParamServer(state), where a state is the typeof useState (react hook)
 */
function hablerLoaderMore(state: HandlerLoader['state']) {

  return ((event: MouseEvent): void => {
    event.preventDefault();
    oldOffset += 6;
    requestSFetch(oldOffset, state)
  })
}

export default { requestSFetch, hablerLoaderMore }

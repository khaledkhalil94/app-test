import httpClient from './httpClient';

export const getLogo = () => httpClient.get('5b549bd72f0000100c0619c5')
  .then(({logoUrl}) => logoUrl);

export const getPhoneNumber = () => httpClient.get('5b549c3b2f0000100c0619c6')
  .then(({phone}) => phone);

export const getSessionsData = () => httpClient.get('5b549db32f0000b2110619ca')
  .then(({sessions}) => sessions);

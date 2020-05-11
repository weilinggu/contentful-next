import { createClient } from 'contentful'
import { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } from '../config.json'

const isProduction = false

const contentfulClient = createClient({
  host: isProduction ? "cdn.contentful.com" : "preview.contentful.com",
  // host: "cdn.contentful.com",
  accessToken: isProduction ? DELIVERY_TOKEN : PREVIEW_TOKEN,
  // accessToken: DELIVERY_TOKEN,
  space: SPACE,
});

const getEntry = entryId => {
  // if (isLocalMocks) {
  //   const entryData = getLocalMocks(entryId);
  //   return entryData;
  // }
  return contentfulClient.getEntry(entryId, { include: 2 });
};

// export default { contentfulClient, getEntry }
module.exports = { contentfulClient, getEntry }

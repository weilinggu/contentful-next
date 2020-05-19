import { createClient, ContentfulClientApi } from 'contentful'
import { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } from '../../config.json'
import { getOperationRootType } from 'graphql';

import { DataSource } from 'apollo-datasource'

const isProduction = false

export class ContentfulClient extends DataSource {
  client = null
  constructor() {
    super()
    this.client = createClient({
      host: isProduction ? "cdn.contentful.com" : "preview.contentful.com",
      // host: "cdn.contentful.com",
      accessToken: isProduction ? DELIVERY_TOKEN : PREVIEW_TOKEN,
      // accessToken: DELIVERY_TOKEN,
      space: SPACE,
    });
  }
  async getEntries() {
    const entries = await this.client.getEntry({
      content_type: "productPage",
      include: 5
    });
    // console.log(entries)
    // console.log(JSON.stringify(entries))
    return [entries]
  }
}


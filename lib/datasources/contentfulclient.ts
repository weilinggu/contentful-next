import { createClient, ContentfulClientApi } from 'contentful'
import { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } from '../../config.json'
import { getOperationRootType } from 'graphql';

import { DataSource } from 'apollo-datasource'

const isProduction = false

const isStaging = process.env.staging ? process.env.staging : false

export class ContentfulClient extends DataSource {
  client = null
  constructor() {
    super()
    this.client = createClient({
      host: isProduction ? "cdn.contentful.com" : "preview.contentful.com",
      // host: "cdn.contentful.com",
      accessToken: isStaging ? process.env.DELIVERY_TOKEN : PREVIEW_TOKEN,
      // accessToken: DELIVERY_TOKEN,
      space: isStaging ? process.env.SPACE : SPACE,
    });
  }
  async getEntries() {
    const entries = await this.client.getEntries({
      content_type: "productPage",
      include: 5
    });

    return entries.items
  }
}


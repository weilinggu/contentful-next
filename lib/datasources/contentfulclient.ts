import { createClient, ContentfulClientApi } from 'contentful'
import { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } from '../../config.json'

import { DataSource } from 'apollo-datasource'

const isProduction = false

export class ContentfulClient extends DataSource {
  client: ContentfulClientApi
  constructor() {
    super()
    this.client = createClient({
      host: isProduction ? "cdn.contentful.com" : "preview.contentful.com",
      // host: "cdn.contentful.com",
      accessToken: process.env.PREVIEW_TOKEN || PREVIEW_TOKEN,
      // accessToken: DELIVERY_TOKEN,
      space: process.env.SPACE || SPACE,
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


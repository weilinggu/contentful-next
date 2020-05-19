import { createClient } from 'contentful'
import { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } from '../../config.json'
import { getOperationRootType } from 'graphql';

const { RESTDataSource } = require('apollo-datasource-rest');

const isProduction = false

class ContentfulClient extends RESTDataSource {
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
    const entries = this.client.getEntry({
      content_type: "productPage",
      include: 5
    });

    return entries.items
  }
}
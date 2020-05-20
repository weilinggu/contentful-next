import { QueryResolvers } from './type-defs.graphqls'
import { ResolverContext } from './with-apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  },
  entries(_parent, _args, _context, _info) {
    return _context.dataSources.contentfulClient.getEntries() as any
  },
}
// Casting the return type of of the entries query as any in the interest of time
export default { Query }

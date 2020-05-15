// type Entry {
//   sys: String,
//   fields: String
// }

// type EntrySys {
//   space: Space,
//   type: String,
//   id: String,
//   contentType: ContentType,
//   revision: Int,
//   createdAt: String,
//   updatedAt: String,
//   environment: Environment,
//   locale: String
// }

// type Space {
//   sys: SpaceSys,
//   type: String,
//   id: String
// }

// type SpaceSys {
//   type: String,
//   linkType: String,
//   id: String
// }

// type ContentType {
//   sys: ContentSys
// }

// type ContentSys {
//   type: String,
//   linkType: String,
//   id: String
// }

// type Environment {
//   sys: EnvironmentSys
// }

// type EnvironmentSys {
//   id: String,
//   type: String,
//   linkType: String
// }

// type EntryFields {
//   pageTitle: String,
//   productBlock: ProductBlock,
//   instructionBlock: InstructionBlock,
//   slug: String,
//   countries: Countries
// }

// type ProductBlock {
//   sys: EntrySys,
//   fields: ProductBlockFields
// }

// type ProductBlockFields {
//   productComponent: ProductComponent,
//   style: String,
//   blockTitle: String
// }

// type ProductComponent {
//   sys: EntrySys,
//   fields: ProductComponentFields
// }

// type ProductComponentFields {
//   productName: String,
//   image: [ProductImage],
//   magentoProductInfo: [MagentoProductInfo]
//   slug: String
// }

// type ProductImage {
//   sys: EntrySys,
//   productImageFields: ProductImageFields
// }

// type ProductImageFields {
//   title: String,
//   file: ImageFile
// }

// type ImageFile {
//   url: String,
//   imageFileDetails: ImageFileDetails,
//   fileName: String,
//   contentType: String
// }

// type ImageFileDetails {
//   size: Int,
//   image: ImageDimensions
// }

// type ImageDimensions {
//   width: Int,
//   height: Int
// }

// type MagentoProductInfo {
//   sys: EntrySys,
//   fields: ProductInfoFields
// }

// type ProductInfoFields {
//   sku: String
// }
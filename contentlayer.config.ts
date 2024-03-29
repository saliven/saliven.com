import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.md',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    year: {
      type: 'number',
      required: true
    },
    link: {
      type: 'string',
      required: false
    },
    logo: {
      type: 'string',
      required: false
    },
    active: {
      type: 'boolean',
      required: false,
      default: true
    }
  }
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: 'content',
  documentTypes: [Project]
});

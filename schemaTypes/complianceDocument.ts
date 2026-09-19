export const complianceDocument = {
  name: 'complianceDocument',
  title: 'Compliance & Operations Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
    },
    {
      name: 'version',
      title: 'Version / Revision',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fleet Safety', value: 'fleet_safety' },
          { title: 'Hazard Procedures', value: 'hazard_procedures' },
          { title: 'Equipment Maintenance', value: 'equipment_maintenance' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Manual Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'supersedes',
      title: 'Supersedes (Legacy Clause / Version)',
      type: 'string',
      description: 'Reference any older rules or conflicting previous versions this replaces.',
    },
  ],
}
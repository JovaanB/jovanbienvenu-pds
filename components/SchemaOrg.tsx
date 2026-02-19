/**
 * Composant JSON-LD réutilisable pour le Schema.org.
 * Usage: <SchemaOrg schema={buildLocalBusinessSchema()} />
 */

interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

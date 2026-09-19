import { client } from '@/lib/sanity'

async function getComplianceDocs() {
  const query = `*[_type == "complianceDocument"]{
    _id,
    title,
    category,
    version,
    lastReviewed,
    content
  }`
  return await client.fetch(query)
}

export default async function Home() {
  const docs = await getComplianceDocs()

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-orange-500">
            Transport & Fleet Safety Operations Manual
          </h1>
          <p className="mt-2 text-gray-400">
            AI-Powered Compliance Knowledge Base (Sanity Project: dyxta77n)
          </p>
        </header>

        <div className="space-y-6">
          {docs.length === 0 ? (
            <p className="text-gray-500">No compliance documents found yet. Add some in your Sanity Studio!</p>
          ) : (
            docs.map((doc: any) => (
              <article key={doc._id} className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-semibold">
                      {doc.category || 'Standard Protocol'}
                    </span>
                    <h2 className="text-2xl font-bold mt-2 text-white">{doc.title}</h2>
                  </div>
                  <div className="text-right text-xs text-gray-400">
                    <p>Version: {doc.version || '1.0'}</p>
                    <p className="mt-1">Reviewed: {doc.lastReviewed || 'N/A'}</p>
                  </div>
                </div>
                <div className="text-gray-300 text-sm leading-relaxed border-t border-gray-700/50 pt-4">
                  {/* Summary or preview text */}
                  <p>{doc.content ? "Protocol content managed via Sanity Studio." : "No content block provided."}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
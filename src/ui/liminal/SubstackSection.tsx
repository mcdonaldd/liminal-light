import Link from 'next/link'
import { FALLBACK_SUBSTACK_URL } from '@/lib/env'
import { getSubstackPosts } from '@/lib/substack'
import { getSite } from '@/sanity/lib/queries'
import SubstackPostCard from './SubstackPostCard'

export default async function SubstackSection() {
  const site = await getSite()
  const substackUrl = site?.substackUrl || FALLBACK_SUBSTACK_URL
  const posts = await getSubstackPosts(substackUrl)
  const featured = posts.slice(0, 3)

  return (
    <section
      id="substack"
      style={{
        position: 'relative',
        marginTop: '-4px',
        backgroundColor: 'var(--color-bg-primary)',
        paddingBlock: 'var(--space-24)',
        paddingInline: 'var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)',
          }}
        >
          <div style={{ maxWidth: '55ch' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              The Writing
            </p>

            <Link href="/writing" style={{ textDecoration: 'none' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
                  lineHeight: 'var(--leading-snug)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Where the thinking happens out loud.
              </h2>
            </Link>

            <p
              style={{
                fontWeight: 300,
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--color-text-secondary)',
              }}
            >
              Essays on healing, identity, systems, and what it means to live in a body while
              working in tech. Published on Substack.
            </p>
          </div>

          <Link
            href="/writing"
            className="btn-secondary"
            style={{ flexShrink: 0 }}
          >
            View all writing →
          </Link>
        </div>

        {/* Posts */}
        {featured.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {featured.map((post) => (
              <SubstackPostCard key={post.link} post={post} />
            ))}
          </div>
        ) : (
          <a
            href={substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="post-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-16) var(--space-6)',
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'var(--text-base)',
              color: 'var(--color-accent-ember-hover)',
            }}
          >
            Read Nathan's writing on Substack →
          </a>
        )}
      </div>
    </section>
  )
}

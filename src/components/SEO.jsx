import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component for per-page meta tags
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (will be appended with site name)
 * @param {string} props.description - Meta description (max 160 chars recommended)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.image - OG image path (relative to baseUrl)
 * @param {string} props.url - Page URL path (e.g., '/golden-visa')
 * @param {string} props.type - OG type (default: 'website')
 * @param {Object} props.structuredData - Optional JSON-LD structured data
 */
const SEO = ({
    title,
    description,
    keywords,
    image = '/og-image.jpg',
    url = '/',
    type = 'website',
    structuredData = null
}) => {
    const siteName = 'GET Business Setup';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Your Premier Business Partner in Dubai, UAE`;
    const baseUrl = 'https://getbusinesssetup.ae';
    const fullUrl = `${baseUrl}${url}`;
    const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_AE" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

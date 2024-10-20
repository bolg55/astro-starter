import type { Post } from '@/interfaces/blog-interface';

const jsonLDGenerator = ({
  type,
  post,
  url,
}: {
  type: string;
  post: Post;
  url: string;
}) => {
  if (type === 'post') {
    const { title, description, publishedDate, image, author } = post;
    return `<script type="application/ld+json">
          {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "${url}"
                  },
                  "headline": "${title}",
                  "description": "${description}",
                  "image": "${image.src}",
                  "author": {
                      "@type": "Person",
                      "name": "${author}"
                  },

                  "datePublished": "${publishedDate}"

              }
              </script>`;
  }
  return `<script type="application/ld+json">
          {
              "@context": "https://schema.org",
              "@type": "Organization" ,
              "name": "Eighty Nine Innovations",
              "url": "${import.meta.env.SITE}",
              "logo": "/images/logo.png",
              "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "${import.meta.env.PUBLIC_PHONE_NUMBER}",
                  "contactType": "Customer service"
              },
              "sameAs": [
                  "${import.meta.env.PUBLIC_FACEBOOK_URL}",
                  "${import.meta.env.PUBLIC_TWITTER_URL}",
                  "${import.meta.env.PUBLIC_INSTAGRAM_URL}",
                ],
                "description": "We provide expert SEO, copywriting, web development, and CRO services to help businesses succeed online.",
    "member": [
      {
        "@type": "Person",
        "name": "Kellen Bolger",
        "jobTitle": "Founder"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO",
            "description": "Improve your website's visibility and organic search rankings."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Copywriting",
            "description": "Craft compelling and persuasive content for your digital marketing needs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Build modern and responsive websites using cutting-edge technologies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRO",
            "description": "Optimize your website for conversions and maximize your online impact."
          }
        }
      ]
    }
  }
          </script>`;
};

export default jsonLDGenerator;

import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const SEOHead = ({ title, description }: SEOHeadProps): null => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEOHead;

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FAVICON_URL } from '@/assets'

// Ensure site title and favicons are set via module-imported assets
document.title = 'ISM Kakkanad'

const setOrCreateLink = (rel: string, href: string, sizes?: string) => {
	let link: HTMLLinkElement | null = document.querySelector(
		sizes ? `link[rel="${rel}"][sizes="${sizes}"]` : `link[rel="${rel}"]`
	)
	if (!link) {
		link = document.createElement('link')
		link.rel = rel
		if (sizes) link.sizes = sizes
		document.head.appendChild(link)
	}
	link.href = href
}

setOrCreateLink('icon', FAVICON_URL, '32x32')
setOrCreateLink('icon', FAVICON_URL, '192x192')
setOrCreateLink('apple-touch-icon', FAVICON_URL)
setOrCreateLink('shortcut icon', FAVICON_URL)

createRoot(document.getElementById("root")!).render(<App />);

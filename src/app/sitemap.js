import axios from "axios"


export default async function sitemap() {
    try {
        const { data } = await axios("https://pristine.dphexabells.com/api/sitemap")
        console.log(data, "sitemap data");
        const links = data?.data?.map((item) => ({
            url: item.url,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }))
        return links
    } catch (error) {
        console.error(error);
        return [
            {
                url: 'https://acme.com',
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 1,
            },
            {
                url: 'https://acme.com/about',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: 'https://acme.com/blog',
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.5,
            },
        ]
    }
}
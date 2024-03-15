import code from "@/assets/code.png"
import marekting from "@/assets/marketing.png"
import content from "@/assets/blog_7862079.png"


interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  isFeatured: boolean;
}


export const servicedata: Service[] =   [
   
    {
      "id": 1,
      "title": "Digital Marketing",
      "description": "Crafting tailored strategies to expand your online presence and drive growth.",
      "icon": marekting,
      "isFeatured": true
    },
    {
      "id": 2,
      "title": "Web Development",
      "description": "Providing Websites in React js , Next js and Wordpress so your customer can ",
      "icon": code,
      "isFeatured": true
    },
    {
      "id": 3,
      "title": "Content Creation",
      "description": "We ensure your content is strategically crafted to rank well in search results.",
      "icon": content,
      "isFeatured": true
    },

    // {
    //   "id": 4,
    //   "title": "SEO Optimization",
    //   "description": "Improving search engine visibility and driving organic traffic to your website.",
    //   "icon": "seo-icon.png",
    //   "isFeatured": false
    // }
  ]



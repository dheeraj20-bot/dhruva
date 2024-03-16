export interface PricingItem {
    id: string;
    title: string;
    description: string;
    price: string | null;
    features: string[];
  }
  
export const pricing: PricingItem[] = [
    {
      id: "0",
      title: "Growth",
      description: "AI chatbot, personalized recommendations",
      price: "1500€",
      features: [
        "SEO /Google Ads",
        " based on your preferences",
        "Content Optimization",
        "OnPage SEO",
        "Web Development",
        "Social Media Marketing"
      ],
    },
    {
      id: "1",
      title: "Performance",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "Revenue Share (Negotiable)",
      features: [
        "Same as Growth Pack",
        "Sales Process Optimization"
      ],
    },

  ];
  
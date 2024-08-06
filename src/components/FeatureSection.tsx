import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Built for Everyone",
      description: "Everyone can easily edit and update content.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of Use",
      description: "Our interfaces are intuitive and user-friendly, making it as easy as using an Apple.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing Like No Other",
      description: "Our prices are the best in the market. No hidden fees, no long-term commitments, and no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime Guarantee",
      description: "We ensure your application is always online with deployments on Vercel and AWS.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Efficiently share resources without the need for individual licenses or new seats.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you.",
      icon: <IconHelp />,
    },
    {
      title: "Money-Back Guarantee",
      description: "Not satisfied? We'll work to ensure you are, or you get your money back.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Everything Else",
      description: "We cover all your needs, even the ones you haven't thought of yet.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <section className="max-w-7xl mx-auto">
         <h2 className="text-4xl px-3 sm:text-5xl text-center bg-clip-text bg-gradient-to-b pt-20 pb-10  font-semibold text-transparent from-white to-slate-500">What You Can Expect From Us!</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-3 relative z-10 py-10 ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>

    </section>
   
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-emerald-600 transition-all duration-200 origin-center" />

        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

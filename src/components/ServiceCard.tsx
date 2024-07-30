'use client'
import { Meteors } from './ui/meteors';

type Service = {
    title: string;
    description: string;
  };

type ServiceProps = {
  service: Service;
};

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => (
  <div className="w-full relative max-w-xs mb-8">
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
    <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
    
      <h1 className="font-bold text-xl text-white mb-4 relative z-50">{service.title}</h1>
      <p className="font-normal text-base text-slate-500 mb-4 relative z-50">{service.description}</p>
      <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
        Explore
      </button>
      {/* Meaty part - Meteor effect */}
      <Meteors number={20} />
    </div>
  </div>
);

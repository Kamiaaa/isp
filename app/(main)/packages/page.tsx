// app/packages/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  GiCheckMark,
  GiPayMoney,
} from 'react-icons/gi';
import { 
  MdDataUsage, 
  MdLockClock,
  MdOutlineSupportAgent,
  MdOutlineRocketLaunch,
  MdOutlineCheckCircle,
  MdOutlineNetworkCell
} from 'react-icons/md';
import { 
  FaTachometerAlt, 
  FaBolt,
} from 'react-icons/fa';
import { 
  FiWifi, 
  FiServer, 
  FiShield, 
  FiMonitor,
} from 'react-icons/fi';

import { HiOutlineSparkles } from 'react-icons/hi';

import { BsClock, BsHouseDoor } from 'react-icons/bs';
import { LuGamepad2, LuRouter, LuWifi, } from 'react-icons/lu';

interface PricingTier {
  name: string;
  price: string;
  speed: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  icon: React.ReactNode;
  color: string;
  iconBg: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Bijoy",
    price: "600",
    speed: "15 MBPS",
    features: [
      "15 Mbps Symmetrical Speed",
      "Unlimited Data",
      "24/7 Basic Support",
      "Standard Router Included",
      "1 Month Contract"
    ],
    buttonText: "Get Started",
    icon: <FiWifi className="h-7 w-7" />,
    color: "from-blue-500 to-blue-700",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    name: "Duronto",
    price: "800",
    speed: "30 MBPS",
    features: [
      "30 Mbps Symmetrical Speed",
      "Unlimited Premium Data",
      "Priority 24/7 Support",
      "Gaming Router Included",
      "Free Installation",
      "No Contract"
    ],
    buttonText: "Choose Plan",
    icon: <LuGamepad2 className="h-7 w-7" />,
    color: "from-cyan-500 to-cyan-700",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-700"
  },
  {
    name: "Shadhin",
    price: "1000",
    speed: "40 MBPS",
    features: [
      "40 Mbps Symmetrical Speed",
      "Unlimited Premium Data",
      "Priority 24/7 Support",
      "Gaming Router Included",
      "Free Installation",
      "No Contract"
    ],
    buttonText: "Choose Plan",
    icon: <BsHouseDoor className="h-7 w-7" />,
    color: "from-emerald-500 to-emerald-700",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700"
  },
  {
    name: "Shagotom",
    price: "1500",
    speed: "50 MBPS",
    features: [
      "50 Mbps Symmetrical Speed",
      "Unlimited Premium+ Data",
      "VIP 24/7 Priority Support",
      "Mesh WiFi System Included",
      "Free Professional Setup",
      "2 Years Price Lock",
      "Static IP Address"
    ],
    buttonText: "Go Premium",
    icon: <HiOutlineSparkles className="h-7 w-7" />,
    color: "from-purple-500 to-purple-700",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    name: "Chaitali",
    price: "2000",
    speed: "80 MBPS",
    features: [
      "80 Mbps Symmetrical Speed",
      "Unlimited Premium+ Data",
      "VIP 24/7 Priority Support",
      "Mesh WiFi System Included",
      "Free Professional Setup",
      "Static IP Address"
    ],
    buttonText: "Go Premium",
    icon: <MdDataUsage className="h-7 w-7" />,
    color: "from-rose-500 to-rose-700",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-700"
  },
  {
    name: "Boishakhi",
    price: "3000",
    speed: "100 MBPS",
    features: [
      "100 Mbps Symmetrical Speed",
      "Unlimited Premium+ Data",
      "VIP 24/7 Priority Support",
      "Mesh WiFi System Included",
      "Free Professional Setup",
      "Static IP Address",
      "Dedicated Account Manager"
    ],
    isPopular: true,
    buttonText: "Go Ultra",
    icon: <FaTachometerAlt className="h-7 w-7" />,
    color: "from-amber-500 to-amber-700",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-700"
  }
];

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => {
  return (
    <div className={`
      relative flex flex-col w-full max-w-sm mx-auto rounded-2xl shadow-xl overflow-hidden
      transition-all duration-300 hover:scale-105 hover:shadow-2xl
      ${tier.isPopular ? 'ring-2 ring-amber-500 md:scale-105' : 'ring-1 ring-gray-200 dark:ring-gray-700'}
    `}>
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-linear-to-br ${tier.color} opacity-5`} />
      
      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-linear-to-r from-amber-500 to-amber-700 text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold shadow-lg flex items-center gap-1">
            <HiOutlineSparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card content */}
      <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 p-6 flex flex-col h-full">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${tier.iconBg} text-white shadow-lg`}>
            {tier.icon}
          </div>
          <div className="text-right">
            <p className="py-2 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {tier.speed}
            </p>
            <h3 className="text-2xl font-bold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {tier.name}
            </h3>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-gray-900 dark:text-white">৳</span>
            <span className="text-5xl font-black text-gray-900 dark:text-white">{tier.price}</span>
            <span className="text-gray-600 dark:text-gray-300">/mo</span>
          </div>
        </div>

        {/* Speed Badge */}
        <div className="mb-4 flex justify-center">
          <div className={`px-4 py-1 rounded-full text-sm font-bold text-white bg-linear-to-r ${tier.color}`}>
            {tier.speed}
          </div>
        </div>

        {/* Features */}
        <div className="grow mb-8">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider flex items-center gap-2">
            <MdOutlineCheckCircle className="w-4 h-4 text-green-500" />
            What's Included:
          </p>
          <ul className="space-y-3">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className={`shrink-0 w-5 h-5 rounded-full bg-linear-to-r ${tier.color} flex items-center justify-center`}>
                  <GiCheckMark className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button className={`
          w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-200
          bg-linear-to-r ${tier.color} hover:shadow-lg
          transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
          flex items-center justify-center gap-2
        `}>
          <MdOutlineRocketLaunch className="w-4 h-4" />
          {tier.buttonText}
        </button>

        {/* Fine print */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-1">
          <MdLockClock className="w-3 h-3" />
          No hidden fees • Cancel anytime
        </p>
      </div>
    </div>
  );
};

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const valueAdds = [
    { title: '24/7 Local Support', description: 'Real humans, not robots. Our support team is always awake.', icon: MdOutlineSupportAgent },
    { title: '99.9% Uptime Guarantee', description: 'We take reliability seriously. SLA-backed commitment.', icon: BsClock },
    { title: 'No Hidden Fees', description: 'What you see is what you pay. Transparent billing.', icon: GiPayMoney },
    { title: 'Free Router', description: 'With annual payment. Cutting-edge wireless tech.', icon: LuRouter }
  ];

  const addOns = [
    { name: 'Static IP', price: '৳৫০০/mo', icon: MdOutlineNetworkCell, color: 'from-blue-500 to-blue-600' },
    { name: 'Mesh WiFi Extender', price: '৳৮০০/mo', icon: LuWifi, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Premium TV Bundle', price: '৳১৫০০/mo', icon: FiMonitor, color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud Backup', price: '৳৩০০/mo', icon: FiServer, color: 'from-emerald-500 to-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - Same style as AboutPage */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2070&q=80"
            alt="Fiber optic network background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 mix-blend-multiply" />
        </div>

        <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <FaBolt className="w-4 h-4" />
                High-Speed Fiber Network
              </div>
              <h1 className="text-4xl font-source font-bold text-white sm:text-5xl lg:text-6xl mb-6">
                Discover Our <span className="text-green-200">Best Packages</span>
              </h1>
              {/* <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Pick the plan that fits your lifestyle. All plans include unlimited data and 24/7 support.
              </p> */}
              
              {/* Speed indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <FaTachometerAlt className="w-4 h-4" />
                  <span>Fiber Optic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <MdDataUsage className="w-4 h-4 text-green-300" />
                  <span>Unlimited Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <FiShield className="w-4 h-4 text-purple-300" />
                  <span>Secure Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-source font-semibold text-gray-900 dark:text-white mb-4">
              Discover Our Best Packages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pick the plan that fits your lifestyle. All plans include unlimited data and 24/7 support.
            </p>
            
            {/* Speed indicators */}
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaTachometerAlt className="w-4 h-4 text-gray-500" />
                <span>Fiber Optic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MdDataUsage className="w-4 h-4 text-green-500" />
                <span>Unlimited Data</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FiShield className="w-4 h-4 text-purple-500" />
                <span>Secure Connection</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid - responsive for 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <PricingCard tier={tier} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-source font-semibold text-gray-900 dark:text-white mb-4">
              Compare Plans Side by Side
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Still not sure? Here's a detailed breakdown of what each plan offers.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  {pricingTiers.map((tier, idx) => (
                    <th key={idx} className="px-6 py-4 text-left text-sm font-semibold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Download Speed</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">15 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">30 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">40 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">50 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">80 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">100 Mbps</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Upload Speed</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">15 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">30 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">40 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">50 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">80 Mbps</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">100 Mbps</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Data Cap</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited Premium</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited Premium</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited Premium+</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited Premium+</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Unlimited Premium+</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Router Included</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Standard</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Gaming Router</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Gaming Router</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Mesh WiFi System</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Mesh WiFi System</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Mesh WiFi System</td>
                 </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Contract</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">1 Month</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">No Contract</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">No Contract</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">No Contract</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">No Contract</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">No Contract</td>
                 </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium">Monthly Price</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳600/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳800/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳1000/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳1500/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳2000/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">৳3000/mo</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Value Adds Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-source font-semibold text-gray-900 dark:text-white mb-4">
              Every Plan Includes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No matter which package you choose, you'll always get these benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAdds.map((add, index) => (
              <div 
                key={add.title}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white mb-4 shadow-md">
                  <add.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {add.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {add.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-source font-semibold text-white mb-4">
              Boost Your Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Add these optional services to any plan for an enhanced experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <div 
                key={addon.name}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${addon.color} mb-4`}>
                  <addon.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-green-400">{addon.price}</p>
                <button className="mt-4 text-sm text-green-300 hover:text-green-200 underline-offset-2 hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <MdOutlineSupportAgent className="w-10 h-10 text-green-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">24/7 Support</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <LuRouter className="w-10 h-10 text-blue-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">Free Router</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">With annual payment</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <BsClock className="w-10 h-10 text-purple-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">30-Day Guarantee</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Money back guarantee</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <FiServer className="w-4 h-4" />
              99.9% Uptime Guarantee • No Contracts • Free Installation
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section - Same style as AboutPage */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience the A1 Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who trust us for their internet needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Check Availability
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
          <p className="text-sm text-green-100 mt-6">
            No contracts. 30-day money-back guarantee. Free cancellation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
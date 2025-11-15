import { useState } from 'react';
import { Car, DoorOpen, Armchair, Building2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Avto Servis System',
    tagline: 'Complete ERP for Auto Service Centers',
    icon: Car,
    color: 'bg-blue-500',
    description: 'Comprehensive management system designed specifically for automotive service centers. Streamline appointments, inventory, and customer relationships.',
    features: [
      'Appointment scheduling & management',
      'Vehicle history tracking',
      'Parts inventory management',
      'Customer relationship management',
      'Service billing & invoicing',
      'Mobile app for technicians'
    ],
    industries: ['Auto Service Centers', 'Car Repair Shops', 'Vehicle Maintenance']
  },
  {
    id: 2,
    name: 'Eshikchi',
    tagline: 'ERP for Door Manufacturing & Sales',
    icon: DoorOpen,
    color: 'bg-green-500',
    description: 'Specialized ERP system for door manufacturers and retailers. Manage production, inventory, and sales with ease.',
    features: [
      'Production planning & tracking',
      'Warehouse management',
      'Order processing & fulfillment',
      'Custom design configurations',
      'Sales & CRM integration',
      'Tablet-optimized interface'
    ],
    industries: ['Door Manufacturing', 'Home Improvement', 'Construction Supplies']
  },
  {
    id: 3,
    name: 'Mebelchi',
    tagline: 'ERP for Furniture Manufacturers',
    icon: Armchair,
    color: 'bg-orange-500',
    description: 'Advanced ERP solution for furniture manufacturing businesses. From design to delivery, manage every aspect of your operation.',
    features: [
      '3D furniture configuration',
      'Production workflow management',
      'Material & inventory control',
      'Point of sale system',
      'Delivery scheduling',
      'Financial management'
    ],
    industries: ['Furniture Manufacturing', 'Interior Design', 'Custom Furniture']
  },
  {
    id: 4,
    name: 'HSYS',
    tagline: 'Vertical ERP for Construction & Auto Parts',
    icon: Building2,
    color: 'bg-red-500',
    description: 'Multi-purpose ERP for construction materials and auto parts businesses. Handle complex inventory and sales processes effortlessly.',
    features: [
      'Multi-warehouse management',
      'VIN & analog part search',
      'POS terminal integration',
      'Supplier management',
      'API integrations',
      'Advanced reporting & analytics'
    ],
    industries: ['Construction Materials', 'Auto Parts', 'Wholesale Distribution']
  },
  {
    id: 5,
    name: 'SmartGo',
    tagline: 'Modern Service Management System',
    icon: Zap,
    color: 'bg-purple-500',
    description: 'Next-generation management platform for service-based businesses. Integrate CRM, warehouse, and financial operations seamlessly.',
    features: [
      'Integrated CRM platform',
      'Warehouse & inventory control',
      'Financial management & reporting',
      'User role segmentation',
      'Automated workflows',
      'Real-time analytics dashboard'
    ],
    industries: ['Service Businesses', 'Consulting Firms', 'Professional Services']
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our ERP Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-specific ERP systems designed to streamline your business operations and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 rounded-2xl transition-all text-left ${
                  selectedProduct.id === product.id
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  selectedProduct.id === product.id ? 'bg-white/20' : product.color
                }`}>
                  <Icon size={24} className={selectedProduct.id === product.id ? 'text-white' : 'text-white'} />
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className={`text-sm ${
                  selectedProduct.id === product.id ? 'text-orange-100' : 'text-gray-600'
                }`}>
                  {product.tagline}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${selectedProduct.color} mb-6`}>
                {<selectedProduct.icon size={32} className="text-white" />}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
              <p className="text-lg text-gray-600 mb-8">{selectedProduct.description}</p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.industries.map((industry, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all flex items-center space-x-2 group"
              >
                <span>Request Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Key Features</h4>
              <div className="space-y-4">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

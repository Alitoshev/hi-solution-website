import { Code2, Palette, Smartphone, Puzzle, Wrench, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'ERP Development',
    description: 'Custom ERP systems tailored to your specific business needs and industry requirements',
    features: ['Industry-specific modules', 'Scalable architecture', 'Cloud or on-premise deployment'],
    color: 'bg-blue-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that your team will love to use every day',
    features: ['User research & testing', 'Responsive design', 'Design systems & prototypes'],
    color: 'bg-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native apps', 'Offline functionality', 'Real-time synchronization'],
    color: 'bg-green-500'
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Bespoke software solutions built to solve your unique business challenges',
    features: ['Modern tech stack', 'Agile methodology', 'Full-cycle development'],
    color: 'bg-orange-500'
  },
  {
    icon: Puzzle,
    title: 'Integration & API Services',
    description: 'Connect your systems seamlessly with third-party services and platforms',
    features: ['REST & GraphQL APIs', 'Third-party integrations', 'Data migration services'],
    color: 'bg-red-500'
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: '24/7 maintenance and support to keep your systems running smoothly',
    features: ['24/7 availability', 'Regular updates', 'Performance monitoring'],
    color: 'bg-teal-500'
  },
  {
    icon: TrendingUp,
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and optimize your workflows for maximum efficiency',
    features: ['Workflow automation', 'Process optimization', 'ROI analysis & reporting'],
    color: 'bg-indigo-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology services to support your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

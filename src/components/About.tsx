import { Target, Eye, Users, Workflow } from 'lucide-react';

const team = [
  { role: 'UI/UX Design', members: '2+', icon: '🎨' },
  { role: 'Java Backend', members: '2+', icon: '☕' },
  { role: 'React Frontend', members: '2+', icon: '⚛️' },
  { role: 'Marketing', members: '1+', icon: '📈' },
  { role: 'Sales', members: '1+', icon: '💼' }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your business needs and identify key challenges to address'
  },
  {
    step: '02',
    title: 'Designing',
    description: 'Our UI/UX team creates intuitive interfaces tailored to your workflow'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Expert developers build robust, scalable solutions using modern tech'
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Seamless launch with training and onboarding for your team'
  },
  {
    step: '05',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and 24/7 technical support'
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology to solve complex business challenges'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build solutions that truly meet your needs'
  },
  {
    icon: Eye,
    title: 'Quality',
    description: 'We maintain the highest standards in every project we deliver'
  },
  {
    icon: Workflow,
    title: 'Efficiency',
    description: 'Streamline operations and maximize productivity with our systems'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Hi IT Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to transforming businesses through innovative ERP solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To empower businesses of all sizes with powerful, user-friendly ERP systems that automate operations,
              increase efficiency, and drive sustainable growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every business deserves access to enterprise-grade technology. That's why we've created
              industry-specific solutions that are both powerful and easy to use.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To become the leading provider of vertical ERP solutions in Central Asia, known for innovation,
              reliability, and exceptional customer success.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where businesses can focus on what they do best, while our systems handle the complexity
              of operations, inventory, sales, and customer relationships.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h3>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We are a 7+ member professional team with expertise across design, development, marketing, and sales
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4">{member.icon}</div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{member.members}</div>
                  <div className="text-sm font-medium text-gray-700">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <div className="text-5xl font-bold text-orange-600/20 mb-3">{item.step}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

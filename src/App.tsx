import React, { useState } from 'react';
import { 
  Cloud, 
  Settings, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Server,
  Shield,
  Zap,
  Globe,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Lock,
  Cpu,
  HardDrive,
  Network
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [captcha, setCaptcha] = useState({ code: '', answer: '' });
  const [captchaError, setCaptchaError] = useState('');

  // Generate random string CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha({ code, answer: '' });
    setCaptchaError('');
  };

  // Initialize CAPTCHA when contact tab is opened
  React.useEffect(() => {
    if (activeTab === 'contact') {
      generateCaptcha();
    }
  }, [activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'captchaAnswer') {
      setCaptcha(prev => ({ ...prev, answer: value }));
      setCaptchaError('');
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (captcha.answer !== captcha.code) {
      setCaptchaError('Incorrect code. Please try again.');
      generateCaptcha();
      return;
    }

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If validation passes, show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
    generateCaptcha();
  };

  const tabs = [
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'technologies', label: 'Technologies', icon: Cpu },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ];

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud infrastructure on AWS, Azure, and Google Cloud Platform.'
    },
    {
      icon: GitBranch,
      title: 'DevOps Engineering',
      description: 'Streamline development workflows with CI/CD pipelines, automation, and infrastructure as code.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards and regulations.'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Analytics',
      description: 'Set up comprehensive monitoring, logging, and analytics solutions for optimal performance insights.'
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Manage and optimize your infrastructure for cost-effectiveness, performance, and reliability.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance application performance through load balancing, caching, and resource optimization.'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'DigitalOcean']
    },
    {
      category: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions']
    },
    {
      category: 'Infrastructure as Code',
      items: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi']
    },
    {
      category: 'Monitoring & Logging',
      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog' ]
    },
    {
      category: 'Security Tools',
      items: [ 'AWS IAM', 'Okta', 'SonarQube']
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About HiramyaTech</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Based in the vibrant tech hub of Bangalore, we are a leading cloud platform architecture and DevOps engineering company 
                dedicated to transforming businesses through innovative cloud solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We empower organizations to leverage the full potential of cloud computing through expert architecture design, self-service platforms,
                  robust DevOps practices, and cutting-edge engineering solutions. Our team of cloud professionals brings 
                  years of experience in building scalable, secure, and cost-effective cloud infrastructures.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Reach</h4>
                    <p className="text-gray-600">Serving clients worldwide from our Bangalore headquarters</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Expert Team</h4>
                      <p className="text-gray-600 text-sm">Certified cloud architects and DevOps engineers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Proven Track Record</h4>
                      <p className="text-gray-600 text-sm">Provisoned 100s of self-service IaC platforms for microservices, and devops pipelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Security First</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade security and compliance standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive cloud and DevOps solutions tailored to accelerate your digital transformation journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-lg w-fit mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
              <p className="text-blue-100 mb-6">Let's discuss how we can help you achieve your cloud goals</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Started Today
              </button>
            </div>
          </div>
        );

      case 'technologies':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Technologies We Master</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We work with cutting-edge technologies and industry-leading platforms to deliver robust, scalable solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-lg mr-3">
                      {tech.category === 'Cloud Platforms' && <Cloud className="h-5 w-5 text-blue-600" />}
                      {tech.category === 'DevOps Tools' && <GitBranch className="h-5 w-5 text-blue-600" />}
                      {tech.category === 'Infrastructure as Code' && <Layers className="h-5 w-5 text-blue-600" />}
                      {tech.category === 'Monitoring & Logging' && <Monitor className="h-5 w-5 text-blue-600" />}
                      {tech.category === 'Databases' && <Database className="h-5 w-5 text-blue-600" />}
                      {tech.category === 'Security Tools' && <Shield className="h-5 w-5 text-blue-600" />}
                    </div>
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Always Learning, Always Evolving</h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  The technology landscape evolves rapidly, and so do we. Our team continuously updates their skills 
                  and certifications to stay ahead of the curve and bring you the latest innovations in cloud computing and DevOps.
                </p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to embark on your cloud transformation journey? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Address</h4>
                      <p className="text-gray-600">
                        HiramyaTech OPC Pvt Ltd,<br />
                        B-102, Habitat Splendour,<br />
                        Brookefield, Kundalahalli,<br />
                        Bangalore 560037<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91-91770 61000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@hiramyatech.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>
                  
                  {/* CAPTCHA */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Security Check: Enter the code shown below
                    </label>
                    <div className="mb-3">
                      <div className="bg-white border-2 border-gray-300 rounded-lg p-3 font-mono text-xl font-bold text-gray-800 tracking-wider text-center select-none" 
                           style={{ 
                             background: 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)',
                             backgroundSize: '20px 20px',
                             backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                           }}>
                        {captcha.code}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="text" 
                        name="captchaAnswer"
                        value={captcha.answer}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="Enter the code above"
                        maxLength={6}
                        required
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap"
                      >
                        New Code
                      </button>
                    </div>
                    {captchaError && (
                      <p className="text-red-600 text-sm mt-2">{captchaError}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-2 rounded-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HiramyaTech</h1>
                <p className="text-xs text-gray-500">Cloud Architecture & DevOps Excellence</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 py-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-2 rounded-lg">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">HiramyaTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative cloud architecture and DevOps solutions
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 HiramyaTech OPC Pvt. Ltd.</span>
              <span>•</span>
              <span>Bangalore, India</span>
              <span>•</span>
              <span>info@hiramyatech.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
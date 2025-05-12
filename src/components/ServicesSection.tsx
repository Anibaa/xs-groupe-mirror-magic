
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Maritime Transport",
    description: "Efficient maritime transport solutions for various cargo types with global reach and reliable schedules.",
    icon: "🚢",
  },
  {
    title: "Logistics Solutions",
    description: "End-to-end logistics services including warehousing, distribution, and supply chain optimization.",
    icon: "🏭",
  },
  {
    title: "Customs Services",
    description: "Expert customs clearance and documentation services to ensure smooth international trade operations.",
    icon: "📝",
  },
  {
    title: "Freight Forwarding",
    description: "Comprehensive freight forwarding services for air, sea, and land transport with global coverage.",
    icon: "✈️",
  },
  {
    title: "Supply Chain Management",
    description: "Integrated supply chain solutions designed to optimize efficiency and reduce operational costs.",
    icon: "⚙️",
  },
  {
    title: "Consulting Services",
    description: "Expert consulting in maritime logistics, regulatory compliance, and transport optimization.",
    icon: "💼",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive maritime and logistics services designed to meet your specific business needs with efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full reveal-animation" data-delay={index * 100}>
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

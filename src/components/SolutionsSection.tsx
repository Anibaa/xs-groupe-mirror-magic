
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    title: "Port Operations",
    description: "Efficient port operations and management services ensuring smooth loading and unloading processes.",
    imageSrc: "https://images.unsplash.com/photo-1504433374832-4fcf45f40967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    title: "Container Shipping",
    description: "Reliable container shipping services with global coverage and flexible scheduling options.",
    imageSrc: "https://images.unsplash.com/photo-1577431264915-0902e1d19e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Cargo Transport",
    description: "Specialized cargo transport solutions for various types of goods, including oversized and dangerous materials.",
    imageSrc: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of tailored solutions designed to address specific challenges in maritime logistics and transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg h-full reveal-animation" data-delay={index * 150}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.imageSrc} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

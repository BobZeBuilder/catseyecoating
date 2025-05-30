import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Zap,
  Palette,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function PowderCoatingWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/CEClogo3.svg" alt="CEC Logo" className="w-12 h-12" />
            <span className="text-xl font-bold">Cats Eye Coating</span>
          </div>
          <nav className="hidden font-medium md:flex space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
          <Button>Get Quote</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Established 2024</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Powder Coating
                <span className="text-primary"> Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your metal products with our durable, powder coating services. Superior finish
                quality, faster turnaround, and unmatched durability guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                <Button size="lg" className="text-lg px-8">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </a>
                <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View Gallery
                </Button>
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  4-7 Day Turnaround
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Quality Guaranteed
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/heroImage.jpg?height=500&width=600"
                alt="Powder coating process"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Customer Satisfaction</p>
                    <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">Parts Coated</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">11</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1</div>
              <div className="text-primary-foreground/80">Year Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Powder Coating Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From automotive parts to architectural components, we provide comprehensive coating services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Automotive Coating</CardTitle>
                <CardDescription>Wheels, frames, engine components, and custom automotive parts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wheel refinishing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Frame restoration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom colors
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Industrial Coating</CardTitle>
                <CardDescription>Heavy-duty protection for industrial equipment and machinery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Machinery parts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Safety equipment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Corrosion protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Metal Polishing</CardTitle>
                <CardDescription>Beautiful, durable finishes for metalwork</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stainless Steel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Aluminum
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Chrome
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Work</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality and precision of our powder coating work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/purplewheel.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Automotive Wheels</h3>
                  <p className="text-sm text-muted-foreground">Custom color finish with clear coat protection</p>
                </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/gallery1.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Custom Pieces</h3>
                  <p className="text-sm text-muted-foreground">Prismatic black color finish</p>
                </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/whitemazdawheel.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Automotive Wheels</h3>
                  <p className="text-sm text-muted-foreground">Custom color finish with clear coat protection</p>
                </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/gallery4.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Bike Frame</h3>
                  <p className="text-sm text-muted-foreground">Custom green coating for maximum durability</p>
                </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/gallery5.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Bike Parts</h3>
                  <p className="text-sm text-muted-foreground">Heavy-duty uniform black coating for maximum durability</p>
                </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={`/gallery6.jpg?height=300&width=300&text=Project`}
                    alt={`Project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Custom Pieces</h3>
                  <p className="text-sm text-muted-foreground">Custom gradient for art piece, long lasting color</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 5-step process ensures perfect results every time
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: Phone, title: "1. Consultation", desc: "Discuss your needs and get a quote" },
              { icon: MapPin, title: "2. Dropoff", desc: "Drop off the parts at our location" },
              { icon: Wrench, title: "3. Preparation", desc: "Cleaning and surface preparation" },
              { icon: Palette, title: "4. Coating", desc: "Professional powder coating application" },
              { icon: CheckCircle, title: "5. Finish", desc: "Quality check and pickup" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Powder Coating?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Superior Durability</h3>
                    <p className="text-white/80">
                      Lasts for 300% longer than traditional paint with excellent chip and scratch resistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                    <p className="text-white/80">
                      Zero VOCs and 98% of overspray can be recycled, making it environmentally safe
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Effective</h3>
                    <p className="text-white/80">
                      Lower long-term costs due to durability and minimal maintenance requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Powder coating benefits"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Johnson",
                company: "Johnson Auto Restoration",
                text: "Cats Eye Coating transformed our vintage car wheels. The quality is outstanding and the turnaround time was incredible.",
                rating: 5,
              },
              {
                name: "Sarah Chen",
                company: "Metro Manufacturing",
                text: "We've been using their services for 3 years. Consistent quality, competitive pricing, and excellent customer service.",
                rating: 5,
              },
              {
                name: "David Rodriguez",
                company: "Custom Fabrication Co.",
                text: "The best powder coating service in the area. They handle everything from small parts to large architectural pieces.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Get In Touch</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free quote today. We'll respond within 2 hours during business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">(773) 431-6009</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">catseyecoating@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">123 Industrial Blvd, Manufacturing District</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Free Delivery</p>
                    <p className="text-green-700 text-sm">Within 10 miles of our facility</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <img src="/CEClogo3.svg" alt="CEC Logo" className="w-10 h-10" />
                </div>
                <span className="text-xl font-bold">Cats Eye Coating</span>
              </div>
              <p className="text-slate-400 mb-4">
                Professional powder coating services with unmatched quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Automotive Coating</li>
                <li>Industrial Coating</li>
                <li>Architectural Coating</li>
                <li>Custom Projects</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Our Process</li>
                <li>Quality Standards</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>(773) 431-6009</li>
                <li>catseyecoating@gmail.com</li>
                <li>123 Industrial Blvd</li>
                <li>Mon-Fri: 7AM-6PM</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 Cats Eye Coating. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

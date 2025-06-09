import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will contact you soon via WhatsApp or email."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-atech-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-atech-slate-600 max-w-3xl mx-auto">
            Contact us through WhatsApp or email to discuss your technology needs and get started on your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-atech-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-atech-accent rounded-lg p-3 mr-4">
                    <MessageCircle className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atech-slate-900">WhatsApp</h4>
                    <a 
                      href="https://wa.me/67571570096" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-atech-accent hover:text-green-600 transition-colors"
                    >
                      +67571570096
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-atech-primary rounded-lg p-3 mr-4">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atech-slate-900">Email</h4>
                    <a 
                      href="mailto:info@atech-png.com.pg" 
                      className="text-atech-primary hover:text-blue-800 transition-colors"
                    >
                      info@atech-png.com.pg
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-atech-secondary rounded-lg p-3 mr-4">
                    <Globe className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atech-slate-900">Global Services</h4>
                    <p className="text-atech-slate-600">Available worldwide for all service inquiries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-atech-slate-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-atech-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Support Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-atech-slate-900 mb-6">Quick Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Interest
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Design & Development</SelectItem>
                      <SelectItem value="website-support">Website Updates & Support</SelectItem>
                      <SelectItem value="erp-software">ERP Software</SelectItem>
                      <SelectItem value="airline-ticketing">Airline Ticketing</SelectItem>
                      <SelectItem value="hardware-software">Hardware & Software Services</SelectItem>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-atech-primary hover:bg-blue-800 text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

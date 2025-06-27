import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses with tailored AI models through Fine-tuning and RAG approaches.
            </p>
            <Badge variant="secondary" className="bg-emerald-600 text-white">
              AI Models as a Service
            </Badge>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Fine-tuning Solutions</li>
              <li>RAG Implementation</li>
              <li>AI Strategy Consulting</li>
              <li>Model Deployment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>buildmyai.tech@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9347223876</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Lightbulb, CheckCircle } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Choose Your AI Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not all AI problems are the same. We help you choose between Fine-tuning and RAG based on your specific
            needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fine-tuning Card */}
          <Card className="relative overflow-hidden border-2 hover:border-emerald-200 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Brain className="h-6 w-6 text-emerald-600" />
                </div>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Deep Customization
                </Badge>
              </div>
              <CardTitle className="text-2xl text-gray-900">Fine-Tuning</CardTitle>
              <CardDescription className="text-lg">
                Perfect for companies needing models deeply aligned to specific tasks or behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom model behavior and responses</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Domain-specific expertise embedded</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consistent performance on specialized tasks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lower inference costs for high-volume use</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2 font-medium">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Customer Support</Badge>
                  <Badge variant="outline">Content Generation</Badge>
                  <Badge variant="outline">Code Assistance</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RAG Card */}
          <Card className="relative overflow-hidden border-2 hover:border-teal-200 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Database className="h-6 w-6 text-teal-600" />
                </div>
                <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                  Dynamic Knowledge
                </Badge>
              </div>
              <CardTitle className="text-2xl text-gray-900">RAG (Retrieval-Augmented Generation)</CardTitle>
              <CardDescription className="text-lg">
                Ideal when dynamic, real-time knowledge access is better than static learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time access to updated information</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparent source attribution</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Easy knowledge base updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduced hallucination risks</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2 font-medium">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Knowledge Base</Badge>
                  <Badge variant="outline">Research Assistant</Badge>
                  <Badge variant="outline">Document Q&A</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decision Helper */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900">Not Sure Which Approach?</CardTitle>
              <CardDescription className="text-lg">
                Our experts will analyze your use case and recommend the optimal solution during a free consultation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

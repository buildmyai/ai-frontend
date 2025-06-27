"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Users,
  MessageSquare,
  PenTool,
  Eye,
  Heart,
  Shield,
  Target,
  Mic,
  Code,
  Mail,
  ScanLine,
  TrendingUp,
  Languages,
  Sparkles,
} from "lucide-react"

interface AIModel {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category:
    | "Document Processing"
    | "HR & Recruitment"
    | "Customer Service"
    | "Content & Media"
    | "Security & Analytics"
    | "Development"
  trending: boolean
}

const aiModels: AIModel[] = [
  {
    id: "pdf-scanner",
    name: "PDF Scanner & Document Processing",
    description: "Extract, analyze, and process data from PDFs and documents",
    icon: <FileText className="h-5 w-5" />,
    category: "Document Processing",
    trending: true,
  },
  {
    id: "resume-screener",
    name: "Resume Screener & HR Automation",
    description: "Automatically screen resumes and match candidates to job requirements",
    icon: <Users className="h-5 w-5" />,
    category: "HR & Recruitment",
    trending: true,
  },
  {
    id: "chatbot",
    name: "Intelligent Chatbots",
    description: "Customer support and conversational AI assistants",
    icon: <MessageSquare className="h-5 w-5" />,
    category: "Customer Service",
    trending: true,
  },
  {
    id: "content-generation",
    name: "Content Generation",
    description: "Generate marketing copy, articles, and creative content",
    icon: <PenTool className="h-5 w-5" />,
    category: "Content & Media",
    trending: true,
  },
  {
    id: "image-recognition",
    name: "Image Recognition & Computer Vision",
    description: "Analyze images, detect objects, and extract visual insights",
    icon: <Eye className="h-5 w-5" />,
    category: "Content & Media",
    trending: false,
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis",
    description: "Analyze customer feedback and social media sentiment",
    icon: <Heart className="h-5 w-5" />,
    category: "Security & Analytics",
    trending: false,
  },
  {
    id: "fraud-detection",
    name: "Fraud Detection",
    description: "Identify suspicious transactions and prevent fraud",
    icon: <Shield className="h-5 w-5" />,
    category: "Security & Analytics",
    trending: true,
  },
  {
    id: "recommendation-system",
    name: "Recommendation Systems",
    description: "Personalized product and content recommendations",
    icon: <Target className="h-5 w-5" />,
    category: "Security & Analytics",
    trending: false,
  },
  {
    id: "voice-recognition",
    name: "Voice & Speech Recognition",
    description: "Convert speech to text and voice command processing",
    icon: <Mic className="h-5 w-5" />,
    category: "Content & Media",
    trending: true,
  },
  {
    id: "code-assistant",
    name: "Code Generation & Programming Assistant",
    description: "AI-powered coding assistance and code generation",
    icon: <Code className="h-5 w-5" />,
    category: "Development",
    trending: true,
  },
  {
    id: "email-classification",
    name: "Email Classification & Automation",
    description: "Automatically categorize and respond to emails",
    icon: <Mail className="h-5 w-5" />,
    category: "Customer Service",
    trending: false,
  },
  {
    id: "data-extraction",
    name: "Data Extraction & OCR",
    description: "Extract structured data from unstructured sources",
    icon: <ScanLine className="h-5 w-5" />,
    category: "Document Processing",
    trending: true,
  },
  {
    id: "predictive-analytics",
    name: "Predictive Analytics",
    description: "Forecast trends and predict future outcomes",
    icon: <TrendingUp className="h-5 w-5" />,
    category: "Security & Analytics",
    trending: false,
  },
  {
    id: "language-translation",
    name: "Language Translation",
    description: "Real-time translation and multilingual support",
    icon: <Languages className="h-5 w-5" />,
    category: "Content & Media",
    trending: false,
  },
]

const categories = Array.from(new Set(aiModels.map((model) => model.category)))

export function AIModelsSelector() {
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const toggleModel = (modelId: string) => {
    setSelectedModels((prev) => (prev.includes(modelId) ? prev.filter((id) => id !== modelId) : [...prev, modelId]))
  }

  const filteredModels =
    selectedCategory === "All" ? aiModels : aiModels.filter((model) => model.category === selectedCategory)

  const handleProceedToBooking = () => {
  // Store selected models in localStorage or context for the booking form
  localStorage.setItem("selectedAIModels", JSON.stringify(selectedModels))
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
}


  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-emerald-100 text-emerald-700 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Trending AI Solutions
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What AI Models Do You Need?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the AI solutions that match your business needs. We'll discuss your specific requirements during the
            consultation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
            className={selectedCategory === "All" ? "bg-emerald-600 hover:bg-emerald-700" : "hover:bg-emerald-50"}
          >
            All Models
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : "hover:bg-emerald-50"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* AI Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {filteredModels.map((model) => (
            <Card
              key={model.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedModels.includes(model.id)
                  ? "border-emerald-500 bg-emerald-50 shadow-md"
                  : "border-gray-200 hover:border-emerald-300"
              }`}
              onClick={() => toggleModel(model.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        selectedModels.includes(model.id)
                          ? "bg-emerald-200 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {model.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      {model.trending && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs w-fit">
                          🔥 Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedModels.includes(model.id) ? "border-emerald-500 bg-emerald-500" : "border-gray-300"
                    }`}
                  >
                    {selectedModels.includes(model.id) && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{model.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 mb-3">{model.description}</CardDescription>
                <Badge variant="outline" className="text-xs">
                  {model.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Models Summary */}
        {selectedModels.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-emerald-200">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-900">Selected AI Models ({selectedModels.length})</CardTitle>
                <CardDescription>These models will be discussed during your consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedModels.map((modelId) => {
                    const model = aiModels.find((m) => m.id === modelId)
                    return (
                      <Badge key={modelId} variant="secondary" className="bg-emerald-100 text-emerald-700 px-3 py-1">
                        {model?.name}
                      </Badge>
                    )
                  })}
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={handleProceedToBooking}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 px-8"
                  >
                    Proceed to Book Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

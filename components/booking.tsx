"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock, User, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [bookingCompleted, setBookingCompleted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [selectedAIModels, setSelectedAIModels] = useState<string[]>([])

  useEffect(() => {
    const savedModels = localStorage.getItem("selectedAIModels")
    if (savedModels) {
      setSelectedAIModels(JSON.parse(savedModels))
    }
  }, [])

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const bookingData = {
    name: formData.name,
    email: formData.email,
    business: formData.company,
    message: formData.message,
    selected_models: selectedAIModels,
  };

  try {
    const response = await fetch("http://localhost:8000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Booking failed");
    }

    // Optional: You could also log the returned booking ID or details
    const result = await response.json();
    console.log("Booking successful:", result);

    setBookingCompleted(true);
  } catch (error) {
    console.error("Booking error:", error);
    alert("Something went wrong while booking. Please try again.");
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const aiModels = [
    { id: "pdf-scanner", name: "PDF Scanner" },
    { id: "resume-screener", name: "Resume Screener" },
    { id: "chatbot", name: "Chatbots" },
    { id: "content-generation", name: "Content Generation" },
    { id: "image-recognition", name: "Image Recognition" },
    { id: "sentiment-analysis", name: "Sentiment Analysis" },
    { id: "fraud-detection", name: "Fraud Detection" },
    { id: "recommendation-system", name: "Recommendation Systems" },
    { id: "voice-recognition", name: "Voice Recognition" },
    { id: "code-assistant", name: "Code Assistant" },
    { id: "email-classification", name: "Email Classification" },
    { id: "data-extraction", name: "Data Extraction" },
    { id: "predictive-analytics", name: "Predictive Analytics" },
    { id: "language-translation", name: "Language Translation" },
  ]

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your AI needs and determine the best approach for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            {!bookingCompleted ? (
              <>
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CalendarDays className="h-6 w-6" />
                    Schedule Your Session
                  </CardTitle>
                  <CardDescription className="text-emerald-100">
                    30-minute consultation to explore your AI requirements
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Calendar Section */}
                      <div className="space-y-6">
                        <div>
                          <Label className="text-lg font-semibold text-gray-900 mb-4 block">Select Date</Label>
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                              className="rounded-md"
                            />
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <Label className="text-lg font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            Available Times
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={selectedTime === time ? "default" : "outline"}
                                className={`${
                                  selectedTime === time
                                    ? "bg-emerald-600 hover:bg-emerald-700"
                                    : "hover:bg-emerald-50 hover:border-emerald-200"
                                }`}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Form Section */}
                      <div className="space-y-6">
                        <div>
                          <Label className="text-lg font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Your Information
                          </Label>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="john@company.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="company">Company Name</Label>
                              <Input
                                id="company"
                                type="text"
                                placeholder="Your Company"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message">Tell us about your AI needs</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your use case, current challenges..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-700 px-12 py-3 text-lg font-semibold"
                        disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                      >
                        Book Free Consultation
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </>
            ) : (
              <CardContent className="p-8 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <CheckCircle className="h-20 w-20 text-emerald-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-emerald-700">🎉 Booking Confirmed!</h3>
                <p className="text-lg text-gray-700">
                  Thank you, <strong>{formData.name}</strong>. Your consultation has been booked.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 inline-block text-left mx-auto">
                  <h4 className="font-semibold text-emerald-900 mb-4">Booking Details</h4>
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li><strong>Full Name:</strong> {formData.name}</li>
                    <li><strong>Email:</strong> {formData.email}</li>
                    <li><strong>Company:</strong> {formData.company || 'N/A'}</li>
                    <li><strong>Message:</strong> {formData.message || 'N/A'}</li>
                    <li><strong>Date:</strong> {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}</li>
                    <li><strong>Time:</strong> {selectedTime || 'Not selected'}</li>
                    <li><strong>Duration:</strong> 30 minutes</li>
                    <li>
                      <strong>Selected AI Models:</strong>{" "}
                      {selectedAIModels.length > 0 ? (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedAIModels.map((modelId) => {
                            const model = aiModels.find((m) => m.id === modelId)
                            return (
                              <Badge key={modelId} variant="secondary" className="bg-emerald-100 text-emerald-700">
                                {model?.name || modelId}
                              </Badge>
                            )
                          })}
                        </div>
                      ) : (
                        "No model selected"
                      )}
                    </li>
                  </ul>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}

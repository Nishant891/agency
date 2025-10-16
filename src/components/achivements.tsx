// components/Achievements.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Trophy, Rocket, Code, MapPin, Briefcase } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Started During 2nd Year of College",
    description: "Laid the foundation for our journey with late-night coding sessions and endless coffee.",
    date: "2021",
    icon: Rocket,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Got Our First Gig",
    description: "Delivered our first client project - a responsive e-commerce website that exceeded expectations.",
    date: "2022",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Participated in Various Hackathons",
    description: "Competed in 12+ hackathons across India, winning 3 major competitions.",
    date: "2022-2023",
    icon: Code,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Created Internal Tool for Enterprise",
    description: "Built a workflow automation tool adopted by a Fortune 500 company, saving 200+ hours/month.",
    date: "2023",
    icon: Code,
    color: "bg-amber-500",
  },
  {
    id: 5,
    title: "Established Freelancer Collective",
    description: "Formally registered our freelance team with 15+ active clients and 98% satisfaction rate.",
    date: "2024",
    icon: Briefcase,
    color: "bg-emerald-500",
  },
  {
    id: 6,
    title: "Won North Bengal Freelancing Award",
    description: "Recognized as 'Top Emerging Tech Talent' at the regional innovation summit.",
    date: "2024",
    icon: Trophy,
    color: "bg-rose-500",
  },
  {
    id: 7,
    title: "Moved to Bangalore",
    description: "Relocated to India's tech capital to scale our operations and join the startup ecosystem.",
    date: "2025",
    icon: MapPin,
    color: "bg-indigo-500",
  },
];

export function Achievements() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our Journey So Far
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From college dorms to Bangalore's tech scene - milestones that shaped us
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 to-transparent"></div>
        
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <Card className="w-full max-w-md p-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${achievement.color} p-2 rounded-lg`}>
                      <achievement.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="font-bold text-lg">{achievement.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
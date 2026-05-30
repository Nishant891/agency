// components/Achievements.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Trophy, Rocket, Code, MapPin, Briefcase } from "lucide-react";
import { useRef } from "react";

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
    date: "2023",
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

// A single circular node on the timeline. When the dot's element crosses the
// viewport's vertical center (which is where the growing line tip is), the
// stroke "wraps around" the circumference like a loader, instantly.
function TimelineDot() {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger band sits just below viewport center so the loader fills the moment
  // the growing line is about to reach the dot. `once: true` latches the state
  // so the fill always completes even if the user scrolls past quickly.
  const inView = useInView(ref, { margin: "-50% 0px -40% 0px", once: true });

  const size = 22;
  const radius = 9;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Background ring (matches the gray timeline) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth={1.5}
        />
        {/* Loader fill — strokes the full circumference instantly */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          strokeDasharray={circumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? 0 : circumference }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          transform={`rotate(-90 ${center} ${center})`}
        />
        {/* Solid inner dot reveals after the ring finishes */}
        <motion.circle
          cx={center}
          cy={center}
          r={3.5}
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />
      </svg>
    </div>
  );
}

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={containerRef} className="relative">
        {/* Static background line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border/50"></div>

        {/* Growing colored line tied to scroll */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/60 origin-top"
        />

        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full max-w-md"
              >
                <Card className="p-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white dark:bg-neutral-900 p-2 rounded-lg border border-border">
                        <achievement.icon className="h-5 w-5 text-black dark:text-white" />
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
              </motion.div>

              <TimelineDot />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

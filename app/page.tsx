'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useGSAP } from '@gsap/react'
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    //section 1 card animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-container",
        start: "clamp(top 50%)",
        // end: "top top",
        scrub: true,
        // markers: true
      }
    });

    tl.to(".card1-anim", { xPercent: 20 })
      .to(".card3-anim", { xPercent: -20 }, "<")
      .to(".card1-anim", { yPercent: 200, opacity: .5, rotation: -15, duration: 2 }, ">-.5")
      .to(".card2-anim", { yPercent: 200, opacity: .5, duration: 2 }, "<.07")
      .to(".card3-anim", { yPercent: 200, opacity: .5, rotation: 15, duration: 2 }, "<.07");

    //end

    //section 3 card animaiton
    gsap.timeline({
      scrollTrigger: {
        trigger: ".sec3-container",
        start: "top top",
        end: "bottom 50%",
        pin: true,
        // markers: true,
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-flip-container",
        start: "top 50%",
        end: "top top",
        // markers: true,
        scrub: true
      }
    });

    tl2.from(".flip-card1-anim", { autoAlpha: .5, yPercent: -250, xPercent: 100, rotation: -20, duration: 5 })
      .from(".flip-card2-anim", { autoAlpha: .5, yPercent: -250, duration: 5 }, "<.03")
      .from(".flip-card3-anim", { autoAlpha: .5, yPercent: -250, xPercent: -100, rotation: 20, duration: 5 }, "<.04")
      .to(".flip-card1-anim-inner", { rotationY: 180 }, ">")
      .to(".flip-card2-anim-inner", { rotationY: 180 }, ">")
      .to(".flip-card3-anim-inner", { rotationY: 180 }, ">")



  }, { scope: containerRef });

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Section 1: Welcome with 3 cards at bottom 50% */}
      <section className="h-screen bg-background flex flex-col">
        {/* Top 50% - Hero content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-6xl font-bold text-primary text-balance">Welcome to Our Platform</h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Discover amazing features and services designed to transform your experience
            </p>
          </div>
        </div>

        {/* Bottom 50% - Cards area (cards are 30% height of viewport) */}
        <div className="card-container flex-1 flex items-start justify-center pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 w-1/2 max-w-2xl">
            {/* Card 1 */}
            <Card className="card1-anim z-[1] h-[30vh] bg-card hover:shadow-lg transition-shadow duration-300 max-w-[200px]" >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary rounded-lg mb-3 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Experience
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="card2-anim z-[1] h-[30vh] bg-card hover:shadow-lg transition-shadow duration-300 max-w-[200px]">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-secondary rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  guarantee.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="card3-anim z-[1] h-[30vh] bg-card hover:shadow-lg transition-shadow duration-300 max-w-[200px]">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-accent rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">User Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  enjoyable.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <p className="w-1/2 text-[20px] p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque! Ad, expedita facere eos reiciendis enim esse cumque rem aliquid molestias corrupti corporis fuga nesciunt quasi dolorum harum! Ullam, eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias aperiam asperiores ad, iusto impedit in laudantium earum obcaecati non eum officia fugiat quaerat? Officiis ducimus sit earum provident numquam!
          </p>
        </div>
      </section>

      {/* Section 2: Interactive Features */}
      <section className="relative z-[2] h-screen bg-blue-300 flex items-center justify-center">
        <div className="text-center space-y-8 px-4 max-w-4xl">
          <h2 className="text-5xl font-bold text-primary text-balance">Built for Innovation</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Our platform combines cutting-edge technology with user-centric design to deliver exceptional results. Join
            thousands of satisfied users who have transformed their workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">Advanced Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get deep insights into your data with our powerful analytics dashboard and real-time reporting.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">Smart Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automate repetitive tasks and focus on what matters most with our intelligent workflow system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services with Flip Cards */}
      <section className="sec3-container h-screen bg-background flex items-center justify-center">
        <div className="cards-flip-container w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-primary mb-4 text-balance">Our Services</h2>
            <p className="text-xl text-muted-foreground text-pretty">Hover over the cards to discover more details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flip Card 1 */}
            <div className="flip-card1-anim flip-card h-80">
              <div className="flip-card-inner flip-card1-anim-inner">
                <div className="flip-card-front bg-card border border-border flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-primary rounded-full mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Web Development</h3>
                  <p className="text-muted-foreground text-center">Modern web solutions</p>
                </div>
                <div className="flip-card-back bg-primary text-primary-foreground flex flex-col items-center justify-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-center leading-relaxed mb-6">
                    We create responsive, fast, and SEO-optimized websites using the latest technologies. From simple
                    landing pages to complex web applications, we deliver excellence.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• React & Next.js</li>
                    <li>• Mobile-first design</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flip Card 2 */}
            <div className="flip-card2-anim flip-card h-80">
              <div className="flip-card-inner flip-card2-anim-inner">
                <div className="flip-card-front bg-card border border-border flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Mobile Apps</h3>
                  <p className="text-muted-foreground text-center">Cross-platform solutions</p>
                </div>
                <div className="flip-card-back bg-secondary text-accent-foreground flex flex-col items-center justify-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                  <p className="text-center leading-relaxed mb-6">
                    Native and cross-platform mobile applications that provide seamless user experiences across iOS and
                    Android devices with optimal performance.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• React Native</li>
                    <li>• Native iOS & Android</li>
                    <li>• App Store optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flip Card 3 */}
            <div className="flip-card3-anim flip-card h-80">
              <div className="flip-card-inner flip-card3-anim-inner">
                <div className="flip-card-front bg-card border border-border flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-accent rounded-full mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Data Analytics</h3>
                  <p className="text-muted-foreground text-center">Insights & intelligence</p>
                </div>
                <div className="flip-card-back bg-accent text-accent-foreground flex flex-col items-center justify-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                  <p className="text-center leading-relaxed mb-6">
                    Transform your raw data into actionable insights with our advanced analytics platform. Make
                    data-driven decisions with confidence and precision.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Real-time dashboards</li>
                    <li>• Predictive modeling</li>
                    <li>• Custom reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action & Contact */}
      <section className="h-screen bg-muted flex items-center justify-center">
        <div className="text-center space-y-8 px-4 max-w-4xl">
          <h2 className="text-5xl font-bold text-primary text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Join thousands of satisfied customers who have transformed their business with our solutions. Let's build
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@company.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Business Ave, City</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

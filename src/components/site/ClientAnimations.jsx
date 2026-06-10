"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".site-shell",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.utils.toArray(".reveal-card").forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 46, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: Math.min(index * 0.04, 0.22),
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.utils.toArray(".parallax-img").forEach((el) => {
        gsap.to(el, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.to(".hero-orb", {
        rotate: 360,
        duration: 24,
        ease: "none",
        repeat: -1
      });

      gsap.to(".vertical-year", {
        y: -32,
        duration: 1.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

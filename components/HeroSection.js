"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Truck,
  Shield,
  Warehouse,
  Clock,
  Globe,
} from "lucide-react";

function CountUpNumber({ end = 99.9, duration = 1800, suffix = "%" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = progress * end;

      setValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {value.toFixed(1)}
      {suffix}
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.95) contrast(0.9) blur(2px)",
            transform: "scale(1.03)",
          }}
        ></div>

        {/* Stronger white overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/65 to-white/55"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#F7A233_49%,transparent_50%,transparent_98%,#F7A233_99%,transparent)] bg-[length:80px_80px]"></div>
        </div>

        {/* Color tint overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-asb-blue/20 via-[#F7A233]/10 to-asb-blue/20"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-asb-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7A233]/10 rounded-full -translate-x-32 translate-y-32 blur-2xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-asb-blue/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-asb-blue mb-6 leading-tight drop-shadow-sm">
              Tailor made fulfilment for
              <span className="text-[#F7A233] drop-shadow">
                {" "}
                ambitious entrepreneurs
              </span>
            </h1>

            {/* Text Glass Box */}
            <div className="bg-white/45 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-md">
              <p className="text-lg font-bold text-[#123B5D] mb-8 leading-relaxed drop-shadow-sm">
                <span className="font-extrabold text-[#0F3554]">
                  Grow your online store we'll handle the rest
                </span>
                <br />
                Whether you're just starting out or processing thousands of
                orders each month we make sure logistics aren't a bottleneck,
                but a growth accelerator.
              </p>

              <p className="text-lg font-bold text-[#123B5D] mb-0 leading-relaxed drop-shadow-sm">
                With our fulfilment service, we take care of storage, order
                processing, packaging, and shipping. You focus on your brand –
                we'll handle the rest.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/quote"
                className="group relative bg-[#F7A233] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e69122] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Request a quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative border-2 border-asb-blue text-asb-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-asb-blue hover:text-white transition-all duration-300 hover:scale-105 transform bg-white/90 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  Contact us
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-[#F7A233]/20 p-2 rounded-lg mr-3">
                    <Clock className="h-5 w-5 text-[#F7A233]" />
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-asb-blue">
                      <CountUpNumber end={99.9} duration={1800} suffix="%" />
                    </div>
                    <div className="text-gray-700 text-sm">
                      Order accuracy
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-[#F7A233]/20 p-2 rounded-lg mr-3">
                    <Globe className="h-5 w-5 text-[#F7A233]" />
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-asb-blue">
                      24/7
                    </div>
                    <div className="text-gray-700 text-sm">
                      Warehouse access
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-asb-blue/30">
                <div className="flex items-start">
                  <div className="bg-white/30 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-8 w-8 text-[#F7A233]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Same day shipping
                    </h3>
                    <p className="text-gray-200">
                      Orders before 3 PM shipped today
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start">
                  <div className="bg-asb-blue/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Warehouse className="h-8 w-8 text-asb-blue" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-asb-blue mb-2">
                      10,000 m² storage
                    </h3>
                    <p className="text-gray-700">
                      Modern warehouse in Barendrecht
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start">
                  <div className="bg-asb-blue/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-asb-blue" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-asb-blue mb-2">
                      Secure & insured
                    </h3>
                    <p className="text-gray-700">
                      24/7 CCTV and full insurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Buttons Below Secure & insured */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center justify-center bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 shadow-md">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-asb-blue font-bold text-sm">
                    No setup fees
                  </span>
                </div>

                <div className="flex items-center justify-center bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 shadow-md">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-asb-blue font-bold text-sm">
                    Flexible contracts
                  </span>
                </div>

                <div className="flex items-center justify-center bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 shadow-md">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-asb-blue font-bold text-sm">
                    24/7 support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="mt-16 pt-8 border-t border-gray-300/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-800">
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              {/* <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">Real-time tracking</span> */}
            </div>

            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              {/* <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">Custom packaging</span> */}
            </div>

            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              {/* <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">API integration</span> */}
            </div>

            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              {/* <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">
                Multi-channel support
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
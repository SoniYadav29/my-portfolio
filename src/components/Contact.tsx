"use client";

import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f7f5] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-orange-300/30 blur-[180px]" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              👋 Let&apos;s Connect
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              Have a project in mind?
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-gray-600">
              Whether you need a website, web application, or want to discuss a
              new idea, I'm just one message away.
            </p>

            <div className="mt-12 md:mt-26 space-y-6">
              <InfoCard
                icon={<Mail size={22} />}
                title="Email Me"
                value="soni8693yadav@email.com"
                href="mailto:soni8693yadav@email.com?subject=Portfolio Inquiry"
              />

              <InfoCard
                icon={<MessageCircle size={22} />}
                title="WhatsApp Me"
                value="+91 86930 15787"
                href="https://wa.me/918693015787?text=Hi,%20I%20need%20a%20website%20or%20web%20application%20help.%20Can%20we%20discuss%20my%20project?"
              />

              <InfoCard
                icon={<Phone size={22} />}
                title="Call Me"
                value="+91 86930 15787"
                href="tel:+918693015787"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-300/40"
              >
                Send Message
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
};

function InfoCard({ icon, title, value, href }: InfoCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-orange-100 p-4 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          <p className="text-sm text-gray-500">{value}</p>
        </div>
      </div>

      <div className="rounded-full bg-orange-100 p-3 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <ArrowUpRight size={18} />
      </div>
    </a>
  );
}

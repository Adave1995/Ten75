import Link from "next/link";

const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Dispatch & Routing", href: "/services#dispatch" },
    { label: "AI Customer Service", href: "/services#customer-service" },
    { label: "AI Call Handling", href: "/services#call-handling" },
    { label: "AI Sales & Quoting", href: "/services#sales" },
    { label: "AI Knowledge Management", href: "/services#knowledge" },
    { label: "AI Forecasting", href: "/services#forecasting" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 md:gap-16 pb-12 md:pb-16 border-b border-zinc-800">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-white">
                Ten75
              </span>
              <span className="text-xl font-bold text-amber-500">.ai</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              The fractional Chief AI Officer for propane distributors and fuel
              companies. Practical implementation. Measurable results.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hello@ten75.ai"
                className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-150"
              >
                hello@ten75.ai
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Ten75.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-pure-white">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-architectural-lg mb-4">
              molvyn studios
            </h3>
            <p className="text-body leading-relaxed">
              digital tools built with intention
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-true-black mb-4 uppercase tracking-widest">
              work
            </h4>
            <div className="space-y-2">
              <a href="/oracle" className="block text-subtle hover:text-true-black transition-colors duration-200">
                threshold oracle
              </a>
              <a href="/chatterbox" className="block text-subtle hover:text-true-black transition-colors duration-200">
                digital chatterbox
              </a>
              <a href="/relationship" className="block text-subtle hover:text-true-black transition-colors duration-200">
                relationship 8-ball
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-true-black mb-4 uppercase tracking-widest">
              connect
            </h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@molvynstudios.com"
                className="block text-subtle hover:text-true-black transition-colors duration-200"
              >
                hello@molvynstudios.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="mono-text text-xs text-subtle">
              © {currentYear} molvyn studios
            </p>
            <p className="mono-text text-xs text-subtle">
              crafted with intention and ai partnership
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

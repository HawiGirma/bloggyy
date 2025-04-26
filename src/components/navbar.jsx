import { Menu } from "lucide-react";
function Navbar() {
  return (
    <div className="container mx-auto  mx-auto px-4 py-6">
      {/* Header */}
      <header className="flex items-center font-sora justify-between">
        <div className="text-xl font-bold tracking-wider uppercase">Bloggy</div>

        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#" className="text-sm hover:text-red-600">
            Services
          </a>
          <a href="#" className="text-sm hover:text-red-500">
            About
          </a>
          <a href="#" className="text-sm hover:text-red-600">
            Careers
          </a>
          <a href="#" className="text-sm hover:text-red-600">
            Reviews
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="hidden text-sm uppercase md:block">
            Contact Us
          </button>
          <Menu className="md:hidden" />
        </div>
      </header>
    </div>
  );
}

export default Navbar;

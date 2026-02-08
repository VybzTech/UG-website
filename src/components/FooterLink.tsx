export default function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
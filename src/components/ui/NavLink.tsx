export default function NavLink({ href, children, mobile = false }) {
  return (
    <a
      href={href}
      className={`
        font-medium text-gray-700 hover:text-yellow-500
        transition-colors duration-300 relative group
        ${mobile ? 'block px-3 py-2 text-base' : 'text-sm'}
      `}
    >
      {children}
      <span
        className={`
          absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400
          group-hover:w-full transition-all duration-300
          ${mobile ? 'hidden' : 'block'}
        `}
      />
    </a>
  );
}
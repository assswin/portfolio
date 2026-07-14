export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center mt-20">
      <p className="text-white/40 font-medium">Thank you for visiting my portfolio!</p>
      <p className="text-xs text-white/20 mt-2">© {new Date().getFullYear()} Shree Aswin. All rights reserved.</p>
    </footer>
  );
}

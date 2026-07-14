export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg py-8 text-center mt-20">
      <p className="text-brand-muted font-medium">Thank you for visiting my portfolio!</p>
      <p className="text-xs text-brand-muted mt-2">© {new Date().getFullYear()} Shree Aswin. All rights reserved.</p>
    </footer>
  );
}

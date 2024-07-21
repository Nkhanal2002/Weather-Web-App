const Footer = () => {
  return (
    <footer className="bg-slate-100 text-center p-2 font-serif sm:text-lg">
      <p>Weather App &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

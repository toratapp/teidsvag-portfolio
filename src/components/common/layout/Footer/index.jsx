import envelope from "../../../../assets/envelope-email.png";

function Footer() {
  return ( 
    <footer className="mt-16 font-light text-center h-32 bg-primary text-gray333">
      <div className="flex justify-center items-center gap-3 mt-11">
        <img src={envelope} alt="envelope" />
        <p className="text-base">tora@teidsvag.com</p>
      </div>
      <p className="text-sm mt-8">Copyright &copy; 2024 Tora Oskal Eidsvåg</p>
    </footer>
   );
}

export default Footer;

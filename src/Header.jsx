const Header = () => {

    return (
    
    <header className="flex items-center justify-between px-10 py-4 bg-white">
        <h1 className="text-blue-600 font-bold">BrandKu</h1>

    
        <nav className="flex gap-6">
        <a className="text-gray-700 hover:text-blue-600" href="#">Beranda</a>
        <a className="text-gray-700 hover:text-blue-600" href="#">Fitur</a>
        <a className="text-gray-700 hover:text-blue-600" href="#">Harga</a>
        </nav>
    </header>
    );
}
export default Header;

function HomePageText() {
  return (
    <div className="absolute ml-10 sm:leading-tight leading-normal dark:text-white transition-all delay-150">
      <span className="sm:text-[60px] md:text-[80px] lg:text-[80px] font-Lato">Hey, my name is </span> <br />
      <span className="sm:text-[60px] md:text-[100px] lg:text-[100px] font-Lato font-bold">
        {' '}
        
        Ivan Korostenskij
      </span>
      <br />
      <span className="sm:text-[60px] md:text-[80px] lg:text-[80px] font-lato">I'm an aspiring developer</span>
    </div>
  );
}

export default HomePageText;

const Main = ({ children }) => {
  return (
    <main className='w-full h-full flex flex-col snap-y snap-mandatory  z-0'>
      {children}
    </main>
  );
};

export default Main;

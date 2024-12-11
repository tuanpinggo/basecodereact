import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="flex">
      <main className="h-full">
        <div className="mx-auto z-10 p-4 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;

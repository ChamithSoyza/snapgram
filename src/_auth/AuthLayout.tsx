import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthentiated = false;

  return (
    <>
      {isAuthentiated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img className="hidden md:block h-screen w1/2 object-cover bg-no-repeat" src="/assets/images/side-img.svg" alt="loading-page-side-img" />
        </>
      )}
    </>
  )
}

export default AuthLayout
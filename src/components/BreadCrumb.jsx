import React from 'react';

import { useLocation, Link } from 'react-router-dom';



const BreadCrumb = () => {

  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);



  return (

    <div className="w-full bg-[#FAFAFA]">

      <div className="mx-[20px] px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">

        <nav className="flex items-center space-x-2 text-sm font-bold">

          <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition">

            Home

          </Link>



          {pathnames.map((value, index) => {

            const last = index === pathnames.length - 1;

            const to = `/${pathnames.slice(0, index + 1).join('/')}`;



            return (

              <React.Fragment key={to}>

                <span className="text-[#BDBDBD] font-normal">&gt;</span>

                {last ? (

                  <span className="text-[#BDBDBD] capitalize">{value.replace(/-/g, ' ')}</span>

                ) : (

                  <Link to={to} className="text-[#252B42] hover:text-[#23A6F0] transition capitalize">

                    {value.replace(/-/g, ' ')}

                  </Link>

                )}

              </React.Fragment>

            );

          })}

        </nav>

      </div>

    </div>

  );

};



export default BreadCrumb;
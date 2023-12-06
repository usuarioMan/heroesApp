import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { HeroImage } from "../components/HeroImage";

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onClickReturn = () => {
    navigate(-1);
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Hero details */}
        <div className="lg:max-w-lg lg:self-end">
          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Hero information
            </h2>
            <div className="mt-4">
              <h1 className="text-3xl font-bold font-hero text-gray-900 sm:text-4xl tracking-wide	">
                {superhero}
              </h1>
            </div>
            {/* Hero information */}

            <div>
              <div className="px-4 sm:px-0">
                <p className="mt-4 max-w-2xl text-lg leading-6 text-gray-500 font-hero-text">
                  Information of {superhero}
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ">
                      Alter ego
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {alter_ego}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Publisher
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {publisher}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      First apperance
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {first_appearance}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Characters
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {characters}
                    </dd>
                  </div>

                  <button
                    type="button"
                    className="rounded-full bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                    onClick={onClickReturn}
                  >
                    Return
                  </button>
                </dl>
              </div>
            </div>
          </section>
        </div>
        {/* Hero image */}
        <HeroImage id={id} />
      </div>
    </div>
  );
};

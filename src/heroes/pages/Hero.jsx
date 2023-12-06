import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};
export const Hero = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
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
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={`../../../assets/${id}.jpg`}
              alt={"hero image"}
              className="h-full w-full object-cover object-center lg:h-auto lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
